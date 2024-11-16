'use client';

import React, { useState } from 'react';

export interface ExperienceItem {
  jobTitle: string;
  company: string;
  description: string;
  duration: string;
}
interface ExperienceProps {
  experience: ExperienceItem[];
  setExperience: React.Dispatch<React.SetStateAction<ExperienceItem[]>>;
}

const Experience: React.FC<ExperienceProps> = ({ experience, setExperience }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');

  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      { jobTitle, company, description, duration },
    ]);
    setJobTitle('');
    setCompany('');
    setDescription('');
    setDuration('');
  };

  return (
    <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Work Experience</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="w-full p-3 mb-4 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full p-3 mb-4 border rounded-lg"
      />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 mb-4 border rounded-lg"
      ></textarea>
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="w-full p-3 mb-4 border rounded-lg"
      />
      <button
        onClick={addExperience}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Add Experience
      </button>
      <ul className="mt-4">
        {experience.map((exp, index) => (
          <li key={index}>
            <strong>{exp.jobTitle}</strong> at {exp.company} ({exp.duration}): {exp.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;


