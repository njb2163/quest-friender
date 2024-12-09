
import './Messages.css'
import Message from './Message';
import { useState } from 'react';

function Messages({ messages }) {


    return (
        <div className="Chats">
            {messages.length === 0 ? (
                <span className="chat-message">No Messages</span>
            ) : (
                <>
                    {messages.map((message, index) => (
                        <Message key={index} name={message.name} image={message.image} lastChat={message.lastChat} timestamp={message.timestamp} />
                        
                    ))}
                </>
            )}
        </div>
    );
}

export default Messages;