import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
const API_URL = 'http://localhost:3001'; // Адреса JSON Server

const TodoList = (props) => {
    const [todos, setTodos] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(`${API_URL}/users/${props.userid}`);
                const user = await response.json();
                if (user && user.todos) {
                    setTodos(user.todos);
                    setUser(user);
                }
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        fetchTodos();
    }, [props.userid]);
    
    return (
        <div>
            <AddTodo state={props.state} user={user}/>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
