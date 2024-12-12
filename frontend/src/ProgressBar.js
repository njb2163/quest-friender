import './App';
import './ProfileSection.css';

function ProgressBar({questionCompleteness}) { 

    return (
        <div className="progress-bar">
            {questionCompleteness.map((isComplete, index) => (
              <div key = {index} className= {isComplete ? "completed-progress-bar" : "uncompleted-progress-bar"}></div>
            ))}
        </div>
    )
}

export default ProgressBar;