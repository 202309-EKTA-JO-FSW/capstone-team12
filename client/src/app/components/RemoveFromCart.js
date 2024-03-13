// not working 
import React from 'react';
import axios from 'axios';

const RemoveFromCartButton = ({ cart }) => {
  const ticketId = cart.items.map(item=>item.ticket._id )
  console.log(ticketId)
  const removeFromCart = async () => {
    try {
      const token = localStorage.getItem('token'); 
      await axios.delete(`http://localhost:3001/api/cart/remove/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
       
    } catch (error) {
      console.error('Error removing item from cart:', error);
      
    }
  };

  return <button onClick={removeFromCart}>Remove from Cart</button>;
};

export default RemoveFromCartButton;
