import React, {useState} from "react";
import '../../css/task.css';
import Id from "../ID/id";

const tasksList = [
    {id: Id(), name: 'task 1', status: true, editMode: false},
    {id: Id(), name: 'task 2', status: false, editMode: false},
    {id: Id(), name: 'task 3', status: false, editMode: false},
];
function Task() {
    const [tasks, setTasks] = useState(tasksList);

    function EditMode(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.editMode = !task.editMode;
            }

            return task;
        }));
    }


    const newTask = tasks.map(task => {
        if (task.status === false) {
            return (
                <li key={task.id} id={task.id} onClick={() => EditMode(task.id)}>
                {task.name + ' '}
                {task.editMode ? <span>change</span> : ''}
                </li>
            );
        }
    });

    return <>{newTask}</>;
}

export default Task;