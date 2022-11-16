import './style.css';
import TaskList from '../TaskList';

export default function Board( {tasks} ) {
    
    return (
        <div className="Board">
            <TaskList tasks={tasks} />
        </div>
    )
}
