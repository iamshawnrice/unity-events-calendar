import { useState } from "react";

import keys from "./gapis.keys.json";

const CALENDAR_ID = "l20qk6u5qoa84jvslc69em9v3s@group.calendar.google.com";

function getEvents() {
  window.gapi.client
    .init({
      apiKey: keys.apiKey,
    })
    .then(() => {
      return window.gapi.client.request({
        path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
      });
    })
    .then(
      (response) => {
        console.log(response.result);
      },
      (reason) => {
        console.error(reason.result.error.message);
      }
    );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  getEvents();

  return isLoading ? <h1>Loading...</h1> : <pre>{JSON.stringify(events)}</pre>;
}

export default App;
