import type { CellKeyDownEvent } from "@ag-grid-community/core";

import dimbox from 'dimbox';

export default function (event: CellKeyDownEvent) {
  const keyDown = <KeyboardEvent>event.event;
  const key = keyDown.key;
  const active = key === 'a' && keyDown.ctrlKey === false && keyDown.altKey === false;
  if (active) {
    console.log('Key Down:', key, active, event.data);
    const element = document.getElementById('dimbox');
    dimbox.open(element)
  }
}
