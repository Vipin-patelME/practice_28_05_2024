import { useState } from "react"



const AddTask = ()=>{
    const tasks = [
        "Reading",
        "Playing"
    ]
    const [task, setTask]= useState("")
    const [allTask, setAllTask] = useState(tasks)
    const onNewTask = (e)=>{
        const enteredTask = e.target.value
        setTask(enteredTask)
    }
    const OnAddTask = ()=>{
        const allTasks = tasks.push(task)
        setAllTask(allTasks)
    }
    console.log(task)

    return(
        <>
            <h1>These are our tasks</h1>
            <ul style={{listStyle:"none"}}>
                {
                    allTask.map((task, index)=><li key={index}>{task}</li>)
                }
            </ul>
            <div>
                <label htmlFor= "tsakID">Enter New Task</label>
                <input onChange={onNewTask} type="text" id="tsakID" />
            </div>
            <button type="button" onClick={OnAddTask}>Add Task</button>
        </>
    )
}

export default AddTask