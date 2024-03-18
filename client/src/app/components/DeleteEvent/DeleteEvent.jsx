import React from 'react'
import { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const DeleteEvent = ({ event }) => {
    const randomNumber = Math.floor(Math.random() * 3);
    const imageUrl = `https://picsum.photos/${randomNumber === 0 ? 1000 : randomNumber === 1 ? 501 : 500}/500`;
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
            {/* <div className="custom-card rounded border border-secondary  m-4 d-flex flex-row w-50 h-5 p-3 bg-grey">
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h4 className="card-title">{event.title}</h4>
                        <h5 className="card-subtitle  text-muted">{event.category}</h5>
                        <h6 className="card-subtitle  text-muted">time: {event.time}</h6>
                        <p className="card-text">{formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</p>
                    </div>
                </div>
                <button className="btn  btn-orange ">
                    <i onClick={handleClick} className="fas fa-trash"></i>
                </button> */}

            {/* ////////////////////////// */}
            <div className="container">
                <div className="text-center mb-5">
                    {/* <h3>Recently Added Events</h3> */}
                    <p className="lead"> </p>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex flex-column flex-lg-row">
                            <span className="avatar avatar-text rounded-3 me-4 mb-2 "><img src={imageUrl} className="fill " /></span>
                            <div className="row flex-fill">
                                <div className="col-sm-5">
                                    <h4 className="h3">{event.title}</h4>
                                    <span className="badge bg-warning text-dark">{formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</span>
                                    <span className="badge bg-secondary mr-20">{event.category}</span> <span className="badge bg-success ml-5">{event.time}</span>
                                </div>
                                <div className="col-sm-4 py-4 ml-2">
                                    <span className="badge bg-primary p-3  ">{event.tags}</span>
                                    <span className="badge bg-dark  p-3">{event.location}</span>
                                </div>
                                <div className="col-sm-3 text-lg-end">
                                    <i onClick={handleClick} className="btn  fas fa-trash"> </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default DeleteEvent;



