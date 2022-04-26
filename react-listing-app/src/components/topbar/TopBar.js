import React from 'react'
import './TopBar.css'
const TopBar = () => {
    return (
        <div className='topbar'>
            <div className="topbar-left">
                <i className="topbar-social-icon fab fa-instagram"></i>
                <i className="topbar-social-icon fab fa-facebook"></i>
                <i className="topbar-social-icon fab fa-twitter"></i>
                <i className="topbar-social-icon fab fa-likedin"></i>
            </div>
            <div className="topbar-center">
                <ul className="topbar-list">
                    <li className="topbar-list-item">Home</li>
                    <li className="topbar-list-item">About</li>
                    <li className="topbar-list-item">Contact</li>
                    <li className="topbar-list-item">Create Listing</li>
                    <li className="topbar-list-item">Logout</li>
                </ul>
            </div>
            <div className="topbar-right">
               <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="profile" className="topbar-profile-pic" /> 
               <i className="topbar-search fas fa-search"></i> 
            </div>

        </div>
    )
}

export default TopBar