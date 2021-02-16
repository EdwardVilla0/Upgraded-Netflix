import React from 'react';
import './Nav.styles.css';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                    alt="Neflix logo" />

                <img
                    className="nav__avatar"
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                    alt="Avatar"
                />
            </div>

        </div>
    )
}

export default Nav
