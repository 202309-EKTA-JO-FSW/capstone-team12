import React, { useState } from 'react';
import axios from 'axios';

const CreateOrderForm = () => {
  const [formData, setFormData] = useState({
    boughtTickets: 0, // Total number of tickets bought
    ticketItems: [], // Array to store ticket items { ticketId, quantity }
  });

  const handleInputChange = (event, ticketId) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      ticketItems: prevFormData.ticketItems.map(item =>
        item.ticketId === ticketId ? { ...item, [name]: parseInt(value) } : item
      )
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.post('http://localhost:3001/api/orders', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Order created:', response.data);
      // Optionally, redirect the user to a success page or display a success message

      await axios.delete('http://localhost:3001/api/cart/clear', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

    } catch (error) {
      console.error('Error creating order:', error);
      // Display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render ticket selection inputs */}
      {ticketOptions.map(ticket => (
        <div key={ticket._id}>
          <label>
            {ticket.name} - Price: {ticket.price}
            <input
              type="number"
              name="quantity"
              min="0"
              value={formData.ticketItems.find(item => item.ticketId === ticket._id)?.quantity || 0}
              onChange={e => handleInputChange(e, ticket._id)}
            />
          </label>
        </div>
      ))}
      <button type="submit">Create Order</button>
    </form>
  );
};

export default CreateOrderForm;
