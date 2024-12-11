import './App';
import './ProfileSection.css';
import React, { useState, useEffect } from 'react';

function ProgressBar({questionCompleteness}) { // multiple_choice: true/false, list of options. return: lisdt of options or text form

    return (
        <div className="progress-bar">
            {questionCompleteness.map((isComplete, index) => (
              <div key = {index} className= {isComplete ? "completed-progress-bar" : "uncompleted-progress-bar"}></div>
            ))}
        </div>
    )
}

export default ProgressBar;

//{questionCompleteness.map((isComplete, index) => (
  //  <div key = {index} className= {isComplete ? "completed-progress-bar" : "uncompleted-progress-bar"}></div>
//))}