"use client";

import React from 'react';

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <input
        name="name"
        value={personalInfo.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="contact"
        value={personalInfo.contact}
        onChange={handleChange}
        placeholder="Contact"
      />
      <input
        name="email"
        value={personalInfo.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </div>
  );
};

export default PersonalInfo;
