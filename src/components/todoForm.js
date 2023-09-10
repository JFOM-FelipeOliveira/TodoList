import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
export const TodoForm = ({addTodo}) => {
    const [valor,setValor]  = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(valor)

        setValor("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" maxlength={50} required className="todo-input" 
                value={valor} placeholder="Adicionar uma nova tarefa" onChange={
                    (e) => { setValor(e.target.value) }} 
            />
            <button type="submit" className="todo-btn"> 
            <FontAwesomeIcon icon={faCirclePlus} /> Tarefa
            </button>
        </form>
    )
}