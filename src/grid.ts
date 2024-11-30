import {
  createGrid,
  type ColDef,
  type FilterChangedEvent,
  type GridOptions,
  type ISetFilterParams,
  type RowClickedEvent,
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
        { field: "Hospital days", type: ["total", "rightAligned"] },
      ],
      columnTypes: {
        currency: {
          valueFormatter: this.numberFormatter,
        },
        total: {
          valueFormatter: this.numberFormatter,
        },
      },
      defaultColDef: {
        flex: 1,
      },
      cellSelection: true,
      rowSelection: {
        mode: "multiRow",
        enableClickSelection: true,
      },
      onRowClicked(event: RowClickedEvent) {
        const rows = event.api.getSelectedRows(); // Selected rows
        // Compare two rows together
        if (rows.length < 3) {
          let total = 0; // Sum of the money from each column
          const defs: ColDef[] = event.api.getColumnDefs() ?? [];
          // Spin thru the columns
          defs.forEach((def) => {
            // Display difference in header if 2 rows selected
            if (rows.length === 2) {
              // Only look at the money
              if (def.type?.includes("currency") && def.field) {
                const oldplan = rows[0][def.field];
                const newplan = rows[1][def.field];
                const diff = newplan - oldplan;
                def.headerName = diff.toString();
                total += diff;
              } else if (def.type?.includes("total")) {
                def.headerName = total.toString();
              }
            }
            // Otherwise clear the headers if only 1 row
            else {
              def.headerName = undefined;
            }
          });
          event.api.setGridOption("columnDefs", defs);
        }
      },
      onFilterChanged: (event: FilterChangedEvent) => {
        const col = event.columns[0];
        const model = event.api.getColumnFilterModel(col) as {
          filter: string;
        } | null;
        const defs: ColDef[] = event.api.getColumnDefs() ?? [];
        defs.forEach((def) => {
          if (def.colId === col.getColId()) {
            def.headerName = model?.filter;
          }
        });
        event.api.setGridOption("columnDefs", defs);
        // event.api.refreshHeader();
      },
      statusBar: {
        statusPanels: [
          {
            statusPanel: "agTotalAndFilteredRowCountComponent",
            align: "left",
          },
          { statusPanel: "agTotalRowCountComponent" },
          { statusPanel: "agFilteredRowCountComponent" },
          { statusPanel: "agSelectedRowCountComponent" },
          {
            statusPanel: "agAggregationComponent",
            statusPanelParams: {
              // possible values are: 'count', 'sum', 'min', 'max', 'avg'
              aggFuncs: ["count", "sum", "min", "max", "avg"],
            },
          },
        ],
      },
    };

    const eGridDiv: HTMLElement = <HTMLElement>document.querySelector("#app");
    createGrid(eGridDiv, this.gridOptions);
  }
  numberFormatter(params: ValueFormatterParams) {
    const value = Math.floor(params.value);
    if (isNaN(value)) {
      return "";
    }
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}

export { SimpleGrid };
