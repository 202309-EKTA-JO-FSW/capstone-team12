"use client";

import React, {useEffect, useState,  createContext } from "react"; 

export const EventListContext = createContext(null);

export default function EventListContextProvider ({children}) {


    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('http://localhost:3001/api/events/')
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setEvents(json)
            }
        }
        fetchEvents()
    }, [setEvents]);



    return (
        <EventListContext.Provider value={{events, setEvents}}>
        {children}
        </EventListContext.Provider>
    )
};

