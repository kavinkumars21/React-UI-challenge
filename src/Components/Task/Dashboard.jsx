import React from 'react'
import DoToTask from './DoToTask'
import InProgress from './InProgress'
import Done from './Done'

const Dashboard = () => {

    const TaskList = [
        {
            title: "Design task screen",
            priority: "High",
            assignedTo: "Me",
            status: "ToDo"
        },
        {
            title: "Design movie screen",
            priority: "Medium",
            assignedTo: "You",
            status: "InProgress"
        },
        {
            title: "Design user screen",
            priority: "High",
            assignedTo: "You",
            status: "Done"
        },
        {
            title: "Redesign user screen",
            priority: "Low",
            assignedTo: "Not confirmed",
            status: "ToDo"
        },
    ]

    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <DoToTask TaskList = {TaskList} />
            <InProgress TaskList = {TaskList} />
            <Done TaskList = {TaskList} />
        </div>
        
    )
}

export default Dashboard
