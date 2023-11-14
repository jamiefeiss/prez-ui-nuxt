// import { RDFStore } from "./store";

// const API_BASE_URL = "http://localhost:8000";

// // profile header parsing
// function getProfileHeaders() {}

// // request functions
// async function getRequest(url: string, headers?: any) { }

// async function getRequestMultiple() { }

// async function apiGet(path: string) {
//     getRequest(`${API_BASE_URL}${path}`, {"Accept": "text/turtle"}); // text/turtle
//     getProfileHeaders();
// }

// async function apiGetMultiple() {
    
// }

// async function sparqlGet() {
//     // check if select or graph query
//     getRequest(); // application/sparql-results+json or text/turtle
// }

// async function sparqlGetMultiple() {

// }

// // service endpoints
// export async function getApiInfo() {
//     const { data } = await apiGet("/");
//     const store = new RDFStore();
//     store.load(data);
//     // get annotation predicates
//     // get preferred languages
//     // get API version
// }

// export async function getCatalogs() {
//     const { data } = await apiGet("/c/catalog");
//     const store = new RDFStore();
//     store.load(data);
//     return store.getItemList(store.toUri("dcat:Catalog"));
// }

// export async function getCatalog(curie: string) {
//     const { data } = await apiGet(`/c/catalog/${curie}`);
//     const store = new RDFStore();
//     store.load(data);
//     return store.getObjectTable(store.toUri("dcat:Catalog"));
// }

// export async function getResources() {

// }

// export async function getResource() { }

// export async function getDatasets() {

// }

// export async function getDataset() { }

// export async function getFeatureCollections() {

// }

// export async function getFeatureCollection() { }

// export async function getFeatures() {

// }

// export async function getFeature() { }

// export async function getVocabs() {

// }

// export async function getVocab() { }

// export async function getTopConcepts() {

// }

// export async function getNarrowers() { }

// export async function getConcept() { }

// export async function getCollections() {

// }

// export async function getCollection() { }

// export async function getProfiles() {

// }

// export async function getProfile() { }

// export async function getSearchResults() {

// }
