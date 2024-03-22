'use client'

import React, { useState } from 'react';

function SearchBar() {
    const [title, setTitle] = useState('');
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    console.log(events);
    console.log(title);
    const fetchEvents = async () => {
        setError(null);

        try {
            const response = await fetch(`http://localhost:3001/api/events/search?title=${encodeURIComponent(title)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch events.');
            }
            const data = await response.json();
            setEvents(data);
        } catch (err) {
            setError(err.message);
    
        };}

    const handleSearch = (e) => {
        e.preventDefault(); 
        fetchEvents();
    };
    console.log(events);
    console.log(title);
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter event title"
                />
                <button type="submit">Search</button>
            </form>

            {error && <p>Error: {error}</p>}
            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
