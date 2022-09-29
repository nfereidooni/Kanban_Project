import './App.css'
import TaskCard from './TaskCard'

export default function App() {
  return (
    <div className="main">
      <TaskCard title={"Brush Teeth"} description={"Use toothpaste"} priority={"High"} />
      <TaskCard title={"Comb Hair"} description={"Comb out damp hair"} priority={"Medium"} />
      <TaskCard title={"Moisturize"} description={"Aveeno lotion"} priority={"High"} />
      <TaskCard title={"Fold Laundry"} description={"Whites only today"} priority={"Low"}/>
    </div>
  )
}
