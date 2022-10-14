import './App.css';
import Header from './Header';
import Board from './Board';

export default function App() {
  return (
    <div className="main">
        <Header />
        <Board />
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
