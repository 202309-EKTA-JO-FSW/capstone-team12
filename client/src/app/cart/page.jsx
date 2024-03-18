'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../components/Cart';
import ClearCartButton from '../components/ClearCart';
import CreateOrderForm from '../components/CreatOrder';
import RemoveFromCartButton from '../components/RemoveFromCart';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/cart', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching user cart:', error);
      }
    };

    fetchCart();
  }, []);

  const handleTicketTypeChange = (index, newTicketType) => {
    const updatedCart = { ...cart };
    const item = updatedCart.items[index];

    if (item.ticket.ticketType !== newTicketType) {
      item.ticket.ticketType = newTicketType;
      if (newTicketType === 'VIP') {
        item.ticket.price += 20; // Add $20 to the price for VIP ticket
      } else {
        item.ticket.price -= 20; // Subtract $20 from the price for Normal ticket
      }
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login');
    }
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Cart</h1>
      <div className="row">
        <div className="col-md-8">
          {cart ? (
            <div className="mb-3">
              <h2>Cart Items</h2>
              <ul className="list-group">
                {cart.items.map((item, index) => (
                  <li key={index} className="list-group-item">
                    <div className="row">
                      <div className="col-md-6">
                        <p><strong>Event:</strong> <Link href={`/event/${item.ticket.eventId}`}>Details</Link></p>
                        <p><strong>Quantity:</strong> {item.quantity}</p>
                      </div>
                      <div className="col-md-6">
                        <p><strong>Ticket Price:</strong> ${item.ticket.price.toFixed(2)}</p>
                        <p><strong>Total Price:</strong> ${(item.ticket.price * item.quantity).toFixed(2)}</p>
                        <p><strong>Ticket Type:</strong> {item.ticket.ticketType}</p>
                        <select
                          value={item.ticket.ticketType}
                          onChange={(e) => handleTicketTypeChange(index, e.target.value)}
                          className="form-select"
                          >
                          <option value="Normal">Normal</option>
                          <option value="VIP">VIP</option>
                          </select>

                        <RemoveFromCartButton ticketId={item.ticket._id} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-center">Cart Is Empty</p>
          )}
          <ClearCartButton onSuccess={() => setCart(null)} onError={() => alert('Failed to clear cart')} />
        </div>
        <div className="col-md-4">
          <CreateOrderForm cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

