import Task from './Task'
const Tasks = ({tasks, onDelete,onToggle,dragitem,DragOverItem,handleSort}) => {
  return (
    <>
      {tasks.map((x,index)=>(
      <Task key={index} task={x} onDelete={onDelete} onToggle={onToggle} dragitem={dragitem} DragOverItem={DragOverItem} handleSort={handleSort} index={index} />
      ))}
    </>
  )
}

export default Tasks
