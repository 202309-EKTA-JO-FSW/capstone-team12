
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const CreateOrderForm = ({ cart }) => {
  const router = useRouter();
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');

      
      const ticketItems = cart.items.map(item => ({
        ticketId: item.ticket._id,
        quantity: item.quantity
      }));
      
      
      console.log(ticketItems)

      
      const response = await axios.post(
        'http://localhost:3001/api/orders',
        {ticketItems} ,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log('Order created:', response.data);

      
      await axios.delete('http://localhost:3001/api/cart/clear', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      router.refresh()
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <button onClick={handleSubmit}>Place order</button>
  );
};

export default CreateOrderForm;

