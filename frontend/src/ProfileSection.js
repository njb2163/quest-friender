import './App';
import './ProfileSection.css';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import QuestionOption from './QuestionOption';
import ProgressBar from './ProgressBar'

function ProfileSection({questionData}) {
    const { profileSectionName } = useParams();

    const sectionData = questionData.find(item => item.category === profileSectionName);

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(sectionData.questions[index].question_content);
    let [completedQuestions, setCompletedQuestions] = useState([true, false, false, false, false])
    let [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    function handleNextClick() {
        if (index >= 4) {
            navigate('/profile'); 
        }
        else {
            setIndex(prevIndex => prevIndex + 1); 
            setQuestion(sectionData.questions[index + 1].question_content);
            
            const newCompletedQuestions = [...completedQuestions];
            newCompletedQuestions[index + 1] = true;
            setCompletedQuestions(newCompletedQuestions);
        }
    }

    function handlePrevClick() {
        if (index === 0) {
            navigate(`/profile/${profileSectionName}`); 
        }
        else {
            setIndex(prevIndex => prevIndex - 1); 
            setQuestion(sectionData.questions[index - 1].question_content);
            
            const newCompletedQuestions = [...completedQuestions];
            newCompletedQuestions[index] = false;
            setCompletedQuestions(newCompletedQuestions);
        }
    }

    function handleOptionClick(option) {
        setSelectedOption(option);
    }

    return (
        <div className="profile">
            <div className="phone-screen-div">
                <div className="question-block">

                    <div className="question">{question}</div> 
        
                    <div className="question-response-options">
                        { sectionData.questions[index].multiple_choice === true ? (
                            sectionData.questions[index].options.map((option, index) => (
                                <QuestionOption key = {index} option = {option} isSelected = {option === selectedOption} onClick = {handleOptionClick}/>
                            ))
                        ) : (
                            <div class="open-question">
                                <div class="open-question-box">
                                    <input type="text" class="open-question-wrapper" placeholder="Enter response here..." />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="progress-bar-container">

                        <ProgressBar questionCompleteness = {completedQuestions}></ProgressBar>

                        <div className="exit-button">
                            <Link to="/profile">
                                <img className="x-symbol" src={require(`./${"images/Close.svg"}`).default} />
                            </Link>
                        </div>
                    </div>

                    <div className="next-prev-buttons">
                            <button className="prev-button" onClick = {() => handlePrevClick()}>Previous</button>
                            <button className="next-button" onClick = {() => handleNextClick()}>Next</button> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileSection;