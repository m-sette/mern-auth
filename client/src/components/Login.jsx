import { useState } from 'react';
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const res = await axios.post(
               'http://localhost:4000/login',
               data,
               {
                   headers: {
                       'Content-Type': 'application/json',
                   },
               }
           );

            console.log("res", res)
        } catch (error) {
            console.error(error)
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
