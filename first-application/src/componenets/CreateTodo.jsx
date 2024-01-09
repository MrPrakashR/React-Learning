import React, { useState } from "react"


const CreateTodo = () => {

  let [task,setTask] = useState(0)
  let [input, setInput] = useState("")
  const tasks = ["Task 1","Task 2","Task 3"]
  // const hideButton = false
  // const countTask = () => {
  //   return task == 0 ? "No Task" : "Task : " + task
  // }
  const styles = {
    backgroundColor : "red"
  }

  const handleClick = () => {
    setTask(task++)
    console.log("Add Task")
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <>
        <h1 style={styles}>{task}</h1> 
        <h1>Input : {input}</h1> 
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick} className="btn">Add Task</button>
        <ul>
          {
          tasks.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
        </>
  )
}
export default CreateTodo