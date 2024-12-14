// Register Modules

import { ModuleRegistry } from "@ag-grid-community/core";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  StatusBarModule,
  ClipboardModule,
  RangeSelectionModule,
]);

// Export the Grid Class

import { createGrid } from "@ag-grid-community/core";
import gridOptions from "./options";
import "./style.scss";

export default class SimpleGrid {
  constructor() {
    const eGridDiv = <HTMLElement>document.querySelector("#app");
    createGrid(eGridDiv, gridOptions);
  }
}
