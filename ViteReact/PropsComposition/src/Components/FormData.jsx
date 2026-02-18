import React, { useState } from 'react'
import ToDoDisplay from './ToDoDisplay'

function FormData() {
  const [inputValue, setInputValue] = useState({ task: "", desc: ""});
  const [tasks, setTasks] = useState([]);
  function handleChange(e) {
    setInputValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue) {
      let newTasks = {
        id: Math.trunc(Math.random() * 100),
        task: inputValue.task,
        desc: inputValue.desc,
        isChecked: false
      }
      setTasks(prev => ([...prev, newTasks]));
      setInputValue({ task: "", desc: "" });
    } else {
      alert("Enter valid input! ")
    }


  }

function handleDelete(id) {
  setTasks(prev => prev.filter(task => task.id !== id));
}

function handleToggle(id) {
  setTasks(prev =>prev.map(task =>task.id === id ? { ...task, isChecked: !task.isChecked } : task));
}



  return (
    <>
      <form className="max-w-md mx-auto mt-8 p-6  f gap-2.5 bg-gray-50 rounded-lg shadow-md" onSubmit={handleSubmit}>
        

          <input type="text" className="w-full px-4 py-2 border border-gray-300 font-mono rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder='Add Your Task' name='task' value={inputValue.task} onChange={handleChange} />
          <input type="text" className="w-full px-4 py-2 my-3 border border-gray-300 font-mono rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder='Add Your Description' name='desc' value={inputValue.desc} onChange={handleChange} />
        

        <button className=" px-4 py-2 bg-amber-400 text-white rounded-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-700">Add</button>
      </form>

      <div className="max-w-md mx-auto mt-8 p-6  bg-gray-50 rounded-lg shadow-md">
        <h1 className="font-mono mb-4 text-start text-amber-500">Your Added Tasks</h1>
        <ul className="list-disc list-inside  ">
          {tasks.map((task) => {
            return (<ToDoDisplay taskobj={task} onDelete={handleDelete} onToggle={handleToggle}  />)
          })}

        </ul>
      </div>
    </>

  )
}

export default FormData