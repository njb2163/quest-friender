import './App';
import './ProfileSection.css';

function QuestionOption({option, isSelected, onClick}) { 

    return (
        <div className="response-button">
            <button className={`response-content ${isSelected ? 'selected' : ''}`} onClick = {() => onClick(option)}>
                <div className="response-text-wrapper">{option}</div>
            </button>
        </div>
    )
}

export default QuestionOption;