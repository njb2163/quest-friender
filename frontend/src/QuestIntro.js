import './QuestIntro.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function QuestIntro() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const steps = [
        {
            title: 'Profile Results',
            description: 'Based on your profile background we\'ve curated a list of quests based on your interests.',
            buttonText: 'Next'
        },
        {
            title: 'Quest Matching',
            description: 'Once you join a quest, you and your closest matches will work together to complete it.',
            buttonText: 'Begin'
        }
    ];

    const handleNext = () => {
        if (currentStep === 2) {
            navigate('/quests');
            return;
        }

        setIsAnimating(true);
        
        setTimeout(() => {
            setCurrentStep(2);
            setIsAnimating(false);
        }, 500); 
    };

    const currentContent = steps[currentStep - 1];
    
    return (
        <div className="quest-intro-container">
            <div className={`quest-intro-card ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                <h2 className="quest-intro-title">
                    {currentContent.title}
                </h2>
                <p className="quest-intro-description">
                    {currentContent.description}
                </p>
                <button className="quest-intro-button" onClick={handleNext}>
                    <span>{currentContent.buttonText}</span>
                </button>
            </div>
        </div>
    );
}

export default QuestIntro;