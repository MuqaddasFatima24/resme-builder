'use client';

import React from 'react';

interface PersonalInfoProps {
  personalInfo: {
    name: string;
    contact: string;
    email: string;
    phone: string; // Add phone here
  };
  setPersonalInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      contact: string;
      email: string;
      phone: string; // Add phone here
    }>
  >;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <input
        name="name"
        value={personalInfo.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={personalInfo.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="contact"
        value={personalInfo.contact}
        onChange={handleChange}
        placeholder="Contact"
      />
      <input
        name="phone" // Add phone input field
        value={personalInfo.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
    </div>
  );
};

export default PersonalInfo;

