import './App.css';
import Header from './Header';
import Board from './Board';
import { useState } from 'react';

const startingTasks = [
  {
    title: "Example Task 2",
    description: "Lorem Ipsum Dolor",
    priority: "Low"
  },
];

export default function App() {

  const [tasks, setTasks] = useState(startingTasks)
    
  function handleAddTask(title) {
      console.log(title);
    
      const newTask = {
        // the name of the key/prop on the object
              // the text we typed into the input
        title: title,
        // todo add description, priority
        description: description,
        priority: priority
      };

      // copy tasks so a new object 
      const nextTasks = [...tasks];

      nextTasks.push(newTask);
  
      setTasks(nextTasks);
  }
    
  return (
    <div className="main">
        <Header onAddTask={handleAddTask}/>
        <Board tasks={tasks}/>
    </div>
  )
}

// input to add a new task
// editing a task
    // edit title, description, priority
    // move tasks between columns (arrow, dropdown button)
// deleting a task
// columns for kanban with labels
// data driven - useState to keep track of what the tasks are
// localstorage
// archive button

// finish styling cards
// greyed out when done styling

// components to create
    // phaseList

// extra stuff:
// add, edit, delete columns
