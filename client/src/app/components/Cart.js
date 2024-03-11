// components/Cart.js
import React from 'react';
import RemoveFromCartButton from './[RemoveFromCart]';
import CreateOrderForm from './CreatOrder';


const Cart = ({ cart }) => {

  
  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {/* Map over cart items and display each item */}
        {cart.items.map((item, index) => (
          <li key={index}>
            {/* Display item details */}
            <p>Event ID: {item.ticket.eventId}</p>
            <p>Ticket ID: {item.ticket._id}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Ticket Price: {item.ticket.price}</p>
            <p>Total Price: {item.ticket.price*item.quantity}</p>
            <p>Ticket Type: {item.ticket.ticketType}</p>
            {/* Add more details if needed */}
          </li>
        ))}
        
      </ul>
      
    </div>
    
  );
};

export default Cart;
