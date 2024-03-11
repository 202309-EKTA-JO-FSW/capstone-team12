import React, { useState } from 'react';
import axios from 'axios';

const Order = ({ order, onDelete }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      await axios.delete(`http://localhost:3001/api/orders/${order._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      onDelete(order._id); // Update UI by removing the deleted order
    } catch (error) {
      console.error('Error deleting order:', error);
      
    }
  };

  return (
    <div>
      <p>Order ID: {order._id}</p>
      <p>Total Price: {order.totalPrice}</p>
      <button onClick={handleDelete}>Delete Order</button>
    </div>
  );
};

const UserOrders = () => {
  const [userOrders, setUserOrders] = useState([]);

  const handleDeleteOrder = orderId => {
    setUserOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
  };

  // Fetch user orders and store them in userOrders state

  return (
    <div>
      <h2>Your Orders</h2>
      {userOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {userOrders.map(order => (
            <li key={order._id}>
              <Order order={order} onDelete={handleDeleteOrder} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserOrders;
