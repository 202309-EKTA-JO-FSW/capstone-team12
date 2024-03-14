'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Cart from '../components/Cart';
import ClearCartButton from '../components/ClearCart';
import CreateOrderForm from '../components/CreatOrder';
import RemoveFromCartButton from '../components/RemoveFromCart';
import Link from 'next/link';


const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:3001/api/cart', {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching user cart:', error);
      }
    };

    fetchCart();
  }, []);
  
  const handleClearCart = async () => {
    // Refresh the cart after clearing cart
    await fetchCart();
  };

//   return (
//     <div>
//       <h1>Cart</h1>
//       {cart ? <Cart cart={cart} />
//        : <p>Loading...</p>}
//     </div>
//   );
// };
return (
  <div className="bg-light d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
    <div className="container p-5 rounded shadow-lg">
      <h1 className="text-center mb-4">Cart</h1>
      {cart ? (
        <>
          <div className="mb-3">
            <h2>Cart Items</h2>
            <ul className="list-group">
              {/* Map over cart items and display each item */}
              {cart.items.map((item, index) => (
                <li key={index} className={`list-group-item`}>
                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Event:</strong><Link href={`/event/${item.ticket.eventId}`}>Details</Link></p>
                      <p><strong>Ticket ID:</strong> {item.ticket._id}</p>
                      <p><strong>Quantity:</strong> {item.quantity}</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Ticket Price:</strong> {item.ticket.price}</p>
                      <p><strong>Total Price:</strong> {item.ticket.price * item.quantity}</p>
                      <p><strong>Ticket Type:</strong> {item.ticket.ticketType}</p>
                      <RemoveFromCartButton ticketId={item.ticket._id}/>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ClearCartButton 
            onSuccess={() => setCart(null)} 
            onError={() => alert('Failed to clear cart')} 
          />
        </>
      ) : (
        <p className="text-center">Cart Is Empty</p>
      )}
      <CreateOrderForm cart={cart}/>
    </div>
  </div>
);
};

export default CartPage;
