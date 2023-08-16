let state = {
    // Функція для отримання користувача за email
    getUserByEmail(email,database) {
        return database.find(user => user.email === email);
    },
    // Функція для перевірки пароля
    checkPassword(user, password) {
        return user.password === password;
    },
    
    addTask(taskText, user) {
        
        if (user) {
            const newTask = {
                id: user.todos.length + 1, // або інший спосіб генерації ID для нового завдання
                text: taskText
            };
            
            user.todos.push(newTask);
        }
    }
};

export {state};
