import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import userContext from '../context/userContext.jsx';

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(userContext);
    if (!token) {
        return <Navigate to='/' />;
    }

    return children;
};

export default ProtectedRoute;
