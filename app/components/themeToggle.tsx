import React from 'react';

interface ThemeToggleProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className={`p-2 mb-8 border border-gray-300 rounded shadow-xl`}
        >
            {theme === 'light' ? 'Change to Dark Mode' : 'Change to Light Mode'}
        </button>
    );
};

export default ThemeToggle;
