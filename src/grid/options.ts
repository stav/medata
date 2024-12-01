import {
  type ColDef,
  type FilterChangedEvent,
  type GridOptions,
  type ISetFilterParams,
  type RowClickedEvent,
} from "@ag-grid-community/core";

import { currencyFormatter, numberValueFormatter } from "./utils";

import plans from "../../data/plans.json";

const gridOptions: GridOptions = {
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
    {
      field: "Premium", type: ["numerical", "rightAligned"],
      cellClassRules: {
        "rag-warn": "x <= -100",
        "rag-fine": "x > -100 && x <= -10",
        "rag-over": "x > 0",
      },
    },
    {
      field: "Giveback", type: ["numerical", "rightAligned"],
      cellClassRules: {
        "rag-good": "x > 1000",
        "rag-fine": "x > 100 && x <= 1000",
        "rag-over": "x < 0",
      },
    },
    {
      field: "Spc copay", type: ["numerical", "rightAligned"],
      cellClassRules: {
        "rag-good": "x === 0",
        "rag-warn": "x < -35",
      },
    },
    { field: "Ambulance", type: ["numerical", "rightAligned"] },
    { field: "ER", type: ["numerical", "rightAligned"] },
    { field: "Urgent", type: ["numerical", "rightAligned"] },
    {
      field: "MOOP", type: ["numerical", "rightAligned"],
      cellClassRules: {
        "rag-warn": "x <= -8000",
        "rag-fine": "x > -8000 && x <= -4000",
        "rag-good": "x > -4000 && x < 0",
        "rag-zero": "x === 0",
        "rag-over": "x > 0",
      },
    },
    {
      field: "OTC", type: ["numerical", "rightAligned"],
      cellClassRules: {
        "rag-good": "x > 1000",
        "rag-fine": "x >= 400 && x <= 1000",
        "rag-over": "x < 0",
      },
    },
    {
      field: "Card", type: ["numerical", "rightAligned"],
      cellClassRules: {
        "rag-good": "x > 1000",
        "rag-fine": "x >= 400 && x <= 1000",
        "rag-over": "x < 0",
      },
    },
    {
      field: "Dental", type: ["numerical", "rightAligned"],
      cellClassRules: {
        "rag-good": "x >= 4000",
        "rag-fine": "x >= 2000 && x < 4000",
        "rag-over": "x < 0",
      },
    },
    { field: "Vision", type: ["numerical", "rightAligned"] },
    { field: "Hospital /day", type: ["numerical", "rightAligned"] },
    { field: "Hospital days", type: ["total", "rightAligned"] },
  ],
  columnTypes: {
    numerical: {
      valueFormatter: numberValueFormatter,
    },
    total: {
      valueFormatter: numberValueFormatter,
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
        let header = undefined as unknown as string
        // Display difference in header if 2 rows selected
        if (rows.length === 2) {
          // Only look at the money
          if (def.type?.includes("numerical") && def.field) {
            const oldplan = rows[0][def.field];
            const newplan = rows[1][def.field];
            const diff = newplan - oldplan;
            total += diff;
            header = currencyFormatter(diff);
          }
          // Otherwise check for the total column
          else if (def.type?.includes("total")) {
            header = currencyFormatter(total);
          }
        }
        def.headerName = header
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

export { gridOptions };
