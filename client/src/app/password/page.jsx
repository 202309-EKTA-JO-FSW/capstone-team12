// add that to edit profile 
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ChangePasswordPage = () => {
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId')

    
    try {
      const response = await axios.put(
        `http://localhost:3001/api/users/edit-profile/${userId}`,
        {
          
          password: password,
          
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      alert('Password was changed successfully'); // add a page refresh here
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login'); 
    }
  }, []);
  
  return (
    <div>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <label>New Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
