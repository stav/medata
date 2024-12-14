import type { CellKeyDownEvent } from "@ag-grid-community/core";

import Swal from "sweetalert2";

export default function (event: CellKeyDownEvent) {
  const keyDown = <KeyboardEvent>event.event;
  const key = keyDown.key;
  const active = key === 'a' && keyDown.ctrlKey === false && keyDown.altKey === false;
  if (active) {
    console.log("Key Down:", key, active, event.data, Swal);
    const json = JSON.stringify(event.data);
    Swal.fire({
      title: "Info.",
      // text: 'Do you want to continue',
      html: `'<code>${json}</code>'`,
      icon: "info",
      confirmButtonText: "Cool",
    });
  }
}
