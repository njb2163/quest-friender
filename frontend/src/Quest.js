import './Quests.css';
import React from 'react';

function Quest() {
    return (
        <div className="quest-container">
                <img
                    className="quest-image"
                    src="https://via.placeholder.com/63x63"
                />
                <div
                    className="quest-card"
                >
                    <div className="quest-title">Jungle Bonanza!</div>
                    <div className="quest-time">Tomorrow at 6:00 PM</div>
                    <div className="quest-details">with Bob and 2 others</div>
                </div>
        </div>
    );
}

export default Quest;
