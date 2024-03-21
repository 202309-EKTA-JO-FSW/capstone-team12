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

  const formatDate = (dateString) => {
    return dateString ? new Date(dateString).toLocaleDateString('en-US') : 'Not specified';
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h2 className="profile-heading">Profile</h2>
        {loading && <div className="loading-text">Loading...</div>}
        {error && <div className="error-text">{error}</div>}
        {profileData && (
          <div className="profile-details">
            <div className="profile-item">
              <span className="profile-label">Name:</span>
              <span className="profile-value">{profileData.Name}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Email:</span>
              <span className="profile-value">{profileData.Email}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Location:</span>
              <span className="profile-value">{profileData.Location || 'Not specified'}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Nationality:</span>
              <span className="profile-value">{profileData.Nationality || 'Not specified'}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Date of Birth:</span>
              <span className="profile-value">{formatDate(profileData.DateOfBirth)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
