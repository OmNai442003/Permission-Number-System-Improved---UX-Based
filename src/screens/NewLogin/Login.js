// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../assets/json/userRecords.json';
import './loginStyle.css'
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
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='usernameArea'>
                        <div className='commonClass'>Username</div>
                        <input
                            className='genralInput commonClass border border-secondary-subtle'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='passwordArea'>
                    <div className='commonClass'>Password</div>
                        <input
                            className='genralInput commonClass border border-secondary-subtle'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className='genralInput commonClass border border-light-subtle' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
