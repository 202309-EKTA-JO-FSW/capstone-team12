"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfilePage from './ProfilePage'; 
import EditProfileForm from './[EditProfile]'; 

const ProfilePageWithEdit = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    
    fetchProfileData();
  }, []);

  // Function to fetch profile data
  const fetchProfileData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/users/my-profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      // Update profile data state
      setProfileData(response.data); 
    } catch (error) {
      console.error('Error fetching profile data:', error); 
    }
  };

  
  const toggleEditMode = () => {
    setEditMode(!editMode); 
  };

  
  const handleProfileUpdate = async () => {
    try {
      // Make a GET request to fetch the updated profile data
      const response = await axios.get('http://localhost:3001/api/users/my-profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });

      
      const updatedProfileData = response.data; 

     
      setProfileData(updatedProfileData);

      
      setEditMode(false); 
    } catch (error) {
      console.error('Error fetching updated profile data:', error); 
    }
  };

  return (
    <div>
      {/* Conditional rendering based on editMode */}
      {!editMode ? (
        // Display ProfilePage when not in edit mode
        <>
          {profileData && <ProfilePage profileData={profileData} />} {/* Rendering ProfilePage component passing profileData as prop */}
          <button onClick={toggleEditMode}>Edit Profile</button> {/* Button to toggle edit mode */}
        </>
      ) : (
        // Display EditProfileForm when in edit mode
        <>
          <EditProfileForm profileData={profileData} onSuccess={handleProfileUpdate} /> {/* Rendering EditProfileForm component passing profileData and handleProfileUpdate as props */}
          <button onClick={toggleEditMode}>Cancel</button> {/* Button to cancel editing */}
        </>
      )}
    </div>
  );
};

export default ProfilePageWithEdit;

