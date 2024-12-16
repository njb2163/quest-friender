import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Start.css';

function Start() {
    const [showButtons, setShowButtons] = useState(false);
    const [hideText, setHideText] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setHideText(true);
            setTimeout(() => setShowButtons(true), 500);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleSignIn = () => {
        navigate('/profile');
    };

    return (
        <div className="welcome">
            <div className="start-container" />
            <div className={`welcome-text ${hideText ? 'fade-out' : ''}`}>
                Quest Friender
            </div>
            <img
                className="quest-logo"
                src={require(`./images/Logo.png`)}
                alt="Quest Logo"
            />
            <div className={`auth-buttons ${showButtons ? 'visible' : ''}`}>
                <button className="auth-button" onClick={handleSignIn}>Sign in</button>
                <button className="auth-button" onClick={handleSignUp}>Sign up</button>
            </div>
        </div>
    );
}

export default Start;