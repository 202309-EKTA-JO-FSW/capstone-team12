// import React, { useState } from 'react';
// import bcrypt from 'bcryptjs';
// import axios from 'axios';

// const ChangePasswordComponent = ({userId}) => {
//   const [password, setPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const token = localStorage.getItem('token');

//   const handleChangePassword = async () => {
//     if (!password || !newPassword || !confirmPassword) {
//       setErrorMessage('Please fill in all fields.');
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setErrorMessage('New password and confirm password do not match.');
//       return;
//     }

//     try {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(newPassword, salt);
      
//       const response = await axios.put(`http://localhost:3001/api/users/edit-profile/${userId._id}`, {
//         currentPassword: password,
//         newPassword: hashedPassword,
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}` // Adding the token to the header
//         }
//       });

//       setErrorMessage('');
//       setPassword('');
//       setNewPassword('');
//       setConfirmPassword('');
//     } catch (error) {
//       console.error('Error occurred:', error);
//       setErrorMessage('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Change Password</h2>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <div>
//         <label>Current Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <div>
//         <label>New Password:</label>
//         <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
//       </div>
//       <div>
//         <label>Confirm New Password:</label>
//         <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//       </div>
//       <button onClick={handleChangePassword}>Change Password</button>
//     </div>
//   );
// };

// export default ChangePasswordComponent;
