import React from 'react';
import { Link } from 'react-router-dom';
import './Quests.css';

function Quests({ quests }) {
    // Add null check for quests
    if (!quests || typeof quests !== 'object') {
        return <div>Loading quests...</div>;
    }

    const active_quests = quests.active_quests || [];
    const pending_quests = quests.pending_quests || [];

    const renderQuestCard = (quest, type) => {
        if (!quest) return null;
        
        return (
            <Link 
                to={`/questDetails/${quest.title}`}
                state={{ title: quest.title, description: quest.description, hint: quest.hint, image: quest.image }}
                className={`quest-card card-${type}`}
            >
                <img 
                    className="quest-avatar" 
                    src={require(`${quest.image}`)} 
                    alt={`${type} Avatar`} 
                />
                <div className="quest-info">
                    <div className="quest-title">{quest.title}!</div>
                    <div className="quest-time">{quest.time}</div>
                    <div className="quest-participants">
                        {quest.participants}
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <div className="quests-container">
            {Array.isArray(pending_quests) && pending_quests.length > 0 && (
                <div className="quest-section">
                    <div className="section-header">
                        <div className="label">Discover</div>
                        <div className="section-line"></div>
                    </div>
                    <div className="quests-list">
                        {pending_quests.map((quest, index) => (
                            <div key={`pending-${index}`}>
                                {renderQuestCard(quest, 'pending')}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {Array.isArray(active_quests) && active_quests.length > 0 && (
                <div className="quest-section">
                    <div className="section-header">
                        <div className="label">Joined</div>
                        <div className="section-line"></div>
                    </div>
                    <div className="quests-list">
                        {active_quests.map((quest, index) => (
                            <div key={`active-${index}`}>
                                {renderQuestCard(quest, 'active')}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quests;