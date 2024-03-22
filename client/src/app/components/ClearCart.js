import React from 'react';
import axios from 'axios';

const ClearCartButton = ({ onSuccess, onError }) => {
  const clearCart = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete('http://localhost:3001/api/cart/clear', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onSuccess();
    } catch (error) {
      console.error('Error clearing cart:', error);
      onError();
    }
  };

  return (
    <button
      onClick={clearCart}
      className="btn btn-danger btn-sm me-2"
    >
      Clear Cart
    </button>
  );
};

export default ClearCartButton;

