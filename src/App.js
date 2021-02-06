import { useState } from "react";
import gapis from "googleapis";

import keys from "./gapis.keys.json";

function getEvents() {
  const calendar = gapis.calendar_v3({
    auth: keys.apiKey,
  });

  calendar.events
    .list({
      calendarId: "l20qk6u5qoa84jvslc69em9v3s@group.calendar.google.com",
    })
    .then((response) => {
      console.log(response);
    });
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  getEvents();

  return isLoading ? <h1>Loading...</h1> : <pre>{JSON.stringify(events)}</pre>;
}

export default App;
