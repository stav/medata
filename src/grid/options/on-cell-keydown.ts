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

const cookie = `_abck=99A68D5B27FE75B51F6659281C1D3E3E~-1~YAAQhBwhF63mrLKTAQAAclDAww3bJ4Go1DvCAEZIfOBtXSOhJReyta+DcnY5VsjjwcOtluqq8+NZP+HrzxQzmLEztedlAOEmyFe4PEpFwymw8/Ceozi6AaK0kA0FJtf1/Vd0uV4jo6Fubnwf7YnCnDIU0I44qRtCgaV+r7dIHX+tcgB/EVt+5y0JI+IUAsYFIo/A1rfAZRZgjxmF7bKwoTXTsCDlvmRhO9I/722cnoEVKKeNdwPtEqcah7hOny7S2on3ztNCfyUWkskidK6bhnCze1UrTLw1hN/refLYd9oAGjT2ajVLk3267MERBIi1PiDdDG6FzU/NybhCv+S0amYvQApv565Y73YR4SkcfDt8CpYSBhTjmzybdFFHiPVy2zGoiTgJRFM+/9hL6ZbjDMlCf7ND76GCNcCdHF65o/NxB+HA3cShBoiIc3Mo02gluolE9eJdHgPHvzOC5yWpWGNDvf7atFS0MFHctrDy5vpxX8Zrdfz+BttX0MnZaWiFCOttSgBzAjs3Ey8GhNpUJJ0cb6FiBRRWTt37EEPeD2qM0rA7bxqbd4cx1dyh6ESFr5B1hfjfp9JIMl/FTXk374NE6TfERECSH5C02GnpIIHJMwP8SxjvWRr/WzQ8ohXhaC4+IYMejoVbUsBgGDzeSO6Gw5+GlP8z7rLU+9qp+NKIbQbZ~0~-1~-1; AMCV_95CF659E533DE4C90A490D4D%40AdobeOrg=179643557%7CMCIDTS%7C20071%7CMCMID%7C83522238824117745400766942131487218194%7CMCAAMLH-1734760683%7C7%7CMCAAMB-1734760683%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1734163083s%7CNONE%7CvVersion%7C5.5.0%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-20074%7CMCCIDH%7C-664158109; s_ecid=MCMID%7C83522238824117745400766942131487218194; mbox=PC#5ca0c4dbad55432ca53e280a00071bf8.34_0#1797400695|session#fca41de47e11492b8a980989d08e3995#1734157755; QuantumMetricUserID=0117b9240ab42269d470a3b0d3d55519; _gcl_au=1.1.1166376228.1730765908; _fbp=fb.1.1730765908135.441309221633180101; kndctr_95CF659E533DE4C90A490D4D_AdobeOrg_identity=CiY4MzUyMjIzODgyNDExNzc0NTQwMDc2Njk0MjEzMTQ4NzIxODE5NFIQCLinwc2vMhgBKgNWQTYwA_ABr7rBhrwy; kampyle_userid=c6bb-a7b9-33d8-5c40-0400-be34-b613-8769; kampyleUserSession=1734158435160; kampyleSessionPageCounter=2; kampyleUserSessionsCount=22; RT="z=1&dm=anthem.com&si=aa4ac3ad-f38e-454c-8620-4a2828fa74ed&ss=m4nrn7c0&sl=0&tt=0&bcn=%2F%2F17de4c1e.akstat.io%2F"; _uetvid=7aecae609b0b11efa500cdd5ebb611c3; invoca_session=%7B%22ttl%22%3A%222025-01-04T02%3A36%3A56.734Z%22%2C%22session%22%3A%7B%7D%2C%22config%22%3A%7B%22ce%22%3Atrue%2C%22fv%22%3Atrue%7D%7D; at_check=true; AMCVS_95CF659E533DE4C90A490D4D%40AdobeOrg=1; s_cc=true; TLTSID=1d721f1a-9fcf-278d-96b8-dfba1cf0cc5f; PIM-SESSION-ID=plmh2zrPcvD7IJEN; AWSALB=g8smpB0k7t3K+0daEnGBUZOP7bDpu7D/40A/WZvCo6psL+u5LL/JQqIeLIbWiIo5U5OPYdDyx/gtKs/iawT11jWgB013+2qBfQsO8XaBbzpDeGCy5Q+pikwbOaMW; AWSALBCORS=g8smpB0k7t3K+0daEnGBUZOP7bDpu7D/40A/WZvCo6psL+u5LL/JQqIeLIbWiIo5U5OPYdDyx/gtKs/iawT11jWgB013+2qBfQsO8XaBbzpDeGCy5Q+pikwbOaMW; RT="z=1&dm=shop.anthem.com&si=aa4ac3ad-f38e-454c-8620-4a2828fa74ed&ss=m4nt5mho&sl=1&tt=1&bcn=%2F%2F17de4c13.akstat.io%2F"; ant=!+SR8kkLzQggygUfyks4CUEmO3e45oyBBKqXjvqfKzJ9Aa/H6ETAhcVUxjN3lDLb3Y8MXPTnLojl9/biGrP7a4z3Sy/BbVDepNKv3xhUq; s_sq=%5B%5BB%5D%5D; JSESSIONID=kKPD5bsv2x8BQoVOjNFBsWOab_4ncVH3FaZuru0byMEvgf7Xjbyo!-2145615554; SMSESSION=LOGGEDOFF; AKA_A2=A; ak_bmsc=2A793A77F944177B6C1925917E84F93A~000000000000000000000000000000~YAAQjRwhFw3J67iTAQAAw9K+wxpAtZTQjuKCJu3/JzSa5aLfaad3e4lR3kLZ0zvDqTH/K0g1wsBoD8YhwHJ6z8RDd4eyvVEuPj/KKDAbwxdgE9dAQ7obmaG/KVjL/m53wrx2sSQkPRjlBxTsZugKjhayc2DTZAO9X+FNGaQwenuo8EYBBwvLIqSb6acsxUplqoVOpl6v+H7YndZOPOfy78WX3A5TPSS5s3VV01pH3rF5uhzE6rhfwkvvGtp1N6oocqgoQSlghiaAcSlWfdvF+5MAGSAmJWndxsrGDBWSjZYZAY5iPRVtu/M7SCdh0oaJnd+YirVgsNDpUqWJ9nL276stCgQgYgKTyesPiGGhHRyZUHC0V+U1zCU4VuMu6LhKWTac22HjwHRL+ZfvrJmN/foA0q93vK4Wn38Rt8/I9jjf/jytUwrxGjlzU0hJvPdAvjQDyi3SNGpSsvr6; bm_sz=C0FFC52B09D7AAADE112B54F2AD45C79~YAAQhBwhF9s5sbKTAQAApLflwxp9O36+6GslYqMYhAuN8TUSexjyWNkLBYBWvayra5jhXsPOyVFrw9XuPn4D7IPRaL+q1CsfMSKohohhrUZKcRarcDFtPXqcUu4aIK33TDeI9lNWMSBeI4uHbdVl+lZz3AYk0YkYFNVi9QzqFj2p+dqnxrcuIkZMfReUDEVZ0TLNb1wtU/1WJoZq0OE7JB1xBkkm8EBlKtKDb/sFdFpdgpn0C1inbpyHtjaX766d1WhNF8JkL289NkKIvQMIn+lKRGkHCpEDLw34Dj0xmsasvWiaivJo6Qu9aVBcPcPGXG85zy4l5AZGKWI/SYwJgbTfrtdFl7/fzE69jLxvlrMQd2pdpzjoFxuulH0RB+cQLfHrmBUoEjsV6L8p1JiCU9/Kg8Z6P/Vbb+x8+yNC4Wo4uEJWLV1J4+16CFlsnEffLJlmrKzHgXS16JY=~3422019~4535110; bm_sv=FA2C88CBF9D8A2A4D3E81379E98C9AB9~YAAQhBwhF6ZAsbKTAQAAGfjlwxr8sIUjktd0OjX1tKmZaWI+hq5W7XsZYGG+++/BdRuRoNhgSth9vrga756dCyRrHi3iKcRInkY9AhQdywMQQSmyyVjDd9hKsKYZW9Ts6sWttaFdWFfhwht6O63s+GQp0feA3II/sO0ckavWw4qFzXnlFi1Ty1UJXsaJuK6T2A+z2JqhQBV4KWC+2jD4NMysEam/IGiJf5AdrH+AFEezeyLuDU/5fv8F/lEyVS1ggQ==~1; QuantumMetricSessionID=0bb97ba44f029e7b529c36742af1b01b; _dd_s=rum=2&id=247d07b3-74c8-44b4-9ea3-a19a9b44dd20&created=1734158417607&expire=1734159348606`

async function gogetit() {
  const response = await fetch("/api/medicare/accessgateway/getPlanSummary", {
    credentials: "include",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0",
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.5",
      // Cookie: cookie,
      Authorization: "",
      UID: "",
      SMSESSION: "",
      "Content-Type": "application/json",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
    },
    referrer:
      "https://shop.anthem.com/medicare/quote/view-all-plans-ma?state=OH&brand=ABCBS&role=consumer&locale=en_US",
    body: '{"planSummaryRequest":{"brand":"ANTHEM","productTypes":{"productType":["MEDICAL","DRUG"]},"marketSegment":"SENIOR","zipCode":"44035","county":"LORAIN","state":"OH","coverageTypes":{"coverageType":["ALL"]},"coverageEffectiveDate":"2025-01-01","applicants":{"applicant":[{"applicantType":"PRIMARY","dateOfBirth":"1952-01-01","gender":"MALE"}]},"benefitsRequest":"YES","rateRequest":"YES","countyCode":"39093","event":"Cart","channel":"OLS"}}',
    method: "POST",
    // mode: "cors",
  });
  console.log("fetch", await response.text());
}
