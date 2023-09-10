import React, { useState } from "react";
import { TodoForm } from "./todoForm";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "./todo";
import { EditTodoForm } from "./editTodo";
uuidv4();

export const TodoWrapper = () => {
    const [todos,setTodos] = useState([])
    let tarefas = todos.length;

    let taskCompleta = todos.filter(todo => todo.completed === true);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false,
            isEditing: false}])
    }

    const toogleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
             todo, completed : !todo.completed} : todo))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
        todo, isEditing: !todo.isEditing} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...
        todo, task, isEditing: !todo.isEditing} : todo))
    }

    return(
        <div className="TodoWrapper" >
            <h1> Lista de tarefas </h1>
            <TodoForm addTodo={addTodo}/>
            <div className="TotalTarefas">
                <p> Tarefas: {tarefas} </p>
                <p className="completas"> 
                    Completas: {taskCompleta.length} </p>
            </div>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index} 
                    deleteTodo={deleteTodo} toogleComplete={toogleComplete} editTodo={editTodo} />
                )
            ))}
        </div>
    )
}