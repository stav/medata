import { createGrid, type GridOptions } from "@ag-grid-community/core";

import plans from "../data/plans.json";

class SimpleGrid {
  private readonly gridOptions: GridOptions = <GridOptions>{};

  constructor() {
    this.gridOptions = {
      columnDefs: [{ field: "Year" }, { field: "Carrier" }, { field: "Name" }],
      rowData: plans,
      defaultColDef: {
        flex: 1,
      },
      rowSelection: {
        mode: "multiRow",
        enableClickSelection: true,
      },
      statusBar: {
        statusPanels: [
          {
            statusPanel: "agTotalAndFilteredRowCountComponent",
            align: "left",
          },
        ],
      },
    };

    const eGridDiv: HTMLElement = <HTMLElement>document.querySelector("#app");
    createGrid(eGridDiv, this.gridOptions);
  }
}

export { SimpleGrid };
