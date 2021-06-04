import React from 'react'
import CardItem from './CardItem';

function HospitalityInkBlock() {
    return (
        <div className='cards'>
        <h1>Ink Block Boston</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>

            <ul className='cards__items'>
              <CardItem
                src='/images/7ink1.jpg'
                text='AC Hotel and 7 Ink block'
                label='Boston'
                path='/ImgInkOne'
              />
            </ul>

            <ul className='cards__items'>
              
              <CardItem
                src='/images/7ink4.jpg'
                text='Ink block'
                label='Boston'
                path='/ImgInkFour'
              />
            </ul>

            <ul className='cards__items'>   
              <CardItem
                src='/images/7ink2.jpg'
                text='7 Ink (1)'
                label='Boston'
                path='/ImgInkTwo'
              />
            </ul>

              
            <ul className='cards__items'>
              <CardItem
                src='/images/7ink3.jpg'
                text='7 Ink (2)'
                label='Boston'
                path='/ImgInkThree'
              />
              
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default HospitalityInkBlock
