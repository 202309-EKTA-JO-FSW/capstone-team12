// this goes where we display ticket informations 
// add this to the ticket :
{/* <AddToCartButton 
        ticketId={ticket._id} 
        onSuccess={handleSuccess} 
        onError={handleError} 
      /> */}

import React from 'react';
import axios from 'axios';

const AddToCartButton = ({ ticketId, onSuccess, onError }) => {
  const addToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:3001/api/cart/add',
        { ticketId, quantity: 1 }, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      onSuccess(); 
    } catch (error) {
      console.error('Error adding item to cart:', error);
      onError(); 
    }
  };

  return <button onClick={addToCart}>Add to Cart</button>;
};

export default AddToCartButton;
