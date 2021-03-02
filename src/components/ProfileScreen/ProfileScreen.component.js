import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice.js';
import { auth } from '../../firebase.js';
import Nav from '../Nav/Nav.component.js';
import PlansScreen from '../PlansScreen/PlansScreen.component.js';
import './ProfileScreen.styles.css';

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div className="profileScreen">
            <Nav />

            <div className="profileScreen__body">
                <h1>Edit Profile</h1>

                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix-avatar" />

                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>

                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlansScreen />

                            <button className="profileScreen__signOut" onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
