import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const DeleteAccountButton = ({ onSuccess }) => {
  const router = useRouter()
  
  const handleDeleteAccount = async () => { 

    const confirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");

    // If user confirms deletion, proceed with deletion
    if (confirmed) {
      try {
        // Make a DELETE request to delete user account
        await axios.delete(`http://localhost:3001/api/users/delete-account/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        localStorage.removeItem('token');

        // Call onSuccess callback to notify parent component
        onSuccess();

        router.push('/')
      } catch (error) {
        console.error('Error deleting account:', error);
        // Handle error deleting account
      }
    }
  };

  return (
    <button onClick={handleDeleteAccount}>Delete Account</button>
  );
};

export default DeleteAccountButton;
