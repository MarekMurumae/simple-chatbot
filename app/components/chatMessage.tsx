import React from 'react';

interface ChatMessageProps {
    role: string;
    content: string;
    aiProfilePic: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, aiProfilePic }) => {
    return (
        <div
            className={`flex ${role === 'user' ? 'justify-end' : 'justify-start items-start space-x-2'}`}
        >
            {role === 'assistant' && (
                <img
                    src={aiProfilePic}
                    alt="AI Profile Picture"
                    className="w-8 h-8 rounded-full"
                />
            )}
            <div
                className={`max-w-xs p-2 rounded shadow-xl ${role === 'user' ? 'bg-gray-500 text-white' : 'bg-gray-300 text-black'} ${role === 'assistant' ? 'ml-2' : ''}`}
            >
                {content}
            </div>
        </div>
    );
};

export default ChatMessage;
