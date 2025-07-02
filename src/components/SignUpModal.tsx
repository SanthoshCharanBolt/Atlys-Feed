import React, { useState } from 'react';

import LoginIcon from './LoginIcon';

import '../assets/styles/auth.page.css';

interface SignUpModalProps {
    open: boolean;
    onClose: () => void;
    onSwitchToSignIn?: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ open, onClose, onSwitchToSignIn }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sign up:', formData);
    };

    if (!open) return null;

    return (
        <div className="auth-modal-backdrop" onClick={onClose}>
            <div className="auth-modal-outer-bg" onClick={(e) => e.stopPropagation()}>
                <div className="auth-modal-container">
                    <div className="auth-modal">
                        <LoginIcon />
                        <div className="auth-container">
                            <h2 className="auth-heading">Create an account to continue</h2>
                            <p className="auth-subheading">Create an account to access all the features on this app</p>
                            <form className="auth-form" onSubmit={handleSignUp}>
                                <label className="auth-label">
                                    <span>Email or username</span>
                                    <input
                                        className="auth-input"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </label>
                                <label className="auth-label">
                                    <span>Password</span>
                                    <input
                                        className="auth-input"
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </label>
                                <label className="auth-label">
                                    <span>Repeat Password</span>
                                    <input
                                        className="auth-input"
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Enter your password again"
                                        required
                                    />
                                </label>
                                <button type="submit" className="auth-btn">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="auth-footer">
                        Already have an account?{' '}
                        <button className="auth-link" type="button" onClick={onSwitchToSignIn}>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
