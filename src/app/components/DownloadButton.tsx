'use client';

import React from 'react';
import { generatePDF } from '../utils/pdfGenerator'; // Ensure the path is correct

interface DownloadButtonProps {
  personalInfo: { name: string; contact: string; email: string };
  education: { degree: string; institution: string; year: string }[];
  experience: { jobTitle: string; company: string; duration: string; description: string }[];
  skills: { category: string; name: string; level: string }[];
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ personalInfo, education, experience, skills }) => {
  const handleDownload = () => {
    generatePDF({ personalInfo, education, experience, skills });
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
    >
      Download Full Resume
    </button>
  );
};

export default DownloadButton;



