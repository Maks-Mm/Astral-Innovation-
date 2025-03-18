import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';
import './index.css';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { userLoggedIn } = useAuth();


    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(email, password).catch(error => {
                setErrorMessage(error.message);
                setIsRegistering(false);
            });
        }
    };

    return (
        <div data-aos="zoom-out">
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
            <main className="auth-container">
                <div className="auth-card">
                    <div className="text-center">
                        <h3 className="auth-title">Create a New Account</h3>
                    </div>
                    <form onSubmit={onSubmit} className="auth-form">
                        <div>
                            <label className="auth-label">Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="auth-input"
                            />
                        </div>
                        <div>
                            <label className="auth-label">Password</label>
                            <input
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="auth-input"
                                disabled={isRegistering}
                            />
                        </div>
                        <div>
                            <label className="auth-label">Confirm Password</label>
                            <input
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="auth-input"
                                disabled={isRegistering}
                            />
                        </div>
                        {errorMessage && <span className='auth-error'>{errorMessage}</span>}
                        <button type="submit" disabled={isRegistering} className="auth-button">
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="auth-text">
                            Already have an account? <Link to={'/login'} className="auth-link">Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Register;