import React from 'react';
import axios from 'axios';

const RemoveFromCartButton = ({ ticketId }) => {
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

  return (
    <button onClick={removeFromCart} className="btn btn-danger">
      Remove from Cart
    </button>
  );
};

export default RemoveFromCartButton;
