import './App.css';
import { Link } from 'react-router-dom';

function Personality({ user }) {
  if (!user) return null;

  return (
    <div>
      <div className="overlap">
      <div className="profile-background-wrapper">
          <img className="profile-background-img" src={require(`./${"images/adventurer.png"}`)} />
          <div className="profile-background-gradient"></div>
        </div>
        <div className="group">
          <div className="text-wrapper">{user.first_name}</div>
          <div className="text-wrapper-2">{user.type}</div>
        </div>
        <div className="text-wrapper-3">Profile complete {user.profileComplete}%</div>
      </div>
      <Link to = "/profile/background" className="personality-overlap personality-background-container">
        <div className="text-wrapper-4">Background</div>
          <img className="profile-pattern" src={require(`./${"images/icons/background-icon.png"}`)} />
        <div className="text-wrapper-5">{user.sections.background}%</div>
      </Link>
      <Link to = "/profile/interests" className="personality-overlap personality-interests-container">
        <div className="text-wrapper-6">Interests</div>
          <img className="profile-pattern" src={require(`./${"images/icons/interests-icon.png"}`)} />
        <div className="text-wrapper-5">{user.sections.interests}%</div>
      </Link>
      <Link to = "/profile/preferences" className="personality-overlap personality-preferences-container">
        <div className="text-wrapper-4">Preferences</div>
          <img className="profile-pattern" src={require(`./${"images/icons/preferences-icon.png"}`)} />
        <div className="text-wrapper-5">{user.sections.preferences}%</div>
      </Link>
      <Link to = "/profile/values"  className="personality-overlap personality-values-container">
        <div className="text-wrapper-7">Values</div>
          <img className="profile-pattern" src={require(`./${"images/icons/values-icon.png"}`)} />
        <div className="text-wrapper-5">{user.sections.values}%</div>
      </Link>
      <Link to = "/profile/traits" className="personality-overlap personality-traits-container">
        <div className="text-wrapper-8">Traits</div>
          <img className="profile-pattern" src={require(`./${"images/icons/traits-icon.png"}`)} />
        <div className="text-wrapper-5">{user.sections.traits}%</div>
      </Link>
      <Link to = "/profile/perspectives" className="personality-overlap personality-perspectives-container">
        <div className="text-wrapper-9">Perspectives</div>
          <img className="profile-pattern" src={require(`./${"images/icons/perspectives-icon.png"}`)} />
        <div className="text-wrapper-5">{user.sections.perspectives}%</div>
      </Link>
    </div>
  );
}

export default Personality;