


import './App.css';

function Footer() {
    return (
        <footer>
            <div className="group-2">
                <img className="vuesax-outline-bag" src={require("./images/profile.png")} />
                <img className="vuesax-outline" src={require("./images/quests.png")}/>
                <div className="frame-2">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <img className="vector" src="img/vector.svg" />
                            <div className="rectangle-2"></div>
                            <img className="vector-2" src="img/image.svg" />
                            <img className="vector-3" src="img/vector-2.svg" />
                        </div>
                    </div>
                    <div className="rectangle-3"></div>
                </div>
                <img className="vuesax-outline-2" src={require("./images/messages.png")} />
            </div>
        </footer>
    );
}
export default Footer;