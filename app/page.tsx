'use client';

import { useState, useEffect, useCallback } from 'react';
import { useChat } from 'ai/react';
import {ChatMessage, ThemeToggle} from './components';

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
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <div className="flex flex-col space-y-4">
                {messages.map(m => (
                    <ChatMessage
                        key={m.id}
                        role={m.role}
                        content={m.content}
                        aiProfilePic={aiProfilePic}
                    />
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
