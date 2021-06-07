import React from 'react';
import CardItem from './CardItem';

function EducationHS() {
  window.scrollTo(0,0);
    return (
        <div className='cards'>
        <h1>High School</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/thsimg1.jpeg'
                text='Tewbury Memorial High School'
                label='TMHS'
                path='/educationPictures'
              />
              <CardItem
                src='/images/crlhs1.jpeg'
                text='Cambridge Rindge and Latin High School'
                label='CRLHS'
                path='/educationCLRHS'
              />
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default EducationHS
