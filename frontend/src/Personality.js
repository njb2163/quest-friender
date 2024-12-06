import './App.css';

function Personality({ user }) {
  if (!user) return null;

  return (
    <div>
      <div className="overlap">
        <img className="img" src="img/rectangle-131.svg" />
        <div className="group">
          <div className="text-wrapper">{user.name}</div>
          <div className="text-wrapper-2">{user.type}</div>
        </div>
        <div className="text-wrapper-3">Profile complete {user.profileComplete}%</div>
      </div>
      <div className="overlap-2">
        <div className="text-wrapper-4">Background</div>
        <div className="ellipse"></div>
        <div className="text-wrapper-5">{user.sections.background}%</div>
      </div>
      <div className="overlap-3">
        <div className="text-wrapper-6">Interests</div>
        <div className="ellipse"></div>
        <div className="text-wrapper-5">{user.sections.interests}%</div>
      </div>
      <div className="overlap-4">
        <div className="text-wrapper-4">Preferences</div>
        <div className="ellipse"></div>
        <div className="text-wrapper-5">{user.sections.preferences}%</div>
      </div>
      <div className="overlap-5">
        <div className="text-wrapper-7">Values</div>
        <div className="ellipse"></div>
        <div className="text-wrapper-5">{user.sections.values}%</div>
      </div>
      <div className="overlap-6">
        <div className="text-wrapper-8">Traits</div>
        <div className="ellipse"></div>
        <div className="text-wrapper-5">{user.sections.traits}%</div>
      </div>
      <div className="overlap-7">
        <div className="text-wrapper-9">Perspectives</div>
        <div className="ellipse"></div>
        <div className="text-wrapper-5">{user.sections.perspectives}%</div>
      </div>
    </div>
  );
}

export default Personality;