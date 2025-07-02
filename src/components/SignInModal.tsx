import React, { useState } from 'react';

import { useAuth } from '../hooks/useAuth';
import LoginIcon from './LoginIcon';

import '../assets/styles/auth.page.css';

interface SignInModalProps {
    open: boolean;
    onClose: () => void;
    onSwitchToSignUp?: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ open, onClose, onSwitchToSignUp }) => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (error) setError('');
    };

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const result = await login(formData.email, formData.password);
            if (result.success) {
                onClose();
                setFormData({ email: '', password: '' });
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="auth-modal-backdrop" onClick={onClose}>
            <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="auth-modal">
                    <LoginIcon />
                    <div className="auth-container">
                        <h2 className="auth-heading">Sign in to continue</h2>
                        <p className="auth-subheading">Sign in to access all the features on this app</p>
                        <form className="auth-form" onSubmit={handleSignIn}>
                            <label className="auth-label">
                                <span>Email or username</span>
                                <input
                                    type="email"
                                    name="email"
                                    className="auth-input"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                    disabled={isLoading}
                                    autoFocus
                                />
                            </label>
                            <label className="auth-label">
                                <span>Password</span>
                                <input
                                    type="password"
                                    name="password"
                                    className="auth-input"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    required
                                    disabled={isLoading}
                                />
                            </label>
                            {error && <div className="auth-error">{error}</div>}
                            <button type="submit" className="auth-btn" disabled={isLoading}>
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="auth-footer">
                    Do not have an account?{' '}
                    <button className="auth-link" type="button" onClick={onSwitchToSignUp}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;
