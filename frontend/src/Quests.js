import React from 'react';
import './Quests.css';

function Quests() {
    return (
        <div className="quests-container">

            <div className="line-separator"></div>
            <div className="label label-pending">Pending...</div>
            <div className="label label-active">Active</div>

            <div className="quest-card card-pending">
                <div className="quest-info">
                    <div className="quest-title">Jungle Bonanza!</div>
                    <div className="quest-time">Tomorrow at 6:00 PM</div>
                    <div className="quest-participants">with Bob and 2 others</div>
                </div>
            </div>

            <div className="quest-card card-active">
                <div className="quest-info">
                    <div className="quest-title">Jungle Bonanza!</div>
                    <div className="quest-time">Tomorrow at 6:00 PM</div>
                    <div className="quest-participants">with Bob and 2 others</div>
                </div>
            </div>

            <div className="quest-card card-upcoming-1">
                <div className="quest-info">
                    <div className="quest-title">Jungle Bonanza!</div>
                    <div className="quest-time">Tomorrow at 6:00 PM</div>
                    <div className="quest-participants">with Bob and 2 others</div>
                </div>
            </div>

            <div className="quest-card card-upcoming-2">
                <div className="quest-info">
                    <div className="quest-title">Jungle Bonanza!</div>
                    <div className="quest-time">Tomorrow at 6:00 PM</div>
                    <div className="quest-participants">with Bob and 2 others</div>
                </div>
            </div>

            <img className="image-pending" src={require("./images/quests.png")} alt="Pending Avatar" />
            <img className="image-active" src={require("./images/quests.png")} alt="Active Avatar" />
            <img className="image-upcoming-1" src={require("./images/quests.png")} alt="Upcoming Avatar 1" />
            <img className="image-upcoming-2" src={require("./images/quests.png")} alt="Upcoming Avatar 2" />
        </div>
    );
}

export default Quests;
