import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';


const Header = () => {
    const [menuOpenned, setMenuOppened] = useState(false);

    const getMenuStyle = (menuOpenned) => {
        if (document.documentElement.clientWidth <= 800) {
            return {
                right: !menuOpenned && '-100%'
            };
        }
    };

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings h-container innerWidth">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => { setMenuOppened(false) }}>
                    <div className="flexCenter h-menu" style={getMenuStyle(menuOpenned)}>
                        <a href="#residencies">Residencies</a>
                        <a href="#ourvalue">Our Values</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#getstarted">Get Started</a>
                        <button className="button"><a href="#contact">Login</a></button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon " onClick={() => setMenuOppened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
};

export default Header;
