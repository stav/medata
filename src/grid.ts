import {
  createGrid,
  type GridOptions,
  type ISetFilterParams,
  type ValueFormatterParams,
} from "@ag-grid-community/core";

import plans from "../data/plans.json";

class SimpleGrid {
  private readonly gridOptions: GridOptions = <GridOptions>{};

  constructor() {
    this.gridOptions = {
      rowData: plans,
      columnDefs: [
        {
          field: "Year", // overrides valueFormatter unless comparator
          // headerName: "Yearly",
          // valueFormatter: (p: ValueGetterParams) => `${p.value}`,
          // valueGetter: (p: ValueGetterParams) => `${p.getValue("Year")}`,
          filter: "agSetColumnFilter",
          cellDataType: "text",
          // cellRendererParams: { disabled: true },
          filterParams: {
            // valueFormatter,
          } as ISetFilterParams,
        },
        { field: "Carrier", filter: true },
        { field: "Name", filter: true },
        { field: "Type", filter: true },
        { field: "ID", filter: true },
        { field: "Premium", type: ["currency", "rightAligned"] },
        { field: "Giveback", type: ["currency", "rightAligned"] },
        { field: "Spc copay", type: ["currency", "rightAligned"] },
        { field: "Ambulance", type: ["currency", "rightAligned"] },
        { field: "MOOP", type: ["currency", "rightAligned"] },
        { field: "OTC", type: ["currency", "rightAligned"] },
        { field: "Card", type: ["currency", "rightAligned"] },
        { field: "Dental", type: ["currency", "rightAligned"] },
        { field: "Vision", type: ["currency", "rightAligned"] },
        { field: "Hospital /day", type: ["currency", "rightAligned"] },
        { field: "Hospital days", type: ["rightAligned"] },
      ],
      columnTypes: {
        currency: {
          width: 150,
          valueFormatter: this.currencyFormatter,
        },
      },
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
  currencyFormatter(params: ValueFormatterParams) {
    const value = Math.floor(params.value);
    if (isNaN(value)) {
      return "";
    }
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}

export { SimpleGrid };
