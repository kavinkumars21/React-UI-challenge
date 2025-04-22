import React from 'react'
import '../Components/Task/Task.css'
import Dashboard from '../Components/Task/Dashboard'

const Task = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Task Management Dashboard</h1>
        <button 
          style={{backgroundColor: "blueviolet", 
          color: "white", 
          border: "none", 
          borderRadius: "6px", 
          padding: "10px",
          marginBottom: "10px"
        }}>
            Add new task
        </button>
        <Dashboard />
    </div>
  )
}

export default Task
