import React from 'react';
import axios from 'axios';

const DeleteOrderButton = ({ orderId }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');

      // Send DELETE request to delete order
      const response = await axios.delete(
        `http://localhost:3001/api/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log(response.data); 
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete Order</button>
  );
};

export default DeleteOrderButton;

