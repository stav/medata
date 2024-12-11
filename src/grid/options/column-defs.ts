import type {
  ISetFilterParams,
  ColDef,
  CellClassParams,
  ValueGetterParams,
} from "@ag-grid-community/core";

import {
  evaluateFine,
  evaluateGood,
  evaluateOver,
  evaluateWarn,
} from "./column-rules";

const cellClassRules = {
  "rag-good": evaluateGood,
  "rag-fine": evaluateFine,
  "rag-warn": evaluateWarn,
  "rag-over": evaluateOver,
};

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
    cellClassRules,
  },
  {
    field: "Giveback",
    headerTooltip: "Giveback",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "Spc copay",
    headerTooltip: "Spc copay",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "Ambulance",
    headerTooltip: "Ambulance",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "ER",
    headerTooltip: "ER",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "Urgent",
    headerTooltip: "Urgent",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "MOOP",
    headerTooltip: "MOOP",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "OTC",
    headerTooltip: "OTC",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "Card",
    headerTooltip: "Card",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "Dental",
    headerTooltip: "Dental",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "Vision",
    headerTooltip: "Vision",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "Hospital /day",
    headerTooltip: "Hospital /day",
    type: ["numerical", "rightAligned"],
    cellClassRules,
  },
  {
    field: "Hospital days",
    headerTooltip: "Days / Total",
    type: ["total", "rightAligned"],
    cellClassRules,
  },
  {
    headerName: "Score",
    // headerTooltip: "Score",
    type: ["score", "rightAligned"],
    valueGetter: (params) => evaluateScores(params),
    cellClassRules: {
      "rag-warn": "x < 2",
      "rag-fine": "x >= 2 && x <= 6",
      "rag-good": "x > 6",
    },
  },
];

function evaluateScores(params: ValueGetterParams) {
  let score = 0;
  for (const [key, value] of Object.entries(params.data)) {
    const params = { colDef: { field: key }, value } as CellClassParams;
    if (evaluateWarn(params)) score -= 2;
    if (evaluateFine(params)) score += 1;
    if (evaluateGood(params)) score += 2;
  }
  return score;
}
