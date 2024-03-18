import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CreateOrderForm = ({ cart }) => {
  const router = useRouter();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');

      // Extract ticket items from the cart
      const ticketItems = cart.items.map(item => ({
        ticketId: item.ticket._id,
        quantity: item.quantity
      }));

      // Send a request to create an order
      const response = await axios.post(
        'http://localhost:3001/api/orders',
        { ticketItems },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log('Order created:', response.data);

      // Clear the cart after placing the order
      await axios.delete('http://localhost:3001/api/cart/clear', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Refresh the page to reflect the changes
      router.reload();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <button onClick={handleSubmit} className="btn btn-primary">
      Place Order
    </button>
  );
};

export default CreateOrderForm;
