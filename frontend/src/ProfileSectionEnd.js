import './App';
import './ProfileSection.css';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

function ProfileSectionEnd({questionData}) {
    const { profileSectionName } = useParams();

    const sectionData = questionData.find(item => item.category === profileSectionName);
    const navigate = useNavigate();
    
    function handleMatchClick() {
        navigate(`/questIntro`);
    }

    function handleNextClick() {
        navigate(sectionData.next_category)
    }

    return (
        <div className="profile">
            <div className="phone-screen-div">
                <div className="end-card-block">
                    <div className="end-bottom-group">
                            <div className="end-card-content-block">
                                <div className="end-card-title">
                                    <div className="end-card-title-wrapper">Thank you for completing the {sectionData.category} section!</div>
                                </div>
                                <div className="end-card-blurb">
                                    <p className="end-card-blurb-wrapper"> We will now use this to match you with quest partners. Press the next button to navigate to next section or press match to begin the quest matching process.</p>
                                </div>
                            </div>
                            <div className="end-block-footer"> 
                                <button className="end-next-button" onClick = {() => handleNextClick()}>Next</button>
                                <button className="end-match-button" onClick = {() => handleMatchClick()}>Match</button>
                            </div>
                            <div className="end-card-background"></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSectionEnd;