'use client';

import {useState, useEffect, useCallback} from 'react';
import { useChat } from 'ai/react';

const aiProfilePic = '/resources/images/logo.png';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const setInputRef = useCallback((node: HTMLInputElement | null) => {
        if (node) {
            node.focus();
        }
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
            <button
                onClick={toggleTheme}
                className={`p-2 mb-8 border border-gray-300 rounded shadow-xl`}
            >
                {theme === 'light' ? 'Change to Dark Mode' : 'Change to Light Mode'}
            </button>

            <div className="flex flex-col space-y-4">
                {messages.map(m => (
                    <div
                        key={m.id}
                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start items-start space-x-2'}`}
                    >
                        {m.role === 'assistant' && (
                            <img
                                src={aiProfilePic}
                                alt="AI Profile Picture"
                                className="w-8 h-8 rounded-full"
                            />
                        )}
                        <div
                            className={`max-w-xs p-2 rounded shadow-xl ${m.role === 'user' ? 'bg-gray-500 text-white' : 'bg-gray-300 text-black'} ${m.role === 'assistant' ? 'ml-2' : ''}`}
                        >
                            {m.content}
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-md p-2">
                <input
                    ref={setInputRef}
                    className="w-full p-2 border border-gray-300 rounded shadow-xl"
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}
