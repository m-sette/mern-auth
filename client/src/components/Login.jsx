import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = ({ token, setToken }) => {
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

            console.log('res', res.headers.token);
            setToken(res.headers.token);
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
