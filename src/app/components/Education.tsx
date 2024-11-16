'use client';

import React, { useState } from 'react';

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

interface EducationProps {
  education: EducationItem[];
  setEducation: React.Dispatch<React.SetStateAction<EducationItem[]>>;
}

const Education: React.FC<EducationProps> = ({ education, setEducation }) => {
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [year, setYear] = useState('');

  const addEducation = () => {
    setEducation((prev) => [...prev, { degree, institution, year }]);
    setDegree('');
    setInstitution('');
    setYear('');
  };

  return (
    <div>
      <h2>Education</h2>
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <input
        type="text"
        placeholder="Institution"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={addEducation}>Add Education</button>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>{`${edu.degree} at ${edu.institution} (${edu.year})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Education;









