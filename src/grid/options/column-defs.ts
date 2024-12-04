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
    field: "Premium",
    headerTooltip: "Premium",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-warn": "x <= -100",
      "rag-fine": "x > -100 && x <= -10",
      "rag-over": "x > 0",
    },
  },
  {
    field: "Giveback",
    headerTooltip: "Giveback",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": "x > 1000",
      "rag-fine": "x > 100 && x <= 1000",
      "rag-over": "x < 0",
    },
  },
  {
    field: "Spc copay",
    headerTooltip: "Spc copay",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": "x === 0",
      "rag-warn": "x < -35",
    },
  },
  {
    field: "Ambulance",
    headerTooltip: "Ambulance",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-warn": "x <= -300",
      "rag-fine": "x > -300 && x < -200",
      "rag-good": "x >= -200 && x < 0",
      "rag-over": "x > 0",
    },
  },
  {
    field: "ER",
    headerTooltip: "ER",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-warn": "x < -125",
      "rag-fine": "x >= -125 && x < -100",
      "rag-good": "x >= -100 && x < 0",
      "rag-over": "x > 0",
    },
  },
  {
    field: "Urgent",
    headerTooltip: "Urgent",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-warn": "x <= -50",
      "rag-fine": "x > -50 && x <= -30",
      "rag-good": "x >= -30 && x < 0",
      "rag-over": "x > 0",
    },
  },
  {
    field: "MOOP",
    headerTooltip: "MOOP",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-warn": "x <= -8000",
      "rag-fine": "x > -8000 && x <= -4000",
      "rag-good": "x > -4000 && x < 0",
      "rag-zero": "x === 0",
      "rag-over": "x > 0",
    },
  },
  {
    field: "OTC",
    headerTooltip: "OTC",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": "x > 1000",
      "rag-fine": "x >= 400 && x <= 1000",
      "rag-over": "x < 0",
    },
  },
  {
    field: "Card",
    headerTooltip: "Card",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": "x > 1000",
      "rag-fine": "x >= 400 && x <= 1000",
      "rag-over": "x < 0",
    },
  },
  {
    field: "Dental",
    headerTooltip: "Dental",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": "x >= 4000",
      "rag-fine": "x >= 2000 && x < 4000",
      "rag-over": "x < 0",
    },
  },
  {
    field: "Vision",
    headerTooltip: "Vision",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": "x >= 400",
      "rag-fine": "x >= 250 && x < 400",
    },
  },
  {
    field: "Hospital /day",
    headerTooltip: "Hospital /day",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-warn": "x < -350",
      "rag-fine": "x >= -350 && x < -325",
      "rag-good": "x >= -325 && x < 0",
      "rag-over": "x > 0",
    },
  },
  {
    field: "Hospital days",
    headerTooltip: "Days / Total",
    type: ["total", "rightAligned"],
    cellClassRules: {
      "rag-good": "x < 6 && x > 0",
      "rag-fine": "x === 6",
      "rag-warn": "x > 6",
    },
  },
];
