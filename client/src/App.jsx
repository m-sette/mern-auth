import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { useState, useEffect } from 'react';
import WithoutCredential from './components/WithoutCredential';
import Header from './components/Header';

const checkLocalStorage = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) return token;

    return null;
};

function App() {
    // TODO: Create a context for the user logged in

    const [token, setToken] = useState(checkLocalStorage());
    useEffect(() => {
        console.log('cureent token: ', token);
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);

    return (
        <div className='App'>
            <Header token={token} />
            <Routes>
                <Route
                    path='/'
                    element={
                        <WithoutCredential>
                            <Auth token={token} setToken={setToken} />
                        </WithoutCredential>
                    }
                />
                <Route
                    path='/dashboard/'
                    element={
                        <ProtectedRoute token={token}>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
