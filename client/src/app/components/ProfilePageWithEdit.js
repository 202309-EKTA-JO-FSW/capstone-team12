// "use client"

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import ProfilePage from './ProfilePage'; // Importing ProfilePage component
// // import EditProfileForm from './[EditProfileForm]'; // Importing EditProfileForm component

// // const ProfilePageWithEdit = () => {
// //   // State variable to track whether to show edit mode
// //   const [editMode, setEditMode] = useState(false);

// //   // Function to toggle edit mode
// //   const toggleEditMode = () => {
// //     setEditMode(!editMode); // Toggle edit mode value
// //   };

// //   // Callback function to handle successful profile update
// //   const handleProfileUpdate = async () => {
// //     try {
// //       // Make a GET request to fetch the updated profile data
// //       const response = await axios.get('/api/users/my-profile', {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem('token')}`,
// //         },
// //       });
  
// //       // Assuming the response.data contains the updated profile data
// //       const updatedProfileData = response.data;
  
// //       // Update the profile data state in the parent component (ProfilePageWithEdit)
// //       // You can pass updatedProfileData to ProfilePage or use a state management solution like Redux
// //       // For simplicity, let's assume updating the profile data in the parent component directly
// //       setProfileData(updatedProfileData);
  
// //       // Toggle back to view mode after successful update
// //       setEditMode(false);
// //     } catch (error) {
// //       console.error('Error fetching updated profile data:', error);
// //       // Handle error fetching updated profile data
// //     }
// //   };

// //   return (
// //     <div>
// //       {/* Conditional rendering based on editMode */}
// //       {!editMode ? (
// //         // Display ProfilePage when not in edit mode
// //         <>
// //           <ProfilePage />
// //           <button onClick={toggleEditMode}>Edit Profile</button>
// //         </>
// //       ) : (
// //         // Display EditProfileForm when in edit mode
// //         <>
// //           <EditProfileForm profileData={profileData} onSuccess={handleProfileUpdate} />
// //           <button onClick={toggleEditMode}>Cancel</button>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProfilePageWithEdit;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProfilePage from './ProfilePage'; // Importing ProfilePage component
// import EditProfileForm from './[EditProfileForm]'; // Importing EditProfileForm component

// const ProfilePageWithEdit = () => {
//   // State variable to track whether to show edit mode
//   const [editMode, setEditMode] = useState(false);
//   // State variable to hold profile data
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     // Fetch initial profile data when component mounts
//     fetchProfileData();
//   }, []);

//   // Function to fetch profile data
//   const fetchProfileData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/api/users/my-profile', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Fetching the token from localStorage and adding it to the Authorization header
//         },
//       });
//       // Update profile data state
//       setProfileData(response.data); // Setting the fetched profile data to the profileData state
//     } catch (error) {
//       console.error('Error fetching profile data:', error); // Logging error if there is any while fetching profile data
//     }
//   };

//   // Function to toggle edit mode
//   const toggleEditMode = () => {
//     setEditMode(!editMode); // Toggling the editMode state variable
//   };

//   // Callback function to handle successful profile update
//   const handleProfileUpdate = async () => {
//     try {
//       // Make a GET request to fetch the updated profile data
//       const response = await axios.get('http://localhost:3001/api/users/my-profile', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Fetching the token from localStorage and adding it to the Authorization header
//         },
//       });

//       // Assuming the response.data contains the updated profile data
//       const updatedProfileData = response.data; // Assigning the updated profile data received from the server to updatedProfileData

//       // Update the profile data state
//       setProfileData(updatedProfileData); // Setting the updated profile data to the profileData state

//       // Toggle back to view mode after successful update
//       setEditMode(false); // Toggling back to view mode after successful update
//     } catch (error) {
//       console.error('Error fetching updated profile data:', error); // Logging error if there is any while fetching updated profile data
//       // Handle error fetching updated profile data
//     }
//   };

//   return (
//     <div>
//       {/* Conditional rendering based on editMode */}
//       {!editMode ? (
//         // Display ProfilePage when not in edit mode
//         <>
//           {profileData && <ProfilePage profileData={profileData} />} {/* Rendering ProfilePage component passing profileData as prop */}
//           <button onClick={toggleEditMode}>Edit Profile</button> {/* Button to toggle edit mode */}
//         </>
//       ) : (
//         // Display EditProfileForm when in edit mode
//         <>
//           <EditProfileForm profileData={profileData} onSuccess={handleProfileUpdate} /> {/* Rendering EditProfileForm component passing profileData and handleProfileUpdate as props */}
//           <button onClick={toggleEditMode}>Cancel</button> {/* Button to cancel editing */}
//         </>
//       )}
//     </div>
//   );
// };

// export default ProfilePageWithEdit;

