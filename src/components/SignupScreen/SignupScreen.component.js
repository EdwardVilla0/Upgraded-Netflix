import React from 'react';
import "./SignupScreen.styles.css";

function SignupScreen() {
    const register = () => {

    }
    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button>Sign In</button>
                <h4>
                    <span className="signupScreen__grey">New to Netflix? </span>
                    <span className="signupScreen__link" onClick={register}>
                        Sign Up now.
                    </span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen
