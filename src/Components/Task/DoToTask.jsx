import React from 'react'
import TaskCard from './TaskCard';
import './Task.css'

const DoToTask = ({TaskList}) => {
    
    return (
        <div className="column">
            <h4>To Do</h4>
            {
                TaskList.map((task) => (
                    <>
                        {
                            task.status === "ToDo" &&
                            <TaskCard
                                title={task.title}
                                priority={task.priority}
                                assignedTo={task.assignedTo}
                            />
                        }
                    </>
                ))
            }
        </div>
    )
}

export default DoToTask
