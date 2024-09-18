import './App.css';
import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [isEditing, setIsEditing] = useState(null); // Para saber cuál tarea está siendo editada
    const [editTask, setEditTask] = useState(''); // Para almacenar el valor de la tarea que está siendo editada

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleEditTask = (index) => {
        setIsEditing(index);
        setEditTask(tasks[index]);
    };

    const handleSaveEdit = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = editTask;
        setTasks(updatedTasks);
        setIsEditing(null);
    };

    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {isEditing === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editTask}
                                    onChange={(e) => setEditTask(e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                {task}
                                <button className='editar' onClick={() => handleEditTask(index)}>Edit</button>
                                <button onClick={() => handleDeleteTask(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <TodoList />
        </div>
    );
}

export default App;