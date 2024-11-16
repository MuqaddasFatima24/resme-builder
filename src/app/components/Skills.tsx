'use client';

import React, { useState } from 'react';

// Export the Skill interface for use in other files
export interface Skill {
  category: string;
  name: string;
  level: string;
}

interface SkillsProps {
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
}

const Skills: React.FC<SkillsProps> = ({ skills, setSkills }) => {
  const [skillName, setSkillName] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Technical');

  const addSkill = () => {
    if (!skillName || !skillLevel) {
      console.error('Skill name and level are required');
      return;
    }

    setSkills((prev) => [
      ...prev,
      { category: selectedCategory, name: skillName, level: skillLevel },
    ]);

    setSkillName('');
    setSkillLevel('');
  };

  return (
    <div className="p-8 mb-8 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg text-center lg:p-12">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-6 lg:text-4xl">Skills</h2>

      {/* Category Selection */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Select Skill Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full lg:w-1/3 p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 lg:text-xl"
        >
          <option value="Technical">Technical Skills</option>
          <option value="Soft">Soft Skills</option>
          <option value="Language">Language Skills</option>
        </select>
      </div>

      {/* Skill Input */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
        <input
          type="text"
          placeholder={`Enter ${selectedCategory} Skill`}
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          className="w-full lg:w-2/3 p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 lg:text-xl"
        />
        <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className="w-full lg:w-1/3 p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 lg:text-xl"
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Proficient">Proficient</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      {/* Add Skill Button */}
      <button
        onClick={addSkill}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Add {selectedCategory} Skill
      </button>

      {/* Display Added Skills */}
      <div className="mt-8 text-left">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Your Skills</h3>
        {skills.length > 0 ? (
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className="mb-2">
                <strong>{skill.category}:</strong> {skill.name} -{' '}
                <span className="text-gray-500">{skill.level}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No skills added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Skills;

