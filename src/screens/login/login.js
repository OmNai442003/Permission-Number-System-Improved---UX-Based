// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../assets/json/userRecords.json';
import './login.css'
import Navbar from '../../components/Navbar/Navbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            navigate('/landing', { state: { userId: user.userId } });
        } else {
            alert('Invalid credentials');
        }
    };

    return (
<div>
    <div className='Navbar'>
<Navbar />
    </div>
<form className='userForm' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
</div>
    );
};

export default Login;
