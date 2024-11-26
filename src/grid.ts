import {
  createGrid,
  type GridApi,
  type GridOptions,
  type IRowNode,
} from "@ag-grid-community/core";

import plans from "../data/plans.json";

class SimpleGrid {
  e2024Cbx = <HTMLInputElement>document.querySelector("#yr2024");
  e2025Cbx = <HTMLInputElement>document.querySelector("#yr2025");
  eCarrSel = <HTMLInputElement>document.querySelector("#carrier");
  inputs = [this.e2024Cbx, this.e2025Cbx, this.eCarrSel];
  matrix: GridApi<any>;

  constructor() {
    const gridOptions: GridOptions = {
      rowData: plans,
      columnDefs: [
        { field: "Year" },
        { field: "Carrier" },
        { field: "Name" },
        { field: "Type" },
        { field: "ID" },
        { field: "Premium" },
        { field: "Giveback" },
      ],
      rowSelection: {
        mode: "multiRow",
        enableClickSelection: true,
      },
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
        if (
          this.e2024Cbx.checked &&
          this.e2025Cbx.checked &&
          this.eCarrSel.value === "ALL"
        ) {
          return false;
        }
        return true;
      },
      doesExternalFilterPass: (node: IRowNode) => {
        if (!this.e2024Cbx.checked && node.data["Year"] == 2024) return false;
        if (!this.e2025Cbx.checked && node.data["Year"] == 2025) return false;
        if (
          this.eCarrSel.value !== "ALL" &&
          this.eCarrSel.value != node.data["Carrier"].toLowerCase()
        ) {
          return false;
        }
        return true;
      },
    };

    const eGridDiv = <HTMLElement>document.querySelector("#app");

    this.matrix = <GridApi>createGrid(eGridDiv, gridOptions);

    this.inputs.forEach((element) => {
      element.addEventListener("input", () => this.matrix.onFilterChanged());
    });
  }
}

export { SimpleGrid };
