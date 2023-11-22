// import { setupCounter } from "./store";
import { getCatalogs } from "./service";

function setupGetCatalogs() {
    document.querySelector<HTMLButtonElement>("#catalogsButton")!.addEventListener("click", async () => {
        const data = await getCatalogs();
        document.querySelector<HTMLPreElement>("#catalogsData")!.innerText = JSON.stringify(data, null, 2);
    });
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Prez Utils</h1>
    <button id="catalogsButton">Get catalogs</button>
    <pre id="catalogsData"></pre>
  </div>
`;

setupGetCatalogs();
