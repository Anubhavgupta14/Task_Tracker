import React,{useRef} from "react"
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
    // dragitem & dragoveritem
    const dragitem = useRef(null)
    const DragOverItem = useRef(null)
    
    //Add Task
    const addTask = (x)=>{
      const id = Math.floor(Math.random()*10000)+1
      const newTask = {id,...x}
      setTasks([...tasks,newTask])
    }

    // Delete Task
    const deleteTask = (id)=>{
      setTasks(tasks.filter((task)=>task.id!==id))
    }

    // Toggle Reminder
    const toggleReminder = (id)=>{
      setTasks(tasks.map((x)=>x.id===id ? {...x,reminder: !x.reminder}:x))
    }

    //Drag Event
    // const onDragStart = (e, index)=>{
    //   console.log('Drag Started',index)
    // }
    // const onDragEnter = (e, index)=>{
    //   console.log('Drag Enter',index)
    // }

    // Handle sorting
    const handleSort=()=>{
      // dublicate items
      let details = [...tasks]
      const draggedItemContent=details.splice(dragitem.current,1)[0]

      // switch the position
      details.splice(DragOverItem.current,0,draggedItemContent)

      // reset
      dragitem.current=null
      DragOverItem.current=null

      // update
      setTasks(details)
      console.log('ok')
    }

    // const onDragEnd = (e)=>{
    //   console.log('Drag End')
    // }

  return (
    <div className='container'>
      <Header title='Task Tracker' onToggleAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAddtask={addTask}/>}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} dragitem={dragitem} DragOverItem={DragOverItem} handleSort={handleSort}/> : 'No Tasks to Show'}
    </div>
  )
}

export default App
