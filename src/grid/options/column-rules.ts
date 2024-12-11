import type { CellClassParams, } from "@ag-grid-community/core";

export function evaluateOver(params: CellClassParams) {
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

export function evaluateWarn(params: CellClassParams) {
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

export function evaluateFine(params: CellClassParams) {
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

export function evaluateGood(params: CellClassParams) {
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
