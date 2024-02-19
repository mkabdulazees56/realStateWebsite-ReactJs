import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <section className='h-wrapper'>
                <div className="flex center paddings innerWidth h-container">
                    <img src="./logo.png" alt="logo" width={100} />
                    <div className="h-menu">
                        <a href="">Residencies</a>
                        <a href="">Our Values</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <div className="button"></div>
                        <a href="">Contact</a>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Header
