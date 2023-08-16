import React, { useState } from 'react';
import s from './login.module.scss';
import { useNavigate } from 'react-router-dom'; // Змінено імпорт

const API_URL = 'http://localhost:3001'; // Адреса JSON Server

const LoginForm = (props) => {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate(); // Змінено імпорт

    const handleNewNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNewEmailChange = (event) => {
        setNewEmail(event.target.value);
    };
    
    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };
    
    
    const handleRegistration = async (event) => {
        event.preventDefault();
        
        // Перевірка коректності даних, можливо, валідація
    
        // Додавання нового користувача до бази даних
        const newUser = {
            name: newName,
            email: newEmail,
            password: newPassword,
            tasks: [] // Початково масив тасків пустий
        };
    
        try {
            const response = await fetch(`${API_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
    
            if (response.ok) {
                const createdUser = await response.json(); // Отримуємо створеного користувача з відповіді сервера
                console.log('Користувач зареєстрований успішно');
                // Якщо потрібно виконати додаткові дії після реєстрації
                navigate(`/userdashboard/${createdUser.id}`); // Використовуємо id створеного користувача
                
            } else {
                console.error('Помилка реєстрації');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };
    
    



    return (
        <div className={s.wrapper}>
            <h2>Реєстрація нового акаунту</h2>
            <form onSubmit={handleRegistration}>
                <div>
                    <label>Name:</label>
                    <input type="name" value={newName} onChange={handleNewNameChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={newEmail} onChange={handleNewEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={newPassword} onChange={handleNewPasswordChange} />
                </div>
                <button type="submit">Зареєструвати</button>
            </form>
        </div>
    );
};

export default LoginForm;
