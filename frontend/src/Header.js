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
            case '/profile/background':
                return 'BACKGROUND';
            case '/profile/interests':
                return 'INTERESTS';
            case '/profile/preferences':
                return 'PREFERENCES';
             case '/profile/values':
                return 'VALUES';
            case '/profile/traits':
                return 'TRAITS';
            case '/profile/perspectives':
                return 'PERSPECTIVES';
            case '/profile/background/quiz':
                return 'BACKGROUND';
            case '/profile/interests/quiz':
                return 'INTERESTS';
            case '/profile/preferences/quiz':
                return 'PREFERENCES';
                case '/profile/values/quiz':
                return 'VALUES';
            case '/profile/traits/quiz':
                return 'TRAITS';
            case '/profile/perspectives/quiz':
                return 'PERSPECTIVES';
            case '/profile/background/end':
                return 'BACKGROUND';
            case '/profile/interests/end':
                return 'INTERESTS';
            case '/profile/preferences/end':
                return 'PREFERENCES';
                case '/profile/values/end':
                return 'VALUES';
            case '/profile/traits/end':
                return 'TRAITS';
            case '/profile/perspectives/end':
                    return 'PERSPECTIVES';
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