import React from 'react';
import './Start.css';

function Start() {
    return (
        <div className="welcome">
<div style={{width: 393, height: 852, left: 0, top: 0, position: 'absolute', background: '#00544F', backdropFilter: 'blur(10px)'}} />
<div style={{left: 71, top: 545, position: 'absolute', color: '#EFEBE2', fontSize: 30, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: 22, wordWrap: 'break-word'}}>Quest Friender</div>
<img style={{width: 183, height: 153, left: 117, top: 350, position: 'absolute'}} src={require(`./images/Logo.png`)} />
</div>
        // <div className="welcome">
        // <div className="background" />
        //     <img 
        //             className="quest-logo" 
        //             src={require(`./images/Logo.png`)} 
        //         />
        //     <div className="welcome-text">QUEST FRIENDER</div>
        // </div>
    );
}

export default Start;