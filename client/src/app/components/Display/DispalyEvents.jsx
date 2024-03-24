'use client'

import React, { useContext, useState, useEffect } from "react";
import EventListContextProvider, {EventListContext} from "../Events/EventsList";
import CatogoriesAndTags from "./CatoandTags";
import Link from "next/link";
import { Container, Row, Col } from 'react-bootstrap';

const DisplayContent = ({pageName}) => {
    const context = useContext(EventListContext)

    // const [getEvents, setGetEvents] = useState([]);
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [priceRange, setPriceRange] = useState("");
     
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    


    useEffect(() => {
        let filteredEvents = context.events;

        if (Array.isArray(filteredEvents)) {
            filteredEvents = filteredEvents.filter(event =>
                (!selectedCategories.length || selectedCategories.includes(event.category)) &&
                (!selectedTags.length || selectedTags.includes(event.tags))
            );
               if (priceRange) {
                    switch (priceRange) {
                        case 'less than 10':
                            filteredEvents = filteredEvents.filter(event => event.price < 10);
                            break;
                        case 'less than 50':
                            filteredEvents = filteredEvents.filter(event => event.price < 50);
                            break;
                        case 'greater than 50':
                            filteredEvents = filteredEvents.filter(event => event.price > 50);
                            break;
                        default:
                            break;
                    }
                }
                if (sortOrder === 'ascending') {
                    filteredEvents.sort((a, b) => a.price - b.price);
                } else if (sortOrder === 'descending') {
                    filteredEvents.sort((a, b) => b.price - a.price);
                }

            setDisplayedEvents(filteredEvents);
        }
    }, [ 
        priceRange, 
        selectedTags, 
        sortOrder,
        selectedCategories,
    ]);

    return  (
        <div> 
        <Container fluid>
            <Row>
              
            <div className="mb-3">
                <select className="form-select" onChange={(e) => setPriceRange(e.target.value)} value={priceRange}>
                    <option value="">Select Price Range</option>
                    <option value="less than 10">Less than $10</option>
                    <option value="less than 50">Less than $50</option>
                    <option value="greater than 50">Greater than $50</option>
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select" onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
                    <option value="">Select Sort Order</option>
                    <option value="ascending">Price Low to High</option>
                    <option value="descending">Price High to Low</option>
                </select>
            </div>
            <Col md={4}>
            <CatogoriesAndTags
                selectedCategories={selectedCategories} 
                setSelectedCategories={setSelectedCategories}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                pageName={pageName}
                />
            </Col>
            <Col md={8}>
            {displayedEvents && displayedEvents.map((event, index) => (
                <Link key={event._id} href={`/events/${event._id}`}>
                    <section key={event._id} className="light">
                        <div className="container py-4">
                            <article className="postcard light blue">
                                <img className="postcard__img" src={`https://picsum.photos/${index % 3 === 0 ? 1000 : index % 3 === 1 ? 501 : 500}/500`} alt="Image Title" />

                                <div className="postcard__text t-dark">

                                    <h1 className="postcard__title blue">{event.title} </h1>
                                    <p ><i className="fa-solid fa-location-pin"></i>  {event.location} </p>

                                    <div className="postcard__subtitle small">
                                        <time dateTime="">
                                            <i className="fa-solid fa-clock"></i> {event.time}
                                        </time>
                                    </div>
                                    <div className="postcard__bar"></div>
                                    <div className="postcard__preview-txt">{event.description} </div>
                                    <ul className="postcard__tagbox">
                                        <li className="tag__item "><i className="fa-solid fa-icons"></i> {event.category}</li>
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

            </Col>
            </Row>
          </Container>
    </div>
    );
};



const Display = (pageName) => {
    return (
        <EventListContextProvider>
            <DisplayContent pageName={pageName}/>
        </EventListContextProvider>
    );
};

export default Display;