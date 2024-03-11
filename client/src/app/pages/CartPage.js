// pages/cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Cart from '../components/Cart';
import ClearCartButton from '../components/ClearCart';
import CreateOrderForm from '../components/CreatOrder';


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
  <div>
    <h1>Cart</h1>
    {cart ? (
      <>
        <Cart cart={cart} />
        <p>{console.log(cart)}</p>
        <ClearCartButton onSuccess={() => setCart(null)} onError={() => alert('Failed to clear cart')} />
      </>
    ) : (
      <p>Cart Is Empty</p>
    )}
    <CreateOrderForm cart={cart}/>
  </div>
);
};

export default CartPage;
