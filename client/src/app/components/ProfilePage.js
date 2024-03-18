"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  
  const [profileData, setProfileData] = useState(null);
  
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState('');

  
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        
        const response = await axios.get('http://localhost:3001/api/users/my-profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        
        setError('Failed to fetch user profile');
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    console.log("Profile Data:", profileData);
    if (profileData && profileData.DateOfBirth) {
      const dateOfBirth = profileData.DateOfBirth.slice(0, 10);
      console.log("Parsed Date:", dateOfBirth);
    }
  }, [profileData])
  
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  
  return (
    <div>
      <h2>Profile</h2>
      {profileData && (
        <div>
          <p>Name: {profileData.Name}</p>
          <p>Email: {profileData.Email}</p>
          <p>Location: {profileData.Location || 'Not specified'}</p>
          <p>Nationality: {profileData.Nationality || 'Not specified'}</p>
          <p>Date of Birth: {profileData && profileData.DateOfBirth ? new Date(profileData.DateOfBirth).toLocaleDateString('en-US') : 'Not specified'}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
