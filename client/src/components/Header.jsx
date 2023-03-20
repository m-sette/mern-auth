import React, { useContext } from 'react';
import userContext from '../context/userContext.jsx';

import './Header.css';

const Header = () => {
    const { token } = useContext(userContext);
    return (
        <header>
            <h1>My Awesome Dashboard</h1>
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
