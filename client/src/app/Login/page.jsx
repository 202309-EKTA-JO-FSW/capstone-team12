"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import GoogleSignupButton from '../components/GoogleSignupButton';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/users/login', { email, password });
    
      if (response.data.token) {
       
        localStorage.setItem('token', response.data.token);

        router.push('/profile'); // redirect to events (remeber to change)
      } else {
        setError('Authentication failed: Token not received');
      }

      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      console.error('Login error:', error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {error && <p className="text-danger text-center">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="text-center">
                  <p>Or Login using</p>
                  <GoogleSignupButton/>
                </div>
                <div className="text-center">
                  <p className="mb-0">Don't have an account? <Link href="/signup">Sign Up</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
