import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp({ setUser }) {
    const navigate = useNavigate();
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [showAvatarModal, setShowAvatarModal] = useState(false);
    const [avatarOptions, setAvatarOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formError, setFormError] = useState('');
    const [avatarsLoaded, setAvatarsLoaded] = useState(0);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDOB] = useState("");

    useEffect(() => {
        let mounted = true;

        const fetchAvatars = async () => {
            try {
                const response = await fetch('/api/avatars');
                if (!response.ok) {
                    throw new Error('Failed to fetch avatars');
                }
                const data = await response.json();
                
                if (mounted) {
                    setAvatarOptions(data);
                    // Don't set loading to false yet - wait for preloading
                    preloadImages(data);
                }
            } catch (error) {
                console.error('Error fetching avatars:', error);
                if (mounted) {
                    setError(error.message);
                    setLoading(false);
                }
            }
        };

        fetchAvatars();

        return () => {
            mounted = false;
        };
    }, []);

    const preloadImages = (avatarUrls) => {
        let loadedCount = 0;
        const totalImages = avatarUrls.length;

        avatarUrls.forEach(url => {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                setAvatarsLoaded(loadedCount);
                if (loadedCount === totalImages) {
                    setLoading(false);
                }
            };
            img.onerror = () => {
                loadedCount++;
                setAvatarsLoaded(loadedCount);
                if (loadedCount === totalImages) {
                    setLoading(false);
                }
            };
            img.src = require(`${url}`);
        });
    };

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
        setShowAvatarModal(false);
    };

    const handleFinish = async () => {
        setFormError('');
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !dob.trim() || !selectedAvatar) {
            setFormError('Please fill all fields and select an avatar before continuing');
            return;
        }
    
        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    date_of_birth: dob,
                    profile_image: selectedAvatar
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            const updatedProfile = await response.json();
            setUser(updatedProfile);
            navigate('/profile/background');
        } catch (error) {
            console.error('Error updating profile:', error);
            setFormError('Failed to update profile. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="avatar-container">
                <div className="avatar-circle">
                    {selectedAvatar && !loading && (
                        <img 
                            src={require(`${selectedAvatar}`)} 
                            alt="Selected avatar" 
                            className="avatar-image"
                        />
                    )}
                </div>
                <div 
                    className="plus-button"
                    onClick={() => !loading && setShowAvatarModal(true)}
                />
            </div>

            <h1 className="signup-title">Sign Up</h1>

            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="First Name" 
                    className="input-field"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="input-field"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Date of birth (mm/dd/yyyy)" 
                    className="input-field full-width"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="input-field full-width"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {formError && <div className="error-message">{formError}</div>}

            <button 
                className="finish-button"
                onClick={handleFinish}
            >
                Finish
            </button>

            {showAvatarModal && (
                <div className="avatar-modal" onClick={() => setShowAvatarModal(false)}>
                    <div className="avatar-grid" onClick={e => e.stopPropagation()}>
                        <div className="avatar-options">
                            {error && <div>Error loading avatars: {error}</div>}
                            {loading ? (
                                <div>Loading avatars... ({avatarsLoaded} of {avatarOptions.length})</div>
                            ) : (
                                avatarOptions.map((avatar, index) => (
                                    <img
                                        key={index}
                                        src={require(`${avatar}`)}
                                        alt={`Avatar option ${index + 1}`}
                                        className="avatar-option"
                                        onClick={() => handleAvatarSelect(avatar)}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUp;