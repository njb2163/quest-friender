import './App';
import './ProfileSection.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

function ProfileSection() {
    const { profileSectionName } = useParams();
    // after this, find the information for profileSectionName and pass onto components

    return (
        <div className="profile">
            <div className="phone-screen-div">
                <div className="question-block">
                    <div className="question">How many siblings did you have growing up?</div>
                    <div className="next-prev-buttons">
                            <button className="prev-button">Previous</button>
                            <button className="next-button">Next</button>
                    </div>
                    <div className="question-response-options">
                        <div className="response-button">
                            <div className="response-content">
                                <div className="response-text-wrapper">0</div>
                            </div>
                        </div>
                        <div className="response-button">
                            <div className="response-content">
                                <div className="response-text-wrapper">1</div>
                            </div>
                        </div>
                        <div className="response-button">
                            <div className="response-content">
                                <div className="response-text-wrapper">2</div>
                            </div>
                        </div>
                        <div className="response-button">
                            <div className="response-content">
                                <div className="response-text-wrapper">3</div>
                            </div>
                        </div>
                        <div className="response-button">
                            <div className="response-content">
                                <div className="response-text-wrapper">4+</div>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="completed-progress-bar"></div>
                            <div className="uncompleted-progress-bar"></div>
                            <div className="uncompleted-progress-bar"></div>
                            <div className="uncompleted-progress-bar"></div>
                            <div className="uncompleted-progress-bar"></div>
                        </div>
                        <div className="exit-button">
                            <Link to="/profile">
                                <img className="x-symbol" src={require(`./${"images/Close.svg"}`).default} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection;