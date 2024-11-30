import { type ValueFormatterParams } from "@ag-grid-community/core";

const numberFormat = new Intl.NumberFormat("en-US", {});

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function currencyFormatter(value: any) {
  return currencyFormat.format(value);
}

function numberValueFormatter(params: ValueFormatterParams) {
  const value = Math.floor(params.value);
  if (isNaN(value)) {
    return "";
  }
  return numberFormat.format(value);
}

export { currencyFormatter, numberValueFormatter };
