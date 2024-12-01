import type { ISetFilterParams, ColDef } from "@ag-grid-community/core";

export default <ColDef[]>[
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
]
