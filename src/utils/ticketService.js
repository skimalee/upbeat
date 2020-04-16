import tokenService from "./tokenService";

// const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
const BASE_URL = "/api/ticketmaster/";

  async function routeToTM(query) {
  return fetch(BASE_URL + "get", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify({query}),
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error("Invalid request to TM");
  })
  .then(data => {
    if (data.data._embedded) {
      return data.data._embedded.events
    } else {
      return null
    }
  })
}

export function create(event) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify({event})
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error("Invalid request to TM");
  })
  .then(data => console.log(data));
}

export default {routeToTM, create}