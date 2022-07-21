import React from 'react'
import './SideBar.css'
const SideBar = () => {
    return (
        <div className='sidebar-section'>
            <div className="sidebar-subsection">
                <span className='sidebar-title'>about me</span>
                <img className='sidebar-image' src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sidebar-xyz" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptates, distinctio odio blanditiis necessitatibus magnam! Dolor itaque, obcaecati odit maiores quia veritatis cupiditate voluptates modi!</p>
            </div>
            <div className="sidebar-subsection">
                <span className='sidebar-title'>categories</   span>
                <ul className='sidebar-categories'>
                    <li className="sidebar-category">Buy</li>
                    <li className="sidebar-category">Sell</li><li className="sidebar-category">Rent</li><li className="sidebar-category">Commercial</li><li className="sidebar-category">Pvt</li>
                </ul>
            </div>
            <div className="sidebar-subsection">
                <span className='sidebar-title'>follow us on</   span>
                <div className="sidebar-social-icons"> <i className="sidebar-social-icon fab fa-instagram"></i>
                    <i className="sidebar-social-icon fab fa-facebook"></i>
                    <i className="sidebar-social-icon fab fa-twitter"></i>
                    <i className="sidebar-social-icon fab fa-likedin"></i></div>
            </div>
        </div>
    )
}

export default SideBar