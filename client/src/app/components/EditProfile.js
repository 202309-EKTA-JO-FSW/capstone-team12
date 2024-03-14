"use client"
import React, { useState } from 'react';
import axios from 'axios';

const EditProfileForm = ({ profileData, onSuccess }) => {
  // State variables for form inputs and error handling
  const [name, setName] = useState(profileData.name);
  const [location, setLocation] = useState(profileData.location || '');
  const [nationality, setNationality] = useState(profileData.nationality || '');
  const [dateOfBirth, setDateOfBirth] = useState(profileData.dateOfBirth || '');
  const [error, setError] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
  
      await axios.put(
        `http://localhost:3001/api/users/edit-profile/${profileData._id}`,
        {
          name,
          location,
          nationality,
          dateOfBirth,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      
      onSuccess();
    } catch (error) {
      
      setError('Failed to update profile');
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfileForm;
