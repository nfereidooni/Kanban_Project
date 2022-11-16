import './style.css';
import { useState } from 'react';

export default function Header( {onAddTask} ) {
  const [taskTitle, setTaskTitle] = useState("")

  function handleTaskTitleChange(event) {
    setTaskTitle(event.target.value)
  }

  function handleAddTaskClick() {
    // append a new task to the task 
    // todo add description, priority
      onAddTask(taskTitle)

      console.log('added', taskTitle);
  }

  return (
    <div className="Header">
      <h1>Simple Kanban</h1>
      <form>
          <label for="title"></label>
          <input 
              onChange={handleTaskTitleChange}
              id="title"
              name="title"
              placeholder="New Task Name"></input>
          <label for="description"></label>
          <input 
              // onChange={handleTaskDescChange}
              id="description"
              name="description"
              rows="1"
              placeholder="Description (Optional)"></input>
          <label for="priority"></label>
          <select
              // onChange={handleTaskPriorityChange}
              id="priority"
              name="priority">
            <option value="Default" selected disabled hidden>Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button onClick={handleAddTaskClick}>+</button>
      </form>
      <br />
      <br />
    </div>
  )
}
