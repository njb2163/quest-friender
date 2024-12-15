import './App.css';
import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function QuestDetails({ setQuests }) {
    const [showHint, setShowHint] = useState(false);
    const { title } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { description, hint, image } = location.state || {};


    const handleJoinQuest = async () => {
        try {
            const response = await fetch(`/api/quests/join/${title}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to join quest');
            }
            const data = await response.json();
            setQuests(data);
            navigate('/quests');
        } catch (error) {
            console.error('Error joining quest:', error);
        }
    };

    return (
        <div className="quest-details-overlap">
            <div className="quest-details-container">
                <img
                    className="quest-details-icon"
                    src={require(`${image}`)}
                    alt="Quest compass"
                />
                <div className="quest-details-card">
                    <h2 className="quest-details-title">{title}</h2>
                    <p className="quest-details-description">
                        {description}
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
                <button 
                className="join-button"
                onClick={handleJoinQuest}
            >
                Join
            </button>
                
                {showHint && (
                    <div className="quest-details-hint-overlay" onClick={() => setShowHint(false)}>
                        <div className="quest-details-hint-card" onClick={(e) => e.stopPropagation()}>
                            <h3 className="quest-details-hint-title">Hint!</h3>
                            <p className="quest-details-hint-text">
                                {hint}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuestDetails;