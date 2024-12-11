import type {
  ISetFilterParams,
  ColDef,
  CellClassParams,
  ValueGetterParams,
} from "@ag-grid-community/core";

function evaluateOver(params: CellClassParams) {
  const field = params.colDef.field;
  const value = params.value;
  console.log("evaluateOver", field, value);
  switch (field) {
    case "Premium": return value > 0;
    case "Giveback": return value < 0;
    case "Ambulance": return value > 0;
    default:
      break;
  }
}

function evaluateWarn(params: CellClassParams) {
  const field = params.colDef.field;
  const value = params.value;
  console.log("evaluateWarn", params, field, value);
  switch (field) {
    case "Premium": return value <= -100;
    case "Spc copay": return value < -35;
    case "Ambulance": return value <= -300;
    default:
      break;
  }
}

function evaluateFine(params: CellClassParams) {
  const field = params.colDef.field;
  const value = params.value;
  console.log("evaluateFine", field, value);
  switch (field) {
    case "Premium": return value <= -10 && value > -100;
    case "Giveback": return value > 100 && value <= 1000;
    case "Ambulance": return value > -300 && value < -200;
    default:
      break;
  }
}

function evaluateGood(params: CellClassParams) {
  const field = params.colDef.field;
  const value = params.value;
  console.log("evaluateGood", field, value);
  switch (field) {
    case "Giveback": return value > 1000;
    case "Spc copay": return value === 0;
    case "Ambulance": return value >= -200 && value < 0;
    default:
      break;
  }
}

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
      "rag-warn": evaluateWarn,
      "rag-fine": evaluateFine,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "Giveback",
    headerTooltip: "Giveback",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "Spc copay",
    headerTooltip: "Spc copay",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-warn": evaluateWarn,
    },
  },
  {
    field: "Ambulance",
    headerTooltip: "Ambulance",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-warn": evaluateWarn,
      "rag-fine": evaluateFine,
      "rag-good": evaluateGood,
      "rag-over": evaluateOver,
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
  {
    headerName: "Score",
    // headerTooltip: "Score",
    type: ["score", "rightAligned"],
    valueGetter: (params) => evaluateScores(params),
    cellClassRules: {
      "rag-good": "x > 0",
      "rag-fine": "x === 0",
      "rag-warn": "x < 0",
    },
  },
];

function evaluateScores(params: ValueGetterParams) {
  console.log("evaluateScores", params);
  let score = 0;
  for (const [key, value] of Object.entries(params.data)) {
    console.log('scores element', key, value)
    const params = { colDef: {field: key}, value } as CellClassParams
    if (evaluateWarn(params)) score -= 2;
    if (evaluateFine(params)) score += 1;
    if (evaluateGood(params)) score += 2;
  }
  return score;
}
