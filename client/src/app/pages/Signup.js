"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const Signup = () => {
  // State variables for form inputs and error handling
  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [nationality, setNationality] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [error, setError] = useState('');
  const pathname = usePathname()
  const searchParams = useSearchParams()
  

  useEffect(() => {
    const url = `${'/Signup'}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the signup endpoint
      const response = await axios.post('http://localhost:3001/api/users/signup', {
        name,
        email,
        password,
        location,
        nationality,
        dateOfBirth,
      });
      // Extract the token from the response
      const token = response.data.token;
      // Store the token in local storage
      localStorage.setItem('token', token);
      // Redirect to the profile page after successful signup
      router.push('/my-profile');
    } catch (error) {
      // Handle signup error
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Nationality:</label>
          <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
