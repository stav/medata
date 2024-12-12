import type { CellKeyDownEvent } from "@ag-grid-community/core";

export default function (event: CellKeyDownEvent) {
  const keyDown = <KeyboardEvent>event.event;
  const key = keyDown.key;
  const active = key === 'a' && keyDown.ctrlKey === false && keyDown.altKey === false;
  if (active) {
    console.log('Key Down:', key, active, event.data);
  }
}
