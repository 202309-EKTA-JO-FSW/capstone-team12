import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';


const AddToCartButton = ({ ticketId ='65ef913a6e8ce92f910409bc'}) => {
  const [quantity, setQuantity] = useState(1);
  
  

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value)); // Update quantity when input changes
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
      />
     <Link href={'/cart'}> <button type='button' class="btn btn-outline-success" onClick={addToCart}>Add to Cart</button></Link>
    </div>
  );
};

export default AddToCartButton;
