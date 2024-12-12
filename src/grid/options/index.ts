import type { GridOptions } from "@ag-grid-community/core";

import statusBar from "./status-bar";
import columnDefs from "./column-defs";
import columnTypes from "./column-types";
import onRowClicked from "./on-row-clicked";
import onFilterChanged from "./on-filter-changed";

import rowData from "../../../data/plans.json";

export default <GridOptions>{
  rowData,
  columnDefs,
  columnTypes,
  defaultColDef: { flex: 1 },
  cellSelection: true,
  rowSelection: { mode: "multiRow", enableClickSelection: true },
  statusBar,
  tooltipShowDelay: 500,
  tooltipHideDelay: 2000,
  onRowClicked,
  onFilterChanged,
  onCellKeyDown: (event: CellKeyDownEvent) => {
    const keyDown = <KeyboardEvent>event.event;
    const key = keyDown.key;
    const active = key === 'a' && keyDown.ctrlKey === false && keyDown.altKey === false;
    if (active) {
      console.log('Key Down:', key, active, event.data);
    }
  },
};
