import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from "react";

export const Todo = ({task, toogleComplete, deleteTodo, editTodo}) => {
    return(
        <div className="Todo">
            <div className="task" onClick={() => toogleComplete(task.id)}>
                <p className={`${task.completed ? "completed" : ""}`}> 
                    {task.task} 
                    <span className={`${task.completed ? "" : "check"}`}>
                    <FontAwesomeIcon icon={faCircleCheck} Regular /> 
                    </span> 
                </p>
            </div>
            <div className={`${task.completed ? "check" : "icons"}`} >
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}