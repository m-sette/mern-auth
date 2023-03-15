import { useState } from 'react';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
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
