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

let cookie: string;
cookie = 'kampyle_userid=c6bb-a7b9-33d8-5c40-0400-be34-b613-8769; kampyleUserSession=1734392386880; kampyleSessionPageCounter=4; kampyleUserSessionsCount=24; AWSALB=xy1pR60DjgPPnENmVXIAxKt69p1yAmE5nFdC8Y3dIhF+azJb72ECN6E11gzm8n7DwGIURWgPQ0gqQ5358beazjoINh4X8wB0R97SonMMoK2ljTFoBDLxpg3b0fXu; AWSALBCORS=xy1pR60DjgPPnENmVXIAxKt69p1yAmE5nFdC8Y3dIhF+azJb72ECN6E11gzm8n7DwGIURWgPQ0gqQ5358beazjoINh4X8wB0R97SonMMoK2ljTFoBDLxpg3b0fXu; RT="z=1&dm=shop.anthem.com&si=aa4ac3ad-f38e-454c-8620-4a2828fa74ed&ss=m4rs8inr&sl=1&tt=1&bcn=%2F%2F17de4c17.akstat.io%2F&hd=3tstn&r=yo5v4ew3"; PIM-SESSION-ID=m7YP6XJ7xvOkFwUR; _abck=87E0781EE9C5A161A443A545B8D9CDAC~0~YAAQhBwhFx4JFLaTAQAAtOHX0Q1m12QU0Ll29pMdVEciMr5WTY7iKZ07x1MLMb3e+Tz5/lDRxxDglmvWW9Ko8B5p6cTgBVSu42MFteww6AnyKYijfe8coD85mynPY7W1dqgj7reA7n81b3fsWkdmrKXQ1sV+BmuxDhILrtq2npJykEXcHS2cnOS4HpS6A08wcRryWmxbIbANKz2kLJXwSXFdh54udvKuHwNMui7rH56fgpWRaZEjFKaeiqOqM9+8btmK+iRJB5fnHUf5ekpw/9bISRzP7EpUK2SVy+cPLM9Xcb1fxILc7tp7XxLwpF1NdpqG48nAbWDfMsUZFlD+S1HO5IPR1ejG8sztrQXeFQKGwo/VoX+d4WzhnNtPSd7NW2o1vZVPxDoSA6+beKI+oUdHps2l95byRtGpkR036njO3lygN/G0XUMCgk1TclvJX/0W2/DQl7EIWNWuVpPtVPh3A2mWJ2NdpBIDq7n61iyjiQf+mYCxCIuzQYv+EKcpsPoBtvj6Oix/TjQ7OrZ3rl7y4TInCYRNtgixdy6QrbgHSFTmtLwkeO+xZvvHTjP9mNQG0NSc5Q76mPVj40+hUVfrteGMIF1mNBgcVWtvpzRrJzNlMVcp5vSVaxzvOrQnrRwpm2xt0TDskJqIk/lDEw+OzqwNiIASz6qubrfnRPsj68t8f4FjdY93744TejirnWWvFE6ffEKCyf2eo67W+JJHMWpALIXMbhH0thpY2SXxO+silIOQigx8n7ewNLCjdEttUw8hdjw6SmX3cIOm~-1~-1~-1; bm_sz=7DDD5AD25CE1A7E25A47D9CBF9A224DE~YAAQhBwhF4/oLraTAQAAmLY40hr7K7zfxd9iL/6MN0fMS1Gyydh9EzEFzSY923OTIoOsDioBK19irNtUdsqISN3GpphZr62E/v6WPnmEZx8eiCGTokHqIxAi3Tp1EnwicYlasRdFq85LsGP7gJgG0eJ6qJX3U39LRv1POC56ehuSInpOuiyRZsrnGaSj0KNJENLDK3it37TjomP/TCn0VrdBQeGUjnnD7V2kohQIHTHo52w48xvQGo+tPoPx2+E+OXKqDB2GYUPoXGIsSGMxJ+082mRa6weUBCVR4QszHIdBVVpuy54z/YlQXHJUqr73J+scwBYEBmDQGtQhNESiQqaIqsKcTfH32hIa5Y/ZtCzHPKMnKYV8c2glhvJBgIUFvWBhkhLvGuAgHMrgVpkYTRH+58hX/bOnEEQ6IqsLYIjNdyxsM5Ce/BZ8fxqieZXUcUl4s7Ub33Va14DdBJ65KIOKYnYrfHo=~4277560~3224119; TLTSID=2d07cdc4-08c6-6172-8ecb-34b4e55fdfc9; RT="z=1&dm=anthem.com&si=aa4ac3ad-f38e-454c-8620-4a2828fa74ed&ss=m4roephi&sl=1&tt=0&bcn=%2F%2F17de4c11.akstat.io%2F&hd=3tstn&r=yo5v4ew3&obo=1"; ak_bmsc=865C1D6202A0719479BBFF9936408D4A~000000000000000000000000000000~YAAQjRwhF1+ft8mTAQAAZnbW0RrkfjQ020tXwHbbFZBBAmU92+QUNDuxFr90dEsh8IS98xiIkpLju0NQ4et93qeHK0hMJwXHafJ1UIW86FEyQRolldWj0AptvxmdEBaq6Xe+XQV4hynJvRKyBr0Z9snIZketMgAYo4GpMfeV5HquuexehaEVwnDETBrpKRqYyVsNlvuv6d51klqxkPpeioZkho0WbTOHP52snbY+7poa5paHMoc74dcqPEipTgCylq89F4bA/JoAGZLKAjWzzTl2dQNDwUA9F2pmzIcZkLVsGIimdPbAjTKh6vTH5nUwlpSKETFOQI5ceHm53i3Ga2X3BxML3QfLBJ7qQNcqZWSOJiWRUr/RAXUD5n8DmlOENk95kLDgfvxShc7PUNhG8kDgSACz; bm_sv=94E5C8F0DE8173CDA60059335D46246F~YAAQhBwhF4X8LraTAQAAXPo40hps/4tbFvkLCV0feNfdBPvwRTlTiLKvM7SBnuYL3oJ5p9VU19p0Ot64hIK85ACcDbIzcRxI6C/Lu2TJnYjxWZTw+9o1yWXNkNU9Ba5XnEuJzq/p6onQXuNrFKNfpCMHMF6pWkb6Vbv4ce80ZIJk6tXv8fJqw45Q4RShUdsScc0B3op3cqBxpTzIZs/q98MwG4/xPh+KnaYn+ghmFiRK78WW85V9kSZ6pJ4Og6mwyA==~1; AMCV_95CF659E533DE4C90A490D4D%40AdobeOrg=179643557%7CMCIDTS%7C20074%7CMCMID%7C64732510790063929233360110691141951245%7CMCAAMLH-1734997113%7C7%7CMCAAMB-1734997113%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCCIDH%7C-664158109%7CMCOPTOUT-1734399513s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-20081%7CvVersion%7C5.5.0; mbox=session#4fcc6cd9b9ba47a8b80dce92e0803c67#1734394184|PC#4fcc6cd9b9ba47a8b80dce92e0803c67.34_0#1797637124; at_check=true; AMCVS_95CF659E533DE4C90A490D4D%40AdobeOrg=1; s_ecid=MCMID%7C64732510790063929233360110691141951245; s_cc=true; QuantumMetricUserID=0117b9240ab42269d470a3b0d3d55519; kndctr_95CF659E533DE4C90A490D4D_AdobeOrg_identity=CiY2NDczMjUxMDc5MDA2MzkyOTIzMzM2MDExMDY5MTE0MTk1MTI0NVIQCI-S2o69MhgBKgNWQTYwA_ABj5Lajr0y; s_sq=%5B%5BB%5D%5D; _dd_s=rum=2&id=56566ea2-982a-4c37-9d3d-b541831d5cd0&created=1734392345208&expire=1734399669631; _gcl_au=1.1.917568403.1734392346; ant=!Z96L99uumG9GJobyks4CUEmO3e45o6ijxm1fJztAOGj1N4T+zVOEXlyvSemxmiTMNxIocMv9y9clHgYa1q0ZGgMav9U3YGGuk0k3HZUS; invoca_session=%7B%22ttl%22%3A%222025-01-15T23%3A39%3A06.678Z%22%2C%22session%22%3A%7B%7D%2C%22config%22%3A%7B%22ce%22%3Atrue%2C%22fv%22%3Atrue%2C%22rn%22%3Atrue%7D%7D; JSESSIONID=8LTR1vnpFgCMgE5ptObj9gvoF-hM8W8rMZNy6k8MedWHRa7Nx-qC!1163546880; _fbp=fb.1.1734392386949.895849891707070153; QuantumMetricSessionID=72025383cdcc53c3df4847e6295a7356; SMSESSION=LOGGEDOFF';
cookie = 'B304F3E8724B0C8BF73DF0A609FA194F~-1~YAAQmBwhFy8a8r6TAQAAfQqR0g36hWRlDlaVd3Ubo2yV5aRU5/QCW6flYDBrokip41L3NxApRU8S+sm3dPawv59DVJJdeuUKJkHAa6iUmgmgBYR7xFIumaqc+kByPYOt6L4QN3BSp07h/Wh8T8Bes81f3RiXdELaSsDXxeUJos4AmJ2JW1FqCUcY1jXh6gcQFflLzpUTNWUNW/6k+pQhgJxHnqLd7AHTkwqTcjibsi0prbo8o+Ncu5c7j6g4XqWfO2uLOEzeBQLrW7/7I3BwQDu+DFSVV1qSg3DuBgejf1PVIzw7K9MKZ6Wk/eASka+2TT3zWUSFTjitHhy9IOnXMVma0arEJ+gDsoRNNwM2WXRqWopadDcdO0E1UdyVtxGezQ8Dv434p8klgtm3Fvd78u5kdQT0SnOAtvLedDWnU2/n4mF7AOY=~-1~-1~-1';

async function gogetit() {
  const url = "/api?uri=https://shop.anthem.com/medicare/accessgateway/getPlanSummary";
  // const url = "/api?uri=https://shop.anthem.com/medicare/quote/view-all-plans-ma?brand=ANTHEM&state=OH&zipcode=44035&county=LORAIN&CvgEffDate=012025";
  // const url = "/api?uri=https://httpbin.org/anything";
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0",
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": 'gzip, deflate, br, zstd',
      Cookie: cookie,
      Authorization: "",
      UID: "",
      SMSESSION: "",
      "Content-Type": "application/json",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      TE: "trailers",
      Host: 'shop.anthem.com',
      Origin: "https://shop.anthem.com",
      Referer: 'https://shop.anthem.com/medicare/quote/view-all-plans-ma?state=OH&brand=ABCBS&role=consumer&locale=en_US',
      Connection: 'keep-alive',
    },
    body: '{"planSummaryRequest":{"brand":"ANTHEM","productTypes":{"productType":["MEDICAL","DRUG"]},"marketSegment":"SENIOR","zipCode":"44035","county":"LORAIN","state":"OH","coverageTypes":{"coverageType":["ALL"]},"coverageEffectiveDate":"2025-01-01","applicants":{"applicant":[{"applicantType":"PRIMARY","dateOfBirth":"1952-01-01","gender":"MALE"}]},"benefitsRequest":"YES","rateRequest":"YES","countyCode":"39093","event":"Cart","channel":"OLS"}}',
    method: "POST",
    mode: "cors",
  });
  const data = await response.json();
  console.log("fetch", data);
  return JSON.stringify(data, null, 2);
}
