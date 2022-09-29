import './style.css'

export default function TaskCard({ title, description, priority }) {
    let priorityClassname = priority.toLowerCase() + "Priority"
    console.log(priorityClassname)
    return (
        
        <div className="taskCard">
            <h2 className="taskTitle">{title}</h2>
            <p className="taskDesc">{description}</p>
            <p className={`taskPriority ${priorityClassname}`}>{priority}</p>
        </div>
    )
}
