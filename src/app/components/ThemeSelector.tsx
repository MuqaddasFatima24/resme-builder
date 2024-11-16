'use client'

import React from 'react';

const ThemeSelector = ({ setTheme }) => {
  const themes = [
    { name: 'Default', value: 'theme-default' },
    { name: 'Modern', value: 'theme-modern' },
    { name: 'Classic', value: 'theme-classic' },
  ];

  return (
    <div className="flex space-x-4 mt-4">
      {themes.map((theme) => (
        <button
          key={theme.value}
          onClick={() => setTheme(theme.value)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
