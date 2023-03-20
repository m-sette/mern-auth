import { useContext, useState } from 'react';
import axios from 'axios';
import userContext from '../context/userContext.jsx';
const Registration = () => {
    const { setToken } = useContext(userContext);
    const [input, setInput] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });

    //TODO change to use formData

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                'http://localhost:4000/users/register',
                input,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log(data);
            if (data.success) {
                // TODO: create own costom message
                window.alert(data.message);
                setIsLogin(true);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='firstname'
                placeholder='First Name'
                value={input.firstname}
                onChange={handleChange}
            />
            <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                value={input.lastname}
                onChange={handleChange}
            />
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={input.email}
                onChange={handleChange}
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={input.password}
                onChange={handleChange}
            />
            <button type='submit'>Sign Up</button>
        </form>
    );
};
export default Registration;
