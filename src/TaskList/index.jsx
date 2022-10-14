import './style.css';
import TaskCard from '../TaskCard';
import { useState } from 'react';

const startingTasks = [
  {
    title: "Example Task 1",
    description: "Lorem Ipsum Dolor",
    priority: "Low"
  },
  {
    title: "Example Task 2",
    description: "Lorem Ipsum Dolor",
    priority: "High"
  },
  {
    title: "Example Task 3",
    description: "Lorem Ipsum Dolor",
    priority: "Low"
  },
  {
    title: "Example Task 4",
    description: "Lorem Ipsum Dolor",
    priority: "Medium"
  },
  {
    title: "Example Task 5",
    description: "Lorem Ipsum Dolor",
    priority: "High"
  },
];

export default function TaskList() {

  const [tasks, setTasks] = useState(startingTasks)

  return (
    <div className="TaskList">
      {tasks.map(function(task) {
        return <TaskCard title={task.title} description={task.description} priority={task.priority} />
      })}
    </div>
  )
}

      // <TaskCard title={"Brush Teeth"} description={"Use toothpaste"} priority={"High"} />
      // <TaskCard title={"Comb Hair"} description={"Comb out damp hair"} priority={"Medium"} />
      // <TaskCard title={"Moisturize"} description={"Aveeno lotion"} priority={"High"} />
      // <TaskCard title={"Fold Laundry"} description={"Whites only today"} priority={"Low"} />
