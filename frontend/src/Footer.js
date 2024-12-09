import './App.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="group-2">
                <Link to={`/profile`}>
                    <img className="footer-profile" src={require("./images/profile.png")} />
                </Link>
                <Link to={`/quests`}>
                    <img className="footer-quests" src={require("./images/quests.png")} />
                </Link>
                <Link to={`/settings`}>
                    <img
                        className="footer-settings"
                        src={require("./images/settings.png")}
                    />
                </Link>
                <Link to={`/messages`}>
                    <img className="footer-messages" src={require("./images/messages.png")} />
                </Link>
            </div>
        </footer>
    );
}
export default Footer;