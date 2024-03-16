import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const DeleteOrderButton = ({ orderId }) => {
  const router = useRouter()
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');

      
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

  if (!localStorage.getItem('token')){
    router.push('/PleaseLogin')
   }


  return (
    <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>Delete Order</button>
  );
};

export default DeleteOrderButton;

