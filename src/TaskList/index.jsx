import './style.css';
import TaskCard from '../TaskCard';
import { useState } from 'react';

export default function TaskList( {tasks} ) {
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
