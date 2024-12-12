import './App';
import './ProfileSection.css';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

function ProfileSectionIntro({questionData}) {
    const { profileSectionName } = useParams();
    const navigate = useNavigate();
    
    const sectionData = questionData.find(item => item.category === profileSectionName);

    function handleNavigateClick() {
        navigate(`/profile/${profileSectionName}/quiz`);
    }

    return (
        <div className="profile">
            <div className="phone-screen-div">
                <div className="intro-card-block">
                    <div className="bottom-group">
                            <div className="intro-card-content-block">
                                <div className="intro-card-title">
                                    <div className="intro-card-title-wrapper">{sectionData.category.charAt(0).toUpperCase() + sectionData.category.slice(1)}</div>
                                </div>
                                <div className="intro-card-blurb">
                                    <p className="intro-card-blurb-wrapper">{sectionData.description}</p>
                                </div>
                            </div>
                            <div className="block-footer"> 
                                <button className="intro-next-button" onClick = {() => handleNavigateClick()}>Next</button>
                            </div>
                            <div className="intro-card-background"></div>
                        </div>
                    <img className="intro-card-image" src={require(`./${"images/questimage.png"}`)} />
                </div>
            </div>
        </div>
    )
}

export default ProfileSectionIntro;