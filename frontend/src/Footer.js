import './App.css';
import { Link, useLocation } from 'react-router-dom';
import quests from './images/compass.png';
import messages from './images/envelope.png';
import settings from './images/settings.png';
import profile from './images/user.png';

function Footer() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path) => currentPath === path;

    return (
        <footer>
            <div className="group-2">
                <Link to="/quests" className={`footer-link ${isActive('/quests') ? 'active' : ''}`}>
                    <img 
                        className="footer-icons" 
                        src={quests} 
                        alt="Quests" 
                    />
                    {isActive('/quests') && <div className="active-indicator"></div>}
                </Link>
                <Link to="/messages" className={`footer-link ${isActive('/messages') ? 'active' : ''}`}>
                    <img 
                        className="footer-icons" 
                        src={messages} 
                        alt="Messages" 
                    />
                    {isActive('/messages') && <div className="active-indicator"></div>}
                </Link>
                <Link to="/profile" className={`footer-link ${isActive('/profile') ? 'active' : ''}`}>
                    <img 
                        className="footer-icons" 
                        src={profile} 
                        alt="Profile" 
                    />
                    {isActive('/profile') && <div className="active-indicator"></div>}
                </Link>
                <Link to="/settings" className={`footer-link ${isActive('/settings') ? 'active' : ''}`}>
                    <img 
                        className="footer-icons" 
                        src={settings} 
                        alt="Settings" 
                    />
                    {isActive('/settings') && <div className="active-indicator"></div>}
                </Link>
            </div>
        </footer>
    );
}

export default Footer;