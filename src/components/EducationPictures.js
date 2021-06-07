import React from 'react';
import CardItem from './CardItem';

function EducationPictures() {
  window.scrollTo(0,0);
    return (
        <div className='cards'>
        <h1>High Schools</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/thsimg1.jpeg'
                text='Tewksbury Memorial High School'
                label='image-1'
                path='/ImgthsOne'
              />
              <CardItem
                src='/images/thsimg2.jpeg'
                text='Tewksbury Memorial High School'
                label='image-2'
                path='/ImgthsTwo'
              />
            </ul>

            <ul className='cards__items'>
              
              <CardItem
                src='/images/thsimg3.jpeg'
                text='Tewksbury Memorial High School'
                label='image-3'
                path='/ImgthsThree'
              />
              <CardItem
                src='/images/thsimg4.jpeg'
                text='Tewksbury Memorial High School'
                label='image-4'
                path='/ImgthsFour'
              />
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default EducationPictures
