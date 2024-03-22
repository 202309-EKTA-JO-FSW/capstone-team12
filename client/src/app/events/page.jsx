"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";


const EventsList = () => {
    const [events, setEvents] = useState(null);


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
    }, []);
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    return (
        <>
            <title> HILM | EVENTS</title>
            <h1 className="h1 text-center " id="pageHeaderTitle">Events</h1>
            {events && events.map((event, index) => (
                <Link href={`/events/${event._id}`}>
                    {/* <section key={event._id} className="dark"> */}
                    <section key={event._id} className="light">
                        <div className="container py-4">
                            {/* <article className="postcard dark blue"> */}
                            <article className="postcard light blue">
                                <a className="postcard__img_link" href="#">
                                    <img className="postcard__img" src={`https://picsum.photos/${index % 3 === 0 ? 1000 : index % 3 === 1 ? 501 : 500}/500`} alt="Image Title" />
                                </a>
                                {/* <div className="postcard__text"> */}
                                <div className="postcard__text t-dark">

                                    <h1 className="postcard__title blue"><a href="#">{event.title} </a></h1>
                                    <p ><i className="fa-solid fa-location-pin"></i>  {event.location} </p>

                                    <div className="postcard__subtitle small">
                                        <time datetime="">
                                            <i className="fa-solid fa-clock"></i> {event.time}
                                        </time>
                                    </div>
                                    <div className="postcard__bar"></div>
                                    <div className="postcard__preview-txt">{event.description} </div>
                                    <ul className="postcard__tagbox">
                                        <li className="tag__item"><i className="fa-solid fa-icons"></i> {event.category}</li>
                                        <li className="tag__item"><i className="fa-solid fa-credit-card"></i> {event.price}$  </li>
                                        <li className="tag__item play blue">
                                            <i className="fa-solid fa-people-group"></i> {event.numberOfGuests} Guest</li>
                                        <li className="tag__item"><i className="fa-regular fa-calendar"></i> {formatDate(event.startDate)}  </li>
                                        <li className="tag__item"><i className="fa-regular fa-calendar"></i>  {formatDate(event.endDate)} </li>
                                        <li className="tag__item"><i className="fa-solid fa-hashtag mr-2"></i> {event.tags} </li>

                                    </ul>
                                </div>
                            </article>
                        </div>
                    </section>
                </Link>

            ))}
            { }
        </>
    )
};

export default EventsList;















