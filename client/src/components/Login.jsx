import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [token, setToken] = useState(null);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
        if (token) {
            navigate('/dashboard');
        }
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
    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
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
