import './style.css';
import { useState } from 'react';

export default function Header() {
    const [taskName, setTaskName] = useState("")
    
    function handleTaskNameChange(event) {
        setTaskName(event.target.value)
    }

    function handleAddTaskClick() {
        // append a new task to the task list
    }
    
    return (
        <div className="Header">
            <h1>Simple Kanban</h1>
            <input onChange={handleTaskNameChange} placeholder="New Task Name"></input>
            <button onClick={handleAddTaskClick}>+</button>
            <br/>
            <br/>
        </div>
    )
}
