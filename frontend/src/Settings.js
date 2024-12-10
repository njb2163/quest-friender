import './Settings.css';

function Settings({ user }) {
    return (
        <div className="settings-container">
            <div className="profile-section">
                <img className="profile-image" src={require(`./${user.profile_image}`)} alt="Profile" />
                <div className="profile-info">
                    <div className="profile-name">{user.full_name}</div>
                    <div className="profile-email">{user.email}</div>
                </div>
            </div>

            <div className="options-list">
                <div className="option-item">
                    <span>My Details</span>
                    <div className="arrow"></div>
                </div>
                <div className="option-item">
                    <span>Notifications</span>
                    <div className="arrow"></div>
                </div>
                <div className="option-item">
                    <span>Quests History</span>
                    <div className="arrow"></div>
                </div>
                <div className="option-item">
                    <span>Help</span>
                    <div className="arrow"></div>
                </div>
                <div className="option-item">
                    <span>About</span>
                    <div className="arrow"></div>
                </div>
            </div>

            <div className="logout-button">
                Log Out
            </div>
        </div>
    );
}

export default Settings;
