import type { CellKeyDownEvent, GridOptions } from "@ag-grid-community/core";

import statusBar from "./status-bar";
import columnDefs from "./column-defs";
import columnTypes from "./column-types";
import onRowClicked from "./on-row-clicked";
import onFilterChanged from "./on-filter-changed";

import rowData from "../../../data/plans.json";

import type {
  INoRowsOverlayComp,
  INoRowsOverlayParams,
} from "@ag-grid-community/core";

type CustomNoRowsOverlayParams = INoRowsOverlayParams & {
  noRowsMessageFunc: () => string;
};

class CustomNoRowsOverlay implements INoRowsOverlayComp {
  eGui!: HTMLElement;

  init(params: CustomNoRowsOverlayParams) {
    this.eGui = document.createElement("div");
    this.refresh(params);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: CustomNoRowsOverlayParams): void {
    // console.log('refresh', params)
    this.eGui.innerHTML = `
            <div role="presentation" class="ag-overlay-loading-center" style="background-color: #b4bebe;">
                <i class="far fa-frown" aria-live="polite" aria-atomic="true"> ${params.noRowsMessageFunc()} </i>
            </div>
        `;
  }
}

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
    const active =
      key === "a" && keyDown.ctrlKey === false && keyDown.altKey === false;
    if (active) {
      console.log("Key Down:", key, active, event.data);
      const api = event.api;
      const html = `
        <div role="presentation" class="ag-overlay-loading-center" style="background-color: #b4bebe;">
            <i class="far fa-frown" aria-live="polite" aria-atomic="true"> ${event.data} </i>
        </div>
      `;
      // const element = document.createElement('div')
      // element.innerHTML = html
      // api.showNoRowsOverlay();
      const modal = document.getElementById("modal");
      const openModalButton = document.getElementById("openModal");
      const closeModalButton = document.getElementById("closeModal");
      modal.style.display = 'flex';
    }
  },
  noRowsOverlayComponent: CustomNoRowsOverlay,
  noRowsOverlayComponentParams: {
    noRowsMessageFunc: () =>
      "No rows found at: " + new Date().toLocaleTimeString(),
  },
};
