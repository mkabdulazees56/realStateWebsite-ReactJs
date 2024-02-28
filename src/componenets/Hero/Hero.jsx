import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <div>
            <section className='hero-wrapper'>
                <div className='paddings innerWidth flexCenter hero-container'>
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                        <div className="orange-circle">
                        </div>
                            <h1>Discover<br/>
                                Most Suitable<br/>
                                Property</h1>
                        </div>
                        <div className="flexColStart hero-des">
                            <span className='secondaryText '>Find a variety of properties that suit you very easilty</span>
                            <span className='secondaryText '>Forget all difficulties in finding a residence for you</span>
                        </div>

                        <div className="flexCenter search-bar">

                            <HiLocationMarker color = "var(--blue)" size = {25}/>
                            <input type="text" />
                            <button className = "button">Search </button>

                        </div>
                        <div className="flexCenter stats">
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={8800} end={9005} duration={4}/>
                                    <span>+</span>
                                </span>
                                <span className='secondaryText '>Premium Products</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={1056} end={2105} duration={4}/>
                                    <span>+</span>
                                </span>
                                <span className='secondaryText '>Happy Customer</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={1} end={27} duration={4}/>
                                    <span>+</span>
                                </span>
                                <span className='secondaryText '>Awards Winning</span>
                            </div>
                        </div>


                    </div>
                    <div className="flexCenter hero-right">
                        <div className='image-container'>
                            <img src="./hero-image.png" alt="hero image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
