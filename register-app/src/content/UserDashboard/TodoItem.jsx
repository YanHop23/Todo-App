// TodoItem.jsx
import React from "react";

const TodoItem = (props) => {
    
    return (
        <div>
            {props.todo.text}
        </div>
    );
};

export default TodoItem;
