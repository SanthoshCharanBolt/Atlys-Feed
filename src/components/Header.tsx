import React from 'react';

import '../assets/styles/feed.page.css';

interface HeaderProps {
    isAuthenticated: boolean;
    onLogin: () => void;
    onLogout: () => void;
}

const LoginSvgIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="6" width="16" height="22" rx="5" stroke="#111" stroke-width="2.5" fill="none"></rect>
        <path d="M7 16h15" stroke="#111" stroke-width="2.5" stroke-linecap="round"></path>
        <path d="M19 11l5 5-5 5" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
);

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogin, onLogout }) => (
    <header className="app-header">
        <div className="logo">
            <div className="logo-icon">
                <span>-</span>
            </div>

            <span className="logo-text">foo-rum</span>
        </div>
        <div className="header-actions">
            {isAuthenticated ? (
                <button className="header-btn" onClick={onLogout}>
                    Sign Out
                </button>
            ) : (
                <button
                    className="header-btn"
                    onClick={onLogin}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        fontWeight: 600,
                        fontSize: 20,
                        color: '#111',
                        background: 'none',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
                        cursor: 'pointer',
                    }}
                >
                    Login
                    <span style={{ display: 'flex', alignItems: 'center', marginLeft: 6 }}>
                        <LoginSvgIcon />
                    </span>
                </button>
            )}
        </div>
    </header>
);

export default Header;
