import type { CellKeyDownEvent } from "@ag-grid-community/core";

import { silverBox } from "../../../public/silverBox";

export default function (event: CellKeyDownEvent) {
  const keyDown = <KeyboardEvent>event.event;
  const key = keyDown.key;
  const active = key === 'a' && keyDown.ctrlKey === false && keyDown.altKey === false;
  if (active) {
    // @ts-check
    console.log('Key Down:', key, active, event.data, silverBox);

    silverBox({
      customIcon: "/public/src/images/loginExample.png",
      title: {
             text: "Login"
      },
      centerContent: true,
      text: "Enter your account information",
      footer: "<a href='#'>Forgot your password?</a>",
      showCloseButton: true,
      confirmButton: {
             text: "Login",
             closeOnClick: false
      },
      theme: 'dark',
      cancelButton: {},
      input: [
             {
                    label: "Username",
                    type: "text",
                    placeHolder: "Enter your username",
                    maxLength: 30
             },
             {
                    label: "Password",
                    type: "password",
                    placeHolder: "Enter your password",
                    hint: "Pick a strong password."
             }
      ]
})

  }
}
