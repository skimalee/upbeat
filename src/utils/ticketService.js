// const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
const BASE_URL = "/api/ticketmaster/";

export default async function routeToTM(query) {
  console.log("hitting route to TM", query);
  await fetch(BASE_URL + "get", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({query}),
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error("Invalid request to TM");
  })
  .then(data => {
    console.log("response from route to TM", data);
  })
}
