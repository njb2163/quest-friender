import './App.css';
import './QuestDetails.css';
import { useState } from 'react';

function QuestDetails() {
    const [showHint, setShowHint] = useState(false);

    return (
        <div className="quest-details-overlap">
            <div className="quest-details-container">
                <img
                    className="quest-details-icon"
                    src={require("./images/quest1.png")}
                    alt="Quest compass"
                />
                <div className="quest-details-card">
                    <h2 className="quest-details-title">Title Quest</h2>
                    <p className="quest-details-description">
                        The following questions will pertain to your background. 
                        This will help us understand who you are and where you came from.
                    </p>
                    <div className="quest-details-button-group">
                        <button className="quest-details-icon-button">
                            <img src={require("./images/camera.png")} alt="Camera" />
                        </button>
                        <button 
                            className="quest-details-icon-button"
                            onClick={() => setShowHint(true)}
                        >
                            <img src={require("./images/lightbulb.png")} alt="Lightbulb" />
                        </button>
                    </div>
                </div>
                
                {showHint && (
                    <div className="quest-details-hint-overlay" onClick={() => setShowHint(false)}>
                        <div className="quest-details-hint-card" onClick={(e) => e.stopPropagation()}>
                            <h3 className="quest-details-hint-title">Hint!</h3>
                            <p className="quest-details-hint-text">
                                This is a hint, it will help you complete the quest!
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuestDetails;