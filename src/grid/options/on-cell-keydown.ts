import type { CellKeyDownEvent } from "@ag-grid-community/core";

import dimbox from 'dimbox';

export default function (event: CellKeyDownEvent) {
  const keyDown = <KeyboardEvent>event.event;
  const key = keyDown.key;
  const active = key === 'a' && keyDown.ctrlKey === false && keyDown.altKey === false;
  if (active) {
    const a = document.getElementById('modal-anchor');
    const box = document.getElementById('modal-box');
    if (box) {
      box.innerHTML = JSON.stringify(event.data);
      dimbox.open(a);
    }
  }
}
