import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:3001/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user orders:', error);
        // Handle error, e.g., show error message
      }
    };

    fetchUserOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Your Orders</h2>
      {/* {userOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : ( */}
        <ul>
          {userOrders.map(order => (
            <li key={order._id}>
              {/* Display order details */}
              <p>Order ID: {order._id}</p>
              <p>Total Price: {order.totalPrice}</p>
              {/* Add more order details as needed */}
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default UserOrders;
