// import type { ListItemProps, ObjectTableProps, Prefixes } from "../types";
// import { DEFAULT_PREFIXES } from "./consts";

// export class RDFStore {
//     public store: Store; // N3
//     private parser: Parser; // N3
//     public prefixes: Prefixes;

//     constructor() {
//         this.store = new Store();
//         this.parser = new Parser();
//         this.prefixes = DEFAULT_PREFIXES;
//     }

//     public load(s: string) {
//         // parse turtle string
//         // add to prefixes
//     }

//     public toUri(qname: string): string { }

//     public fromUri(uri: string): string { }

//     private traverseRdfList() { }

//     public getRdfList() { }

//     // abstraction of N3 Store's get functions
//     public getObject() { }

//     public getObjects() { } // can provide multiple predicates

//     private getAnnotation(uri: string, annotation: "label" | "description" | "provenance") {

//     }

//     public getLabel(uri: string) {
//         return this.getAnnotation(uri, "label");
//     }

//     public getDescription(uri: string) {
//         return this.getAnnotation(uri, "description");
//     }

//     public getProvenance(uri: string) {
//         return this.getAnnotation(uri, "provenance");
//     }

//     public getObjectTable(baseClass: string): ObjectTableProps { }

//     public getItemList(baseClass: string): ListItemProps[] { }

//     public getSearchResults() { }
// };