'use client';

import React, { ChangeEvent } from 'react';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

interface PersonalInfoProps {
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Personal Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={personalInfo.name}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded-lg"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded-lg"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={personalInfo.phone}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded-lg"
      />
    </div>
  );
};

export default PersonalInfo;
