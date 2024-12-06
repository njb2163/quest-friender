import './App.css';

function Footer() {
    return (
        <footer>
            <div className="group-2">
                <img className="footer-profile" src={require("./images/profile.png")} />
                <img className="footer-quests" src={require("./images/quests.png")}/>
                <img 
                    className="footer-settings" 
                    src={require("./images/settings.png")} 
                />
                <img className="footer-messages" src={require("./images/messages.png")} />
            </div>
        </footer>
    );
}
export default Footer;