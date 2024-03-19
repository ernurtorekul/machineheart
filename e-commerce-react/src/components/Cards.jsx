import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check for your favourite album</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src='images/mgroup.jpg' text='Speak in Tongues' label='Album' path='/albums'/>
                    <CardItem src='images/mc1.webp' text='People Change' label='Album' path='/albums'/>
                </ul>
                <ul className="cards__items">
                    <CardItem src='images/m3.jpg' text='Stonecold' label='Album' path='/albums'/>
                    <CardItem src='images/malbum.jpg' text='Altar' label='Album' path='/albums'/>
                    <CardItem src='images/m2.jpg' text='Shelter' label='Album' path='/albums'/>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;