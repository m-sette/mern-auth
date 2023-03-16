import { Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
    return (
        <div className='App'>
            <h1>Hello from the frontend</h1>
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/dashboard/' element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
