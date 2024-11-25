import {
  createGrid,
  type GridApi,
  type GridOptions,
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
  private readonly gridOptions: GridOptions = <GridOptions>{};
  matrix: GridApi<any>;
  e2024Cbx: HTMLInputElement;
  e2025Cbx: HTMLInputElement;

  constructor() {
    this.gridOptions = {
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
      //   function doesExternalFilterPass(node: IRowNode<IOlympicData>): boolean {
      doesExternalFilterPass: (node) => {
        console.log(this.e2024Cbx.checked, this.e2025Cbx.checked, "Year", node.data["Year"]);
        if (!this.e2024Cbx.checked && node.data['Year'] == 2024) return false;
        if (!this.e2025Cbx.checked && node.data['Year'] == 2025) return false;
        return true;
      },
    };

    this.e2024Cbx = <HTMLInputElement>document.querySelector("#yr2024");
    this.e2025Cbx = <HTMLInputElement>document.querySelector("#yr2025");
    const eGridDiv: HTMLElement = <HTMLElement>document.querySelector("#app");
    this.matrix = <GridApi>createGrid(eGridDiv, this.gridOptions);
  }

  public externalFilterChanged() {
    console.log("this", this);
    this.matrix.onFilterChanged();
  }
}

const grid = new SimpleGrid();
// grid.externalFilterChanged.bind(grid);

if (typeof window !== "undefined") {
  // Attach external event handlers to window so they can be called from index.html
  (<any>window).externalFilterChanged = grid.externalFilterChanged.bind(grid);
}
