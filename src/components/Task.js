import {FaTimes} from 'react-icons/fa'
const Task = ({task,onDelete,onToggle,dragitem,DragOverItem,handleSort,index}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onToggle(task.id)} draggable onDragStart={(e)=>(dragitem.current=index)} onDragEnter={(e)=>(DragOverItem.current=index)} onDragEnd={handleSort} onDragOver={(e)=>e.preventDefault()}>
        <h3>{task.text} <FaTimes onClick={()=> onDelete(task.id)} style={{color:'black', cursor:'pointer'}}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
