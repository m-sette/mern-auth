import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import userContext from '../context/userContext.jsx';

const WithoutCredential = ({ children }) => {
    const { token } = useContext(userContext);
    if (token) {
        return <Navigate to='/dashboard' />;
    }

    return children;
};

export default WithoutCredential;
