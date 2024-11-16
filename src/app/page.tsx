'use client';

import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education, { EducationItem } from './components/Education';
import Experience, { ExperienceItem } from './components/Experience';
import Skills, { Skill } from './components/Skills';
import IconsBar from './components/IconsBar';
import DownloadButton from './components/DownloadButton';

export default function Home() {
  // Define state for each section
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    contact: '',
    email: '',
    phone: '',
  });

  const [education, setEducation] = useState<EducationItem[]>([]);
  const [experience, setExperience] = useState<ExperienceItem[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  const [activeSection, setActiveSection] = useState('personal-info'); // State to handle the active section

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 text-gray-800">
      {/* Header */}
      <header className="w-full p-8 text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md mb-8">
        <h1 className="text-5xl font-bold lg:text-6xl">Resume Builder</h1>
      </header>

      {/* Icons for Navigation */}
      <IconsBar onSelectSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1 p-8 w-full max-w-5xl bg-white shadow-2xl rounded-lg mt-10 mb-12 lg:p-16">
        <div id="resume">
          {activeSection === 'personal-info' && (
            <PersonalInfo
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          )}

          {activeSection === 'education' && (
            <Education education={education} setEducation={setEducation} />
          )}

          {activeSection === 'work-experience' && (
            <Experience experience={experience} setExperience={setExperience} />
          )}

          {activeSection === 'skills' && (
            <Skills skills={skills} setSkills={setSkills} />
          )}
        </div>

        {/* Pass all data to the DownloadButton */}
        <div className="mt-8">
          <DownloadButton
            personalInfo={personalInfo}
            education={education}
            experience={experience}
            skills={skills}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-4 text-center text-gray-500 mt-8">
        © 2024 Resume Builder. Created by Muqaddas Fatima. All rights reserved.
      </footer>
    </div>
  );
}







