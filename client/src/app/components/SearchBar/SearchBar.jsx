'use client'

import Link from 'next/link';
import React, { useState } from 'react';

function SearchBar() {
    const [title, setTitle] = useState('');
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        setLoading(true);
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
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the form from submitting traditionally
        fetchEvents();
    };
    console.log(events);

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

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
            {console.log(events)}
                {events.map((event , index)=> (
                  <Link key={event._id} href={`/events/${event._id}`}>
                  <section className="light">
                  <div className="container py-4">
                      <article className="postcard light blue">
                              <img className="postcard__img" 
                              src={`https://picsum.photos/${index % 3 === 0 ? 1000 : index % 3 === 1 ? 501 : 500}/500`} alt="Image Title" />
                          <div className="postcard__text t-dark">

                              <h1 className="postcard__title blue">{event.title}</h1>
                              <p ><i className="fa-solid fa-location-pin"></i>  {event.location} </p>

                              <div className="postcard__subtitle small">
                                  <time dateTime="">
                                      <i className="fa-solid fa-clock"></i> {event.time}
                                  </time>
                              </div>
             
                          </div>
                      </article>
                  </div>
              </section></Link>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;

