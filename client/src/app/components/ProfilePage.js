// "use client"
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProfilePage = () => {
//   // State variable to store user profile data
//   const [profileData, setProfileData] = useState(null);
//   // State variable to store loading state
//   const [loading, setLoading] = useState(true);
//   // State variable to store error message
//   const [error, setError] = useState('');

//   // Fetch user profile data when component mounts
//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         // Make a GET request to fetch user profile data
//         const response = await axios.get('http://localhost:3001/api/users/my-profile', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         // Update profile data state with fetched data
//         setProfileData(response.data);
//         setLoading(false);
//       } catch (error) {
//         // Handle error if any
//         setError('Failed to fetch user profile');
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   // Render loading spinner if data is being fetched
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Render error message if there's an error
//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h2>Profile</h2>
//       {profileData && (
//         <div>
//           <p>Name: {profileData.Name}</p>
//           <p>Email: {profileData.Email}</p>
//           <p>Location: {profileData.Location || 'Not specified'}</p>
//           <p>Nationality: {profileData.Nationality || 'Not specified'}</p>
//           <p>Date of Birth: {profileData.dateofBirth || 'Not specified'}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
