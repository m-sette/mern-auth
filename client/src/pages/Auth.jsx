import { useState } from 'react';
import Login from '../components/Login.jsx';
import Registration from '../components/Registration.jsx';

import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    console.log(isLogin);

    const handleText = () => {
        setIsLogin((prev) => !prev);
    };
    return (
        <div className='forms'>
            {isLogin ? <Login /> : <Registration />}

            <div className='form-separator'></div>

            <button onClick={handleText}>
                {isLogin ? 'Create an Account' : 'Go to Login'}
            </button>
        </div>
    );
};
export default Auth;