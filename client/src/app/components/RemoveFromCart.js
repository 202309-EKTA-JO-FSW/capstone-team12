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
    <div className="col-sm-3 text-lg-end">
    <i onClick={removeFromCart} className="btn  fas fa-trash"  style={{color: "#f60404"}}></i>
</div>
   
  );
  
};

export default RemoveFromCartButton;
