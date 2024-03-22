import React from 'react'
import { useState } from 'react';

const DeleteEvent = ({ event }) => {
    const [error, setError] = useState(null);
    const handleClick = async () => {
        const response = await fetch(`http://localhost:3001/api/events/dashboard/admin/event/${event._id}`, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error);
            return;
        }
        console.log('deleted an event:', json);
        console.log(error)
        setError(null);
    }
    return (
        <>
            <i onClick={handleClick} className="btn btn-danger p-2  fas fa-trash"> </i>
        </>
    )
}
export default DeleteEvent;



