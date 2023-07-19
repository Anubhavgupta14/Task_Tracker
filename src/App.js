import { useState } from "react"
import Header from './components/header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id:2,
        text:'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id:3,
        text:'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    },
])
    //Add Task
    const addTask = (x)=>{
      const id = Math.floor(Math.random()*10000)+1
      const newTask = {id,...x}
      setTasks([...tasks,newTask])
    }

    // Delete Task
    const deleteTask = (id)=>{
      setTasks(tasks.filter((task)=>task.id!=id))
    }

    // Toggle Reminder
    const toggleReminder = (id)=>{
      setTasks(tasks.map((x)=>x.id===id ? {...x,reminder: !x.reminder}:x))
    }


  return (
    <div className='container'>
      <Header title='Task Tracker' onToggleAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAddtask={addTask}/>}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
    </div>
  )
}

export default App
