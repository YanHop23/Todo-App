import React from "react";

const AddTodo = (props) => {
    let NewTask = React.createRef();
    let sendTask = () => {
        if (NewTask.current.value !== '') {
            let task = NewTask.current.value;
            props.state.addTask(task, props.user);
            console.log(props.user);
            NewTask.current.value = '';
        }
    }

    return (
        <div>
            <div>TODO APP</div>
            <div>
                <input type='text' ref={NewTask} />
                <button onClick={sendTask}>Add Task</button>
            </div>
        </div>
    );
};

export default AddTodo;
