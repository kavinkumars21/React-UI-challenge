import React from 'react'
import './Task.css'

const TaskCard = ({title, priority, assignedTo }) => {
    
    const taskPriority = priority.toLowerCase()
    
    return (
        <div>
            <div className="task-card">
                <div className="task-title">{title}</div>
                <div className="meta">
                    <span className='priority' id={taskPriority}>{priority}</span>
                    Assigned to: {assignedTo}
                </div>
            </div>
        </div>
    )
}

export default TaskCard
