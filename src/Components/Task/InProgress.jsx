import React from 'react'
import TaskCard from './TaskCard'
import './Task.css'

const InProgress = ({TaskList}) => {
    return (
        <div className="column">
            <h4>In Progress</h4>
            {
                TaskList.map((task) => (
                    <>
                        {
                            task.status === "InProgress" &&
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

export default InProgress
