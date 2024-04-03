'use client'

import React, { useContext, useState, useEffect } from "react";
import EventListContextProvider, {EventListContext} from "../Events/EventsList";
import CatogoriesAndTags from "./CatoandTags";
import Link from "next/link";
import { Container, Row, Col,Card, Form } from 'react-bootstrap';
import SearchBar from "../SearchBar/SearchBar";

const DisplayContent = () => {
    const context = useContext(EventListContext)

    // const [getEvents, setGetEvents] = useState([]);
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [priceRange, setPriceRange] = useState("");


    const getImageForCategory = (category) => {
        switch (category) {
            case 'Concerts':
                return '/concert.jpg';
            case 'Festivals':
                return '/MusicFestival.jpg';
            case 'Sports':
                return '/sport.jpg';
            case 'Theater':
                return '/theater.jpg';
            case 'Conferences':
                return '/conference.jpg';
            default:
                return '/kids.jpg'; 
        }
    };
     
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        if (context.events) {
            // Initialize displayedEvents with all events
            setDisplayedEvents(context.events);
        }
    }, [context.events]);
    


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
        setDisplayedEvents,
        priceRange, 
        selectedTags, 
        sortOrder,
        selectedCategories,
    ]);
return(
    <Container fluid style={{
        minHeight: '100vh'
    }}>
        <Row className="mb-3">
            <Col md={3} className="mb-3">
                <SearchBar />
                <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setPriceRange(e.target.value)}
                value={priceRange}
              >
                <option value="">Select Price Range</option>
                <option value="less than 10">Less than $10</option>
                <option value="less than 50">Less than $50</option>
                <option value="greater than 50">Greater than $50</option>
              </Form.Select>
    
              {/* Sort Order Selector */}
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setSortOrder(e.target.value)}
                value={sortOrder}
              >
                <option value="">Select Sort Order</option>
                <option value="ascending">Price Low to High</option>
                <option value="descending">Price High to Low</option>
              </Form.Select>
    
              {/* Categories and Tags */}
              <CatogoriesAndTags
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            </Col>
    
            {/* Main content area (adjust the md value based on your design) */}
            <Col md={9}>
            <Row xs={1} md={2} lg={3} className="g-4">
            {displayedEvents.map((event, index) => (
                <Col key={event._id} className="mb-4">
                    <Card className="h-100" style={{ border: '3px solid #f3d250', borderRadius: '15px' }}>
                        <Link href={`/events/${event._id}`}>
                            <Card.Img variant="top" src={getImageForCategory(event.category)} alt="Event Image" style={{ height: '200px', objectFit: 'cover' }} />
                        </Link>
                        <Card.Body>
                            <Card.Title>{event.title}</Card.Title>
                            <Card.Text>Price: ${event.price}</Card.Text>
                            <Card.Text>Category: {event.category}</Card.Text>
                            <Card.Text>Location: {event.location}</Card.Text>
                            <Card.Text>Tags: {event.tags}</Card.Text>
                            <Link href={`/events/${event._id}`}>
                                <Card.Link>View Details</Card.Link>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
            </Col>
        </Row>
    </Container>
)}


const Display = () => {
    return (
        <EventListContextProvider>
            <DisplayContent/>
        </EventListContextProvider>
    );
};

export default Display;