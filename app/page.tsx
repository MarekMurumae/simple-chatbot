'use client';

import { useState, useEffect } from 'react';
import { useChat } from 'ai/react';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

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

            {messages.map(m => (
                <div key={m.id} className="whitespace-pre-wrap">
                    {m.role === 'user' ? 'User: ' : 'AI: '}
                    {m.content}
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <input
                    className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}
