// "use client";

// import React, { useEffect, useState } from 'react';
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'

// const MyProfile = () => {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         // Check if the user is authenticated
//         const token = localStorage.getItem('token');
//         if (!token) {
//           // If not authenticated, redirect to login page
//           router.push('http://localhost:3001/login');
//           return;
//         }

//         // Fetch user profile if authenticated
//         const response = await fetch('http://localhost:3001/api/users/my-profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           // Handle error (e.g., redirect to login page)
//           router.push('http://localhost:3001/login');
//           return;
//         }

//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//         // Handle error (e.g., redirect to login page)
//         router.push('/login');
//       }
//     };

//     fetchUserProfile();
//   }, [router]);

//   return (
//     <div>
//       <h1>My Profile</h1>
//       {user && (
//         <div>
//           <p>Name: {user.Name}</p>
//           <p>Email: {user.Email}</p>
//           <p>Nationality: {user.Nationality}</p>
//           <p>Date of Birth: {user.DateOfBirth}</p>
//           <p>Location: {user.Location}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyProfile;
