import './App.css';
import { Link } from 'react-router-dom';

function Personality({ user }) {
  if (!user) return null;

  return (
    <div>
      <div className="overlap">
        <img className="profile-background-img" src={require(`./${"images/adventurer.png"}`)} />
        <div className="group">
          <div className="text-wrapper">{user.first_name}</div>
          <div className="text-wrapper-2">{user.type}</div>
        </div>
        <div className="text-wrapper-3">Profile complete {user.profileComplete}%</div>
      </div>
      <Link to = "/profile/background" className="overlap-2">
        <div className="text-wrapper-4">Background</div>
        <div className="ellipse">
          <img src={require(`./${"images/icons/background-icon.png"}`)} />
        </div>
        <div className="text-wrapper-5">{user.sections.background}%</div>
      </Link>
      <Link to = "/profile/interests" className="overlap-3">
        <div className="text-wrapper-6">Interests</div>
        <div className="ellipse">
          <img src={require(`./${"images/icons/interests-icon.png"}`)} />
        </div>
        <div className="text-wrapper-5">{user.sections.interests}%</div>
      </Link>
      <Link to = "/profile/preferences" className="overlap-4">
        <div className="text-wrapper-4">Preferences</div>
        <div className="ellipse">
          <img src={require(`./${"images/icons/preferences-icon.png"}`)} />
        </div>
        <div className="text-wrapper-5">{user.sections.preferences}%</div>
      </Link>
      <Link to = "/profile/values"  className="overlap-5">
        <div className="text-wrapper-7">Values</div>
        <div className="ellipse">
          <img src={require(`./${"images/icons/values-icon.png"}`)} />
        </div>
        <div className="text-wrapper-5">{user.sections.values}%</div>
      </Link>
      <Link to = "/profile/traits" className="overlap-6">
        <div className="text-wrapper-8">Traits</div>
        <div className="ellipse">
          <img src={require(`./${"images/icons/traits-icon.png"}`)} />
        </div>
        <div className="text-wrapper-5">{user.sections.traits}%</div>
      </Link>
      <Link to = "/profile/perspectives" className="overlap-7">
        <div className="text-wrapper-9">Perspectives</div>
        <div className="ellipse">
          <img src={require(`./${"images/icons/perspectives-icon.png"}`)} />
        </div>
        <div className="text-wrapper-5">{user.sections.perspectives}%</div>
      </Link>
    </div>
  );
}

export default Personality;