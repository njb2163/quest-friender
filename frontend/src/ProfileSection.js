import './App';
import './ProfileSection.css';
import $ from 'jquery';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import QuestionOption from './QuestionOption';
import ProgressBar from './ProgressBar';

function ProfileSection({questionData}) {
    const { profileSectionName } = useParams();
    const sectionData = questionData.find(item => item.category === profileSectionName);

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(sectionData.questions[index].question_content);
    const [completedQuestions, setCompletedQuestions] = useState([true, false, false, false, false])
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [currentText, setCurrentText] = useState('');
    const [currentAnswers, setCurrentAnswers] = useState([null, null, null, null, null]);
    
    const navigate = useNavigate();
    
    function saveQuestionResponse() { 
        let dataToSave = {
            "category": profileSectionName,
            "question_index": index,
            "question_response": sectionData.questions[index].multiple_choice 
                                    ? selectedOptionIndex
                                    : currentText  
        }

        $.ajax({
            type: "POST",
            url: "/api/save_question_responses",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(dataToSave),
            success: function(result) {
                console.log("Saved Question Response");
            },
            error: function(request, status, error) {
                console.log("Error saving question response");
                console.log(request);
                console.log(status);
                console.log(error);
            }
        });
    }

    function loadQuestionResponse() { 
        let dataToSend = {
            "category": profileSectionName
        }
        
        $.ajax({
            type: "GET",
            url: "/api/get_question_responses",
            contentType: "application/json; charset=utf-8",
            data: dataToSend,
            success: function(result) {
                console.log("Loaded Question Response");
                let AllData = result["data"];
                setCurrentAnswers(AllData['saved_answers']);
            },
            error: function(request, status, error) {
                console.log("Error saving question response");
                console.log(request);
                console.log(status);
                console.log(error);
            }
        });
    }

    useEffect(() => {
        loadQuestionResponse();
    }, []); 

    useEffect(() => {
        loadQuestionResponse();
    }, [index]); 

    useEffect(() => {
        let answer = currentAnswers[index];

        if (answer !== null && sectionData.questions[index].multiple_choice === true) {
            let selected_answer_index = Number(answer);
            handleOptionClick(sectionData.questions[index].options[selected_answer_index], selected_answer_index);
        } else if (answer !== null && sectionData.questions[index].multiple_choice === false) {
            setCurrentText(answer);
        } else if (answer === null && sectionData.questions[index].multiple_choice === false) {
            setCurrentText('');
        } else {
            setSelectedOption(null);
            setSelectedOptionIndex(null);
        }
    }, [index, currentAnswers]); 

    useEffect(() => {
        if (selectedOption !== null && selectedOptionIndex !== null && currentText !== null) {
          saveQuestionResponse();
        }
      }, [selectedOption, currentText]); 

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

    function handleOptionClick(option, option_index) {
        setSelectedOption(option);
        setSelectedOptionIndex(option_index);
    }
      
    return (
        <div className="profile">
            <div className="phone-screen-div">
                <div className="question-block">
                <div className="question">{question}</div> 
                    <div className="question-response-options">
                        { sectionData.questions[index].multiple_choice === true ? (
                            sectionData.questions[index].options.map((option, index) => (
                                <QuestionOption key = {index} index = {index} option = {option} isSelected = {option === selectedOption} onClick = {handleOptionClick}/>
                            ))
                        ) : (
                            <div className="open-question">
                                <div className="open-question-box">
                                    <input type="text" className="open-question-wrapper" placeholder="Enter response here..." value={currentText} onChange={(e) => {setCurrentText(e.target.value)}} />
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
