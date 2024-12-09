
import './Messages.css'
import { useState } from 'react';

function Message({ name, image, lastChat, timestamp }) {

    return (
        <section>
            <div className="chat-container">
                <div className="profile-image">
                    <img src={require(`./${image}`)} />
                </div>
                <div className="chat-details">
                    <div className="chat-name">{name}</div>
                    <div className="chat-message">{lastChat}</div>
                </div>
                <div className="chat-timestamp">
                    <div className="timestamp">{timestamp}</div>
                    <div className="unread-indicator"></div>
                </div>
            </div>
            <div className="divider"></div>
        </section>
    );
}

export default Message;