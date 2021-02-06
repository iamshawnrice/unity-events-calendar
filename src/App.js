import { useState, useEffect } from 'react';
import gapis from 'googleapis';

function getEvents() {
    const calendar = gapis.calendar_v3({
        auth: 'AIzaSyCTKogCA5Q_LiG4VIM0WvZO7pluIWP3vkY'
    });

    calendar.events.list({
        'calendarId': 
    });
}

function App() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ events, setEvents ] = useState([]);

    return isLoading ? <h1>Loading...</h1> : <pre>{ JSON.stringify(events) }</pre> 
}

export default App;
