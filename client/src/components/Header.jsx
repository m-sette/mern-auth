import React from 'react';

import './Header.css';

const Header = ({ token }) => {
    return (
        <header>
            <h1>My Awasone Dashboard</h1>
            {token && (
                <button
                    onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload(false);
                    }}
                >
                    logout
                </button>
            )}
        </header>
    );
};

export default Header;
