import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';


const AddToCartButton = ({ ticketId }) => {
  const [quantity, setQuantity] = useState(1);
  
  

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value)); 
  };

  const addToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:3001/api/cart/add',
        { ticketId, quantity }, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log('Item added to cart successfully.');
       
    } catch (error) {
      console.error('Error adding item to cart:', error);
      console.log(ticketId);
    }
  };

  


  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        step="1"
        style={{ marginRight: '10px', width: '50px', padding: '5px' }} // Adjust input styling
      />
      <Link href={'/cart'}>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={addToCart}
          style={{ padding: '5px 10px' }} // Adjust button styling
        >
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default AddToCartButton;
