import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const showBackButton = location.pathname.includes('/questDetails');

    const getHeaderText = () => {
        switch(location.pathname) {
            case '/profile':
                return 'PROFILE';
            case '/messages':
                return 'MESSAGES';
            case '/settings':
                return 'SETTINGS';
            case '/quests':
                return 'QUESTS';
            default:
                if (location.pathname.includes('/questDetails')) {
                    return 'QUEST DETAILS';
                }
                return '';
        }
    };

    return (
        <header>
            <div className="rectangle">
                {showBackButton && (
                    <button 
                        className="back-button"
                        onClick={() => navigate('/quests')}
                    >
                        <img 
                            src={require("./images/back-arrow.png")} 
                            alt="Back" 
                            className="back-arrow"
                        />
                    </button>
                )}
            </div>
            <div className="status-bar">
                <div className="left-side">
                    <div className="statusbar-time"><div className="time">9:41</div></div>
                </div>
                <div className="dynamic-island">
                    <div className="statusbar">
                        <div className="truedepth-camera"></div>
                        <div className="facetime-camera"></div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="signal-wifi-battery">
                        <img src={require("./images/rightside.png")} alt="status icons" />
                    </div>
                </div>
            </div>
            <div className="frame">
                <div className="profile-wrapper">
                    <div className="profile">{getHeaderText()}</div>
                </div>
            </div>
        </header>
    );
}

export default Header;