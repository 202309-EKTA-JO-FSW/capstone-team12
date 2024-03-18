'use client'
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function SearchBar() {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState("");
// serach by title
    useEffect(() => {
        if (title !== "") {
            axios.get(`http://localhost:3001/api/events/search?title=${title}`)
                .then(res => {
                    setEvents(res.data) 
                })
                .catch(err => console.log(err));
        } else {
            setEvents([]);
        }
    }, [title]);

    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Search"
                value={title}
            />
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>category</th>
                        <th>tags</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td>{event.category}</td>
                            <td>{event.tags.join(', ')}</td> {/* Simplified tags rendering */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

