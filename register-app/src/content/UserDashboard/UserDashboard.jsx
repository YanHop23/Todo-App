import React from 'react';
import { useParams } from 'react-router-dom';
import TodoList from './TodoList';


const UserDashboard = (props) => {
    const { id } = useParams(); // Отримуємо параметр id з URL

    // Тут ви можете використовувати id для відображення відповідного вмісту
    return (
        <div>
            <h2>User Dashboard for User ID: {id}</h2>
            <TodoList userid={id} state={props.state}/>
        </div>
    );
};

export default UserDashboard;
