// not working 
import React from 'react';
import axios from 'axios';

const RemoveFromCartButton = ({ ticketId, onSuccess, onError }) => {
  const removeFromCart = async () => {
    try {
      const token = localStorage.getItem('token'); 
      await axios.delete(`http://localhost:3001/api/cart/remove/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      onSuccess(); 
    } catch (error) {
      console.error('Error removing item from cart:', error);
      onError(); 
    }
  };

  return <button onClick={removeFromCart}>Remove from Cart</button>;
};

export default RemoveFromCartButton;
