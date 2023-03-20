import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { useState, useEffect } from 'react';
import WithoutCredential from './components/WithoutCredential';
import Header from './components/Header';
import userContext from './context/userContext.jsx';

const checkLocalStorage = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) return token;
    return null;
};

function App() {
    const [token, setToken] = useState(checkLocalStorage());
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);

    return (
        <userContext.Provider value={{ token, setToken }}>
            <div className='App'>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <WithoutCredential>
                                <Auth />
                            </WithoutCredential>
                        }
                    />
                    <Route
                        path='/dashboard/'
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        </userContext.Provider>
    );
}

export default App;
