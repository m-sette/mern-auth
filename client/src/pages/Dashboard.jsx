import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    /**
     * The user credential must come from the context
     * TODO: get user from context
     * @type {string}
     */

    useEffect(() => {
        // TODO: fetch GET the user, passing the jwt in the headers.
        const tokenStorage = JSON.parse(localStorage.getItem('token'));
        console.log('token from dashboard', tokenStorage);
        axios
            .get('http://localhost:4000/users/', {
                headers: { token: tokenStorage },
            })
            .then(({ data }) => {
                console.log('res', data);
                setUser(data.user);
            })
            .catch((e) => console.error(e));
    }, []);

    return (
        <div>
            <h2>The dashboard page</h2>
            {user && (
                <h3>
                    This page belongs to {user.firstname} {user.lastname}
                </h3>
            )}
        </div>
    );
};
export default Dashboard;
