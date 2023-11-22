import { Store, Parser, DataFactory, type Quad_Object, type Quad_Subject } from "n3";
import type { Prefixes, ListItemProps } from "./types";
import { ANNOTATION_PREDICATES, DEFAULT_PREFIXES } from "./consts";
import { defaultToUri, defaultFromUri } from "./helpers";

const { namedNode } = DataFactory;

/**
 * An in-memory N3.js store containing convenience functions
 */
export class RDFStore {
    public store: Store; // N3
    private parser: Parser; // N3
    public prefixes: Prefixes;

    constructor() {
        this.store = new Store();
        this.parser = new Parser();
        this.prefixes = DEFAULT_PREFIXES;
    }

    /**
     * Parses an RDF string in Turtle format into a store
     * 
     * @param {String} s RDF Turtle string
     */
    public load(s: string) {
        s = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n" + s; // temp fix for missing rdf: prefix from API
        const p = this.parser.parse(s, null, (prefixName, prefixNode) => {
            // callback for each prefix parsed
            if (!Object.values(DEFAULT_PREFIXES).includes(prefixNode.value)) {
                this.prefixes[prefixName] = prefixNode.value;
            }
        });
        this.store.addQuads(p);
    }

    /**
     * Interprets a predicate qname into its full URI
     * 
     * Note: must be called after `load()`
     * 
     * @param s qname string
     * @returns Predicate URI string
     */
    public toUri(s: string): string {
        return defaultToUri(s, this.prefixes);
    }

    /**
     * Generates a qname from a URI
     * 
     * Note: must be called after `load()`
     * 
     * @param uri the URI string
     * @returns Generated qname
     */
    public fromUri(uri: string): string {
        return defaultFromUri(uri, this.prefixes);
    }

    // private traverseRdfList() { }

    // public getRdfList() { }

    /**
     * Gets an array of N3 `Quad_Objects` from a `Store` by providing a predicate or an array of predicates
     * 
     
     * @param predicate a string or string array of predicate URIs
     * @param object the object URI
     * @returns the array of objects
     */
    public getSubjects(predicate: string, object: string): Quad_Subject[] {
        return this.store.getSubjects(predicate, object, null);
    }

    /**
     * Gets an array of N3 `Quad_Objects` from a `Store` by providing a predicate or an array of predicates
     * 
     * @param subject the subject URI
     * @param predicate a string or string array of predicate URIs
     * @returns the array of objects
     */
    public getObjects(subject: string, predicate: string | string[]): Quad_Object[] {
        if (typeof predicate === "string") {
            return this.store.getObjects(subject, predicate, null);
        } else {
            const objs: Quad_Object[] = [];
            predicate.forEach(p => {
                objs.push(...this.store.getObjects(namedNode(subject), namedNode(p), null));
            });
            return objs;
        }
    }

    // abstraction of N3 Store's get functions
    // public getObject(subject: string, predicate: string | string[]) {

    // }

    // temporary implementation for now
    private getAnnotation(uri: string, annotation: "label" | "description" | "provenance") {
        return this.getObjects(uri, ANNOTATION_PREDICATES[annotation]).map(o => o.value)[0] || undefined;
    }

    /**
     * Gets the preferred label of an object
     * 
     * @param uri 
     * @returns the label
     */
    public getLabel(uri: string) {
        return this.getAnnotation(uri, "label");
    }

    /**
     * Gets the preferred description of an object
     * 
     * @param uri 
     * @returns the description
     */
    public getDescription(uri: string) {
        return this.getAnnotation(uri, "description");
    }

    /**
     * Gets the preferred provenance of an object
     * 
     * @param uri 
     * @returns the provenance
     */
    public getProvenance(uri: string) {
        return this.getAnnotation(uri, "provenance");
    }

    // // public getObjectTable(baseClass: string): ObjectTableProps { }

    /**
     * Returns a list of item objects
     * 
     * @param baseClass the object type to return
     * @returns a list of item objects
     */
    public getItemList(baseClass: string): ListItemProps[] {
        const items: ListItemProps[] = [];
        // TODO: need to check for top-level base class to determine whether to use getSubjects() or getObjects()

        // top-level objects
        const objs = this.getSubjects(this.toUri("a"), this.toUri(baseClass));
        objs.forEach(obj => {
            const item: ListItemProps = {
                uri: obj.value
            };

            item.label = this.getLabel(obj.value);
            item.description = this.getDescription(obj.value);

            this.store.forEach(q => {
                if (q.predicate.value === this.toUri("prez:link")) {
                    item.link = q.object.value;
                }
            }, obj, null, null, null)
            items.push(item);
        });
        return items;
    }

    // public getSearchResults() { }
};