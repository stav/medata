import type { CellKeyDownEvent } from "@ag-grid-community/core";

import Swal from "sweetalert2";

function active(keyDown: KeyboardEvent): boolean {
  return (
    keyDown.key === "a" && keyDown.ctrlKey === false && keyDown.altKey === false
  );
}

export default async function (event: CellKeyDownEvent) {
  if (active(event.event as KeyboardEvent)) {
    console.log("Key Down on row", event.data);
    const json = JSON.stringify(event.data);
    const text = await gogetit();
    Swal.fire({
      title: "Info.",
      html: `'<p><code>${json}</code></p><pre>${text}</pre>'`,
      icon: "info",
      confirmButtonText: "Cool",
      width: 1500,
    });
  }
}

async function gogetit() {
  // const url = "/api?uri=https://shop.anthem.com/medicare/accessgateway/getPlanSummary";
  // const url = "/api?uri=https://shop.anthem.com/medicare/quote/view-all-plans-ma?brand=ANTHEM&state=OH&zipcode=44035&county=LORAIN&CvgEffDate=012025";
  const url = "/api?uri=https://httpbin.org/anything";
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0",
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.5",
      // Cookie: cookie,
      Authorization: "",
      UID: "",
      SMSESSION: "",
      "Content-Type": "application/json",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      TE: "trailers",
      // Origin: "https://shop.anthem.com",
      Origin: "https://httpbin.org",
    },
    referrer:
      "https://shop.anthem.com/medicare/quote/view-all-plans-ma?state=OH&brand=ABCBS&role=consumer&locale=en_US",
    body: '{"planSummaryRequest":{"brand":"ANTHEM","productTypes":{"productType":["MEDICAL","DRUG"]},"marketSegment":"SENIOR","zipCode":"44035","county":"LORAIN","state":"OH","coverageTypes":{"coverageType":["ALL"]},"coverageEffectiveDate":"2025-01-01","applicants":{"applicant":[{"applicantType":"PRIMARY","dateOfBirth":"1952-01-01","gender":"MALE"}]},"benefitsRequest":"YES","rateRequest":"YES","countyCode":"39093","event":"Cart","channel":"OLS"}}',
    method: "POST",
    mode: "cors",
  });
  const data = await response.json();
  console.log("fetch", data);
  return JSON.stringify(data, null, 2);
}
