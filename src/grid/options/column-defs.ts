import type {
  ISetFilterParams,
  ColDef,
  CellClassParams,
  ValueGetterParams,
} from "@ag-grid-community/core";

function evaluateOver(params: CellClassParams) {
  const field = params.colDef.field;
  const value = params.value;
  switch (field) {
    case "Premium"       : return value > 0;
    case "Spc copay"     : return value > 0;
    case "Giveback"      : return value < 0;
    case "Ambulance"     : return value > 0;
    case "ER"            : return value > 0;
    case "Urgent"        : return value > 0;
    case "MOOP"          : return value > 0;
    case "OTC"           : return value < 0;
    case "Card"          : return value < 0;
    case "Dental"        : return value < 0;
    case "Vision"        : return value < 0;
    case "Hospital /day" : return value > 0;
    case "Hospital days" : return value > 7;
    default:
      break;
  }
}

function evaluateWarn(params: CellClassParams) {
  const field = params.colDef.field;
  const value = params.value;
  switch (field) {
    case "Premium"       : return value <= -100;
    case "Spc copay"     : return value < -35;
    case "Giveback"      : return false;
    case "Ambulance"     : return value <= -300;
    case "ER"            : return value < -125;
    case "Urgent"        : return value <= -50;
    case "MOOP"          : return value <= -8000;
    case "OTC"           : return false;
    case "Card"          : return false;
    case "Dental"        : return false;
    case "Vision"        : return false;
    case "Hospital /day" : return value < -350;
    case "Hospital days" : return value > 6;
    default:
      break;
  }
}

function evaluateFine(params: CellClassParams) {
  const field = params.colDef.field;
  const value = params.value;
  switch (field) {
    case "Premium"       : return value <= -10 && value > -100;
    case "Spc copay"     : return false;
    case "Giveback"      : return value > 100 && value <= 1000;
    case "Ambulance"     : return value > -300 && value < -200;
    case "ER"            : return value >= -125 && value < -100;
    case "Urgent"        : return value > -50 && value <= -30;
    case "MOOP"          : return value > -8000 && value <= -4000;
    case "OTC"           : return value >= 400 && value <= 1000;
    case "Card"          : return value >= 400 && value <= 1000;
    case "Dental"        : return value >= 2000 && value < 4000;
    case "Vision"        : return value >= 250 && value < 400;
    case "Hospital /day" : return value >= -350 && value < -325;
    case "Hospital days" : return value === 6;
    default:
      break;
  }
}

function evaluateGood(params: CellClassParams) {
  const field = params.colDef.field;
  const value = params.value;
  switch (field) {
    case "Premium"       : return false;
    case "Spc copay"     : return value === 0;
    case "Giveback"      : return value > 1000;
    case "Ambulance"     : return value >= -200 && value < 0;
    case "ER"            : return value >= -100 && value < 0;
    case "Urgent"        : return value >= -30 && value < 0;
    case "MOOP"          : return value > -4000 && value < 0;
    case "OTC"           : return value > 1000;
    case "Card"          : return value > 1000;
    case "Dental"        : return value >= 4000;
    case "Vision"        : return value >= 400;
    case "Hospital /day" : return value >= -325 && value < 0;
    case "Hospital days" : return value < 6 && value > 0;
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
      "rag-fine": evaluateFine,
      "rag-warn": evaluateWarn,
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
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-warn": evaluateWarn,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "ER",
    headerTooltip: "ER",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-warn": evaluateWarn,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "Urgent",
    headerTooltip: "Urgent",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-warn": evaluateWarn,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "MOOP",
    headerTooltip: "MOOP",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-warn": evaluateWarn,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "OTC",
    headerTooltip: "OTC",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "Card",
    headerTooltip: "Card",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "Dental",
    headerTooltip: "Dental",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "Vision",
    headerTooltip: "Vision",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "Hospital /day",
    headerTooltip: "Hospital /day",
    type: ["numerical", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-warn": evaluateWarn,
      "rag-over": evaluateOver,
    },
  },
  {
    field: "Hospital days",
    headerTooltip: "Days / Total",
    type: ["total", "rightAligned"],
    cellClassRules: {
      "rag-good": evaluateGood,
      "rag-fine": evaluateFine,
      "rag-warn": evaluateWarn,
      "rag-over": evaluateOver,
    },
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
    const params = { colDef: {field: key}, value } as CellClassParams
    if (evaluateWarn(params)) score -= 2;
    if (evaluateFine(params)) score += 1;
    if (evaluateGood(params)) score += 2;
  }
  return score;
}
