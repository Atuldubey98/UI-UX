import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className='header-section'>
            <div className="hero-text">
                <span className='hero-text-title'>Listing Application</span>
                <span className='hero-text-subtitle'>Listings</span>
            </div>
            <img src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='hero-img' />
        </div>
    )
}

export default Header