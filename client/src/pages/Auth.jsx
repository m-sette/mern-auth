import { useState } from 'react';
import Login from '../components/Login.jsx';
import Registration from '../components/Registration.jsx';

import './Auth.css';

const Auth = ({ token, setToken }) => {
    const [isLogin, setIsLogin] = useState(true);

    console.log(isLogin);

    const handleText = () => {
        setIsLogin((prev) => !prev);
    };
    return (
        <div className='forms'>
            {isLogin ? (
                <Login token={token} setToken={setToken} />
            ) : (
                <Registration setIsLogin={setIsLogin} />
            )}

            <div className='form-separator'></div>

            <button onClick={handleText}>
                {isLogin ? 'Create an Account' : 'Go to Login'}
            </button>
        </div>
    );
};
export default Auth;
