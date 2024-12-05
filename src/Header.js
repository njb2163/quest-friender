import './App.css';

function Header() {
    return (
        <header>
            <img className="avatar" src="img/avatar-gencb8809668058c733c9107f2e80f188d9-1.png" />
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
                        <img className="icon-mobile-signal" src="img/mobile-signal.svg" />
                        <img className="wifi" src="img/wifi.svg" />
                        <img className="statusbar-battery" src="img/statusbar-battery.svg" />
                    </div>
                </div>
            </div>
            <div className="frame">
                <div className="profile-wrapper"><div className="profile">PROFILE</div></div>
            </div>
        </header>
    );
}
export default Header;