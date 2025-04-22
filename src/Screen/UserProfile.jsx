import React from 'react'
import '../Components/UserProfile/User.css'

const UserProfile = () => {
    return (
        <div className='main'>
            <div className="profile-card">
                <img src="https://i.pravatar.cc/150?img=12" alt="User Avatar" className="avatar" />
                    <div className="name">Jane Doe</div>
                    <div className="role">Frontend Developer</div>
                    <div className="info">
                        <p><strong>Email:</strong> jane.doe@example.com</p>
                        <p><strong>Location:</strong> San Francisco, CA</p>
                    </div>
                    <a href="#" className="btn">Contact</a>
            </div>
        </div>
    )
}

export default UserProfile
