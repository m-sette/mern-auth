import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import userContext from '../context/userContext.jsx';

const Login = () => {
    const { token, setToken } = useContext(userContext);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                'http://localhost:4000/users/login',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const auth = res.headers.getAuthorization();
            const token = auth.split(' ')[1];
            setToken(token);
        } catch (error) {
            console.error(error);
        }
    };
    if (token) {
        return <Navigate to='/dashboard' />;
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={data.email}
                onChange={handleChange}
            />
            <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={data.password}
                onChange={handleChange}
            />
            <button type='submit'>Login</button>
        </form>
    );
};
export default Login;
