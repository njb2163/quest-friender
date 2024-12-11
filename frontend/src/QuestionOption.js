import './App';
import './ProfileSection.css';
import React, { useState, useEffect } from 'react';

function QuestionOption({option}) { // multiple_choice: true/false, list of options. return: lisdt of options or text form

    return (
        <div className="response-button">
            <div className="response-content">
                <div className="response-text-wrapper">{option}</div>
            </div>
        </div>
    )
}

export default QuestionOption;