import React from 'react';
import './Contact.css';
import { MdCall, MdMessage, MdVideoCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
const Contact = () => {
    return (
        <section className='flexCenter c-wrapper' id='contact'>
            <div className="paddings innerWidth flexCenter c-container">
                {/* left */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contact Us</span>
                    <span className="primaryText">Easy to contact us</span>
                    <span className="secondaryText">
                        We are always ready to help by providing the best services for you.
                        <br />
                        We believe a good place to live can make your life better.
                    </span>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>0253857931</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdMessage size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>0253857931</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdMessage size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>0253857931</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Message Now
                            </div>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdVideoCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>0253857931</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Video Call Now
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* right */}

                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>


                </div>

            </div>


        </section>
    )
}

export default Contact
