import type { CellKeyDownEvent } from "@ag-grid-community/core";

import MicroModal from "micromodal";

MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown`), // [1]
  onClose: modal => console.info(`${modal.id} is hidden`), // [2]
  // openTrigger: 'data-custom-open', // [3]
  // closeTrigger: 'data-custom-close', // [4]
  // openClass: 'is-open', // [5]
  // disableScroll: true, // [6]
  // disableFocus: false, // [7]
  // awaitOpenAnimation: false, // [8]
  // awaitCloseAnimation: false, // [9]
  debugMode: true // [10]
});

export default function (event: CellKeyDownEvent) {
  const keyDown = <KeyboardEvent>event.event;
  const key = keyDown.key;
  const active = key === 'a' && keyDown.ctrlKey === false && keyDown.altKey === false;
  if (active) {

    console.log('Key Down:', key, active, event.data, MicroModal);
    MicroModal.show('modal-1');
  }
}
