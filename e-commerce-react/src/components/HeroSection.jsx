import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='heroContainer'>
        <video src='/video/machineheart_compressed.mp4' autoPlay loop muted/>
        <h1>Machineheart</h1>
        <p>Discover More</p>
        <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'   
            >
            BUY TICKETS
            </Button>
            <Button
                className='btns'
                buttonStyle = 'btn--primary'
                buttonSize = 'btn--large'
                
            >
            WATCH THE CLIP <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  );
}


export default HeroSection;