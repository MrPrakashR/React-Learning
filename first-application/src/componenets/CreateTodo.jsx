import React from "react"


const CreateTodo = () => {
  const task = 2
  const hideButton = false
  const countTask = () => {
    return task == 0 ? "No Task" : "Task : " + task
  }
  const styles = {
    backgroundColor : "red"
  }

  return (
    <>
        <h1 style={styles}>{countTask()}</h1> 
        <button className="btn" disabled={hideButton}>Add Task</button>
    </>
  )
}
export default CreateTodo