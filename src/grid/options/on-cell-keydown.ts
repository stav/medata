import type { CellKeyDownEvent } from "@ag-grid-community/core";

import dimbox from "dimbox";

dimbox.setConfig({
  onAfterOpen: function () {
    opened++;
    if (opened !== 1) {
      console.error(
        `Opened Error: opened count is "${opened}" but it should be 1`
      );
    }
  },
  onBeforeClose: function () {
    opened--;
    if (opened !== 0) {
      console.error(
        `Closing Error: opened count is "${opened}" but it should be 1`
      );
    }
  },
});

let opened = 0;

export default function (event: CellKeyDownEvent) {
  const keyDown = <KeyboardEvent>event.event;
  const key = keyDown.key;
  const active =
    key === "a" && keyDown.ctrlKey === false && keyDown.altKey === false;
  if (active) {
    if (opened > 0) {
      dimbox.close();
      return;
    }
    const a = document.getElementById("modal-anchor");
    const box = document.getElementById("modal-box");
    if (box) {
      box.innerHTML = JSON.stringify(event.data);
      dimbox.open(a);
    }
  }
}
