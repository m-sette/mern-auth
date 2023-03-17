import { Navigate } from 'react-router-dom';

const WithoutCredential = ({ token, children }) => {
    if (token) {
        return <Navigate to='/dashboard' />;
    }

    return children;
};

export default WithoutCredential;
