import { useState } from 'react';
import axios from 'axios';
const Registration = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });

    //TODO change to use formData

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                'http://localhost:4000/users/register',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log(res);
        } catch (error) {
            console.error(error.response.data);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Registration</h3>
            <input
                type='text'
                name='firstname'
                placeholder='First Name'
                value={data.firstname}
                onChange={handleChange}
            />
            <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                value={data.lastname}
                onChange={handleChange}
            />
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
                placeholder='Password'
                value={data.password}
                onChange={handleChange}
            />
            <button type='submit'>Sign Up</button>
        </form>
    );
};
export default Registration;
