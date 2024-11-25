import {
  createGrid,
  type GridApi,
  type GridOptions,
  type IRowNode,
  ModuleRegistry,
} from "@ag-grid-community/core";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
ModuleRegistry.registerModules([ClientSideRowModelModule, StatusBarModule]);

import { LicenseManager } from "@ag-grid-enterprise/core";
LicenseManager.setLicenseKey("<your license key>");

import "./style.css";

import plans from "../data/plans.json";

class SimpleGrid {
  e2024Cbx = <HTMLInputElement>document.querySelector("#yr2024");
  e2025Cbx = <HTMLInputElement>document.querySelector("#yr2025");
  matrix: GridApi<any>;

  constructor() {
    const gridOptions: GridOptions = {
      columnDefs: [{ field: "Year" }, { field: "Carrier" }, { field: "Name" }],
      rowData: plans,
      defaultColDef: {
        flex: 1,
      },
      statusBar: {
        statusPanels: [
          {
            statusPanel: "agTotalAndFilteredRowCountComponent",
            align: "left",
          },
        ],
      },
      isExternalFilterPresent: () => {
        if (this.e2024Cbx.checked && this.e2025Cbx.checked) return false;
        return true;
      },
      doesExternalFilterPass: (node: IRowNode) => {
        if (!this.e2024Cbx.checked && node.data['Year'] == 2024) return false;
        if (!this.e2025Cbx.checked && node.data['Year'] == 2025) return false;
        return true;
      },
    };

    const eGridDiv = <HTMLElement>document.querySelector("#app");

    this.matrix = <GridApi>createGrid(eGridDiv, gridOptions);
  }
}

const grid = new SimpleGrid();

if (typeof window !== "undefined") {
  // Attach external event handlers to window so they can be called from index.html
  (<any>window).externalFilterChanged = () => grid.matrix.onFilterChanged();
}
