import React from 'react'
import TaskCard from './TaskCard'
import './Task.css'

const Done = ({TaskList}) => {
    return (
        <div className="column">
            <h4>Done</h4>
            {
                TaskList.map((task,index) => (
                    <>
                        {
                            task.status === "Done" &&
                            <TaskCard
                                key={index}
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

export default Done
