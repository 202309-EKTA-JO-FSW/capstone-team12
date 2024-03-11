// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3001/api/users/login', { email, password });
    
//       if (response.data.token) {
       
//         localStorage.setItem('token', response.data.token);

//         window.location.href = '/'; // redirect to events (remeber to change)
//       } else {
//         setError('Authentication failed: Token not received');
//       }

//       setEmail('');
//       setPassword('');
//       setError('');
//     } catch (error) {
//       console.error('Login error:', error.response.data.message);
//       setError(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
