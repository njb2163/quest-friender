import './App.css';
import { useState } from 'react';

function Quests() {

    return (
        <div className="quest-details-overlap">
            <div className="quest-details-container">
                <img
                    className="quest-details-icon"
                    src={require("./images/quest1.png")}
                    alt="Quest compass"
                />
                
            </div>
        </div>
    );
}

export default Quests;