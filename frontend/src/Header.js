import './App.css';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

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
                return '';
        }
    };

    return (
        <header>
            <div className="rectangle"></div>
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