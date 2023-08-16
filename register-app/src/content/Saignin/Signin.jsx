import React, { useState } from 'react';
import s from './signin.module.scss';
import { useNavigate } from 'react-router-dom'; // Змінено імпорт

const API_URL = 'http://localhost:3001'; // Адреса JSON Server

const SigninForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Змінено імпорт

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        let users = [];
        try {
            const response = await fetch(`${API_URL}/users`);
            users = await response.json();
            console.log(users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    
        console.log('Email:', email);
        console.log('Password:', password);
    
        const user = props.state.getUserByEmail(email, users);
        
        if (user && props.state.checkPassword(user, password)) {
            console.log('Вхід виконано успішно');
            navigate(`/userdashboard/${user.id}`); // Змінено імпорт
        } else {
            console.log('Невірний email або пароль');
        }
    };

    return (
        <div className={s.wrapper}>
            <h2>Вхід до акаунту</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Увійти</button>
            </form>
        </div>
    );
};

export default SigninForm;
