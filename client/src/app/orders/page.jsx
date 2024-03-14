'use client'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DeleteOrderButton from '../components/DeleteOrder';

// const UserOrders = () => {
//   const [userOrders, setUserOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserOrders = async () => {
//       try {
//         const token = localStorage.getItem('token'); 
//         const response = await axios.get('http://localhost:3001/api/orders', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setUserOrders(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching user orders:', error);
//         // Handle error, e.g., show error message
//       }
//     };

//     fetchUserOrders();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>Your Orders</h2>
//       {/* {userOrders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : ( */}
//         <ul>
//           {userOrders.map(order => (
//             <li key={order._id}>
//               {/* Display order details */}
//               <p>Order ID: {order._id}</p>
//               <p>Total Price: {order.totalPrice}</p>
//               <DeleteOrderButton orderId={order._id}/>
//               {/* Add more order details as needed */}
//             </li>
//           ))}
//         </ul>
      
//     </div>
//   );
// };

// export default UserOrders;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteOrderButton from '../components/DeleteOrder';

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
        
      }
    };

    fetchUserOrders();
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
                  <p className="mb-1"><strong>Ticket ID:</strong> {order.ticketItems.map(t => t.ticketId)}</p>
                  <p className="mb-1"><strong>Quantity:</strong> {order.ticketItems.map(t => t.quantity)}</p>
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

