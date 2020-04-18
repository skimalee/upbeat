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

async function create(event) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify({event})
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error("Invalid request to ticket create");
  })
  .then(data => data);
}

async function randomList(location) {
  return fetch(BASE_URL + 'random', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify({location})
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Invalid request to randomList');
  }).then(data => {
    return data
  });
}

async function getTrackList() {
  return fetch(BASE_URL + 'getTrackList', {
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Invalid request to getTrackList');
  }).then(data => {
    return data
  })
}

async function untrack(eventId) {
  return fetch(BASE_URL + 'untrack', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer '  + tokenService.getToken()
    },
    body: JSON.stringify({eventId})
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Invalid request to untrack');
  }).then(data => {
    return data
  })
}

export default {routeToTM, create, randomList, getTrackList, untrack}