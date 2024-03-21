'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddToCartButton from '@/app/components/AddToCart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const EventPage = ({ params }) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/events/${params.eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, []);

  // Function to format date to calendar format (YYYY-MM-DD)
  const formatDateToCalendar = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="card">
        <div className="card-body">
          {event && (
            <>
              <h5 className="card-title">{event.title}</h5>
              <p className="card-text"><strong>Description: {event.description}</strong></p>
              <p className="card-text">Time: {event.time}</p>
              <p className="card-text">Location: {event.location}</p>
              <p className="card-text">Price: ${event.price}</p>
              <p className="card-text">Category: {event.category}</p>
              <p className="card-text">Number of Guests: {event.numberOfGuests}</p>
              <p className="card-text">Start Date: {formatDateToCalendar(event.startDate)}</p>
              <p className="card-text">End Date: {formatDateToCalendar(event.endDate)}</p>
              <p className="card-text">Tags: {event.tags}</p>
              <Calendar
                value={[new Date(event.startDate), new Date(event.endDate)]} // Set selected dates on the calendar
                readOnly={true} // Disable user interaction with the calendar
              />
              <div className='align-items-center'>
              <AddToCartButton ticketId={event.tickets} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;

