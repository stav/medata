import { createGrid } from "@ag-grid-community/core";
import { gridOptions } from "./options";

class SimpleGrid {
  constructor() {
    const eGridDiv = <HTMLElement>document.querySelector("#app");
    createGrid(eGridDiv, gridOptions);
  }
}

export { SimpleGrid };
