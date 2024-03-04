import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className='flexCenter f-wrapper'>
            <div className="paddings innerWidth flexCenter f-conatainer">
                {/* left side footer
             */}

                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="logo" width={120} />
                    <span className='secondaryText'>Our vision is to make all people<br />
                        the best place to live for them.</span>
                </div>

                <div className="flexColStart f-right">
                    <span className='primaryText'>
                        Information
                    </span><span className='secondaryText'>
                        Kekirawa,Srilanka
                    </span>

                    <div className="flexCenter f-menu">
                        <span>Properties</span>Services<span>Products</span><span>About Us</span>
                    </div>

                </div>

            </div>
            <div className="flexCenter copyright">
                <p>Copyright &copy; 2024 Abdul Azees. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default Footer
