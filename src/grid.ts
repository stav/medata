import {
  createGrid,
  type GridOptions,
  type ISetFilterParams,
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
        { field: "Type" },
        { field: "ID" },
        { field: "Premium" },
        { field: "Giveback" },
        { field: "Spc copay" },
        { field: "MOOP" },
        { field: "OTC" },
        { field: "Card", cellDataType: "number" },
        { field: "Dental" },
        { field: "Vision" },
        { field: "Hospital /day" },
      ],
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
