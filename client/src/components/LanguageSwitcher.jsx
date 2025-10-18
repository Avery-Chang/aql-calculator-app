import React from 'react';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  const languages = [
    { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { code: 'en', label: 'English', flag: '🇺🇸' }
  ];

  return (
    <div className="relative inline-block">
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
        <Globe className="w-4 h-4 text-gray-600" />
        <select
          value={currentLang}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="bg-transparent border-none outline-none cursor-pointer text-sm font-medium text-gray-700"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

