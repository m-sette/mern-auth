import axios from 'axios';
import { useEffect } from 'react';

const Dashboard = () => {
    const email = 'tj@test.com';

    useEffect(() => {
        axios
            .get('http://localhost:4000/users/' + email)
            .then((res) => console.log('res', res));
    }, []);

    return (
        <div>
            <h2>The dashboard page</h2>
        </div>
    );
};
export default Dashboard;
