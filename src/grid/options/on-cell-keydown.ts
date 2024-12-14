import type { CellKeyDownEvent } from "@ag-grid-community/core";

import Swal from "sweetalert2";

export default async function (event: CellKeyDownEvent) {
  const keyDown = <KeyboardEvent>event.event;
  const key = keyDown.key;
  const active =
    key === "a" && keyDown.ctrlKey === false && keyDown.altKey === false;
  if (active) {
    console.log("Key Down:", key, active, event.data, Swal);
    const json = JSON.stringify(event.data);
    await gogetit();
    Swal.fire({
      title: "Info.",
      // text: 'Do you want to continue',
      html: `'<code>${json}</code>'`,
      icon: "info",
      confirmButtonText: "Cool",
    });
  }
}

async function gogetit() {
  const response = await fetch(
    "/api",
    {
      // credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        // Authorization: "",
        // UID: "",
        // SMSESSION: "",
        // "Content-Type": "application/json",
        // "Sec-Fetch-Dest": "empty",
        // "Sec-Fetch-Mode": "cors",
        // "Sec-Fetch-Site": "same-origin",
        Priority: "u=0",
      },
      referrer:
        "https://shop.anthem.com/medicare/quote/view-all-plans-ma?state=OH&brand=ABCBS&role=consumer&locale=en_US",
      // body: '{"planSummaryRequest":{"brand":"ANTHEM","productTypes":{"productType":["MEDICAL","DRUG"]},"marketSegment":"SENIOR","zipCode":"44035","county":"LORAIN","state":"OH","coverageTypes":{"coverageType":["ALL"]},"coverageEffectiveDate":"2025-01-01","applicants":{"applicant":[{"applicantType":"PRIMARY","dateOfBirth":"1952-01-01","gender":"MALE"}]},"benefitsRequest":"YES","rateRequest":"YES","countyCode":"39093","event":"Cart","channel":"OLS"}}',
      // method: "POST",
      // mode: "cors",
    }
  );
  console.log("fetch", await response.text());
}
