"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faBriefcase, faCog, faFileDownload } from '@fortawesome/free-solid-svg-icons';

type IconsBarProps = {
  onSelectSection: (section: string) => void;
};

const IconsBar: React.FC<IconsBarProps> = ({ onSelectSection }) => (
  <div className="flex space-x-6 mb-10 p-4 bg-white rounded-full shadow-md">
    <button
      onClick={() => onSelectSection("personal-info")}
      className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform hover:bg-blue-600"
    >
      <FontAwesomeIcon icon={faUser} className="text-2xl" />
    </button>
    <button
      onClick={() => onSelectSection("education")}
      className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform hover:bg-blue-600"
    >
      <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
    </button>
    <button
      onClick={() => onSelectSection("work-experience")}
      className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform hover:bg-blue-600"
    >
      <FontAwesomeIcon icon={faBriefcase} className="text-2xl" />
    </button>
    <button
      onClick={() => onSelectSection("skills")}
      className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform hover:bg-blue-600"
    >
      <FontAwesomeIcon icon={faCog} className="text-2xl" />
    </button>
    <button
      onClick={() => onSelectSection("download")}
      className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform hover:bg-blue-600"
    >
      <FontAwesomeIcon icon={faFileDownload} className="text-2xl" />
    </button>
  </div>
);

export default IconsBar;
