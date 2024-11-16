'use client';

import React, { useState } from 'react';

// Define and export the Skill interface
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
  const addSkill = (category: string, skillName: string, skillLevel: string) => {
    if (!skillName || !skillLevel) {
      console.error('Skill name and level are required');
      return;
    }

    setSkills((prev) => [
      ...prev,
      { category, name: skillName, level: skillLevel },
    ]);
  };

  return (
    <div className="p-8 mb-8 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg text-center lg:p-12">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-6 lg:text-4xl">Skills</h2>

      {/* Skill Categories */}
      <div className="space-y-8">
        <SkillCategory
          title="Technical Skills"
          placeholder="e.g., JavaScript, Python, SQL, Linux"
          addSkill={addSkill}
          category="Technical"
        />
        <SkillCategory
          title="Language Skills"
          placeholder="e.g., English (Fluent), Spanish (Intermediate)"
          addSkill={addSkill}
          category="Language"
        />
        <SkillCategory
          title="Soft Skills"
          placeholder="e.g., Communication, Leadership, Problem Solving"
          addSkill={addSkill}
          category="Soft"
        />
        <SkillCategory
          title="Creative Skills"
          placeholder="e.g., Graphic Design, Photography, Video Editing"
          addSkill={addSkill}
          category="Creative"
        />
        <SkillCategory
          title="Business Skills"
          placeholder="e.g., Strategic Planning, Marketing, Project Management"
          addSkill={addSkill}
          category="Business"
        />
        <SkillCategory
          title="Tools & Technologies"
          placeholder="e.g., Git, Figma, Google Analytics"
          addSkill={addSkill}
          category="Tools"
        />
        <SkillCategory
          title="Certifications"
          placeholder="e.g., ITIL Foundation Certification, PMP"
          addSkill={addSkill}
          category="Certifications"
          levelOptions={false}
        />
      </div>

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

// SkillCategory Component for Reusable Sections
const SkillCategory = ({
  title,
  placeholder,
  addSkill,
  category,
  levelOptions = true,
}: {
  title: string;
  placeholder: string;
  addSkill: (category: string, skillName: string, skillLevel: string) => void;
  category: string;
  levelOptions?: boolean;
}) => {
  const [skillName, setSkillName] = useState('');
  const [skillLevel, setSkillLevel] = useState('');

  const handleAddSkill = () => {
    addSkill(category, skillName, skillLevel);
    setSkillName('');
    setSkillLevel('');
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-indigo-500 mb-4">{title}</h3>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
        <input
          type="text"
          placeholder={placeholder}
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          className="w-full lg:w-2/3 p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 lg:text-xl"
        />
        {levelOptions && (
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
        )}
      </div>
      <button
        onClick={handleAddSkill}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Add {title}
      </button>
    </div>
  );
};

export default Skills;
