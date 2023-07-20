import React, { useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import Header from './components/header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  // dragitem & dragoveritem
  const dragitem = useRef(null)
  const DragOverItem = useRef(null)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // fetch tasks 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }


  // fetch task 
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


  //Add Task
  const addTask = async (x) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(x)
    })

    const data = await res.json()
    setTasks([...tasks, data])



    // const id = Math.floor(Math.random()*10000)+1
    // const newTask = {id,...x}
    // setTasks([...tasks,newTask])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()


    setTasks(tasks.map((x) => x.id === id ? { ...x, reminder: data.reminder } : x))
  }

  //Drag Event
  // const onDragStart = (e, index)=>{
  //   console.log('Drag Started',index)
  // }
  // const onDragEnter = (e, index)=>{
  //   console.log('Drag Enter',index)
  // }

  // Handle sorting
  const handleSort = () => {
    // dublicate items
    let details = [...tasks]
    const draggedItemContent = details.splice(dragitem.current, 1)[0]

    // switch the position
    details.splice(DragOverItem.current, 0, draggedItemContent)

    // reset
    dragitem.current = null
    DragOverItem.current = null

    // update
    setTasks(details)
    console.log('ok')
  }

  // const onDragEnd = (e)=>{
  //   console.log('Drag End')
  // }

  return (
    <Router>
      <div className='container'>
        <Header title='Task Tracker' onToggleAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
          <Route path='/'
            element={
              <>
                {showAddTask && <AddTask onAddtask={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} dragitem={dragitem} DragOverItem={DragOverItem} handleSort={handleSort} /> :
                  'No Tasks to Show'}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
