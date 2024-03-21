'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteOrderButton from '../components/DeleteOrder';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UserOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
      }
    };

    fetchUserOrders();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login');
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Orders</h2>
      {userOrders.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          No orders found.
        </div>
      ) : (
        <ul className="list-group">
          {userOrders.map(order => (
            <li key={order._id} className="list-group-item mb-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-1"><strong>Order ID:</strong> {order._id}</p>
                  <p className="mb-1"><strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}</p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1"><strong>Ticket IDs:</strong></p>
                  <ul>
                    {order.ticketItems.map((ticket, index) => (
                      <li key={index}>
                        <strong>Ticket ID:</strong> {ticket.ticketId}, <strong>Quantity:</strong> {ticket.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <DeleteOrderButton orderId={order._id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserOrders;


