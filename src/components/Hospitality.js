import React from 'react';
import CardItem from './CardItem';

function Hospitality() {
  window.scrollTo(0,0);
    return (
      <div className='cards'>
        <h1>Housing</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/one_chest_nut.jpg'
                text='One Chestnut Place Quincy'
                label='Quincy'
                path='/OneChestNut'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/7ink1.jpg'
                text='AC Hotel and 7 Ink block'
                label='Boston'
                path='/hospitalityInkBlock'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/roger2.jpeg'
                text='50 Roger St, Cambridge, MA'
                label='Cambridge'
                path='/hospitalityRoger'
              />
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default Hospitality
