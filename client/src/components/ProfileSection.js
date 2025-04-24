import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileSection.css";

const ProfileSection = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("profile"); // Clear profile data from local storage
    navigate("/login"); // Redirect to login page
  };

  const profileData = JSON.parse(localStorage.getItem("profile")) || {};

  return (
    <div className="profile-wrapper">
      <div className="profile-section">
        <h2>Profile Information</h2>
        <p><strong>Name:</strong> {profileData.name}</p>
        <p><strong>Age:</strong> {profileData.age}</p>
        <p><strong>Gender:</strong> {profileData.gender}</p>
        <p><strong>Specially Abled:</strong> {profileData.isSpeciallyAbled}</p>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default ProfileSection;
