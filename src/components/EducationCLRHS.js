import React from 'react';
import CardItem from './CardItem';

function EducationCLRHS() {
    return (
        <div className='cards'>
        <h1>High Schools</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/crlhs1.jpeg'
                text='Cambridge and Rindge and Latin High School'
                label='clrhs1'
                path='/clrhs1'
              />
              <CardItem
                src='/images/clrhs2.jpeg'
                text='Cambridge and Rindge and Latin High School'
                label='clrhs2'
                path='/clrhs2'
              />
            </ul>

            <ul className='cards__items'>
              
              <CardItem
                src='/images/clrhs3.jpeg'
                text='Cambridge and Rindge and Latin High School'
                label='clrhs3'
                path='/clrhs3'
              />
              <CardItem
                src='/images/clrhs4.jpeg'
                text='Cambridge and Rindge and Latin High School'
                label='clrhs4'
                path='/clrhs4'
              />
            </ul>

            <ul className='cards__items'>
              
              <CardItem
                src='/images/clrhs5.jpeg'
                text='Cambridge and Rindge and Latin High School'
                label='clrhs5'
                path='/clrhs5'
              />
              <CardItem
                src='/images/clrhs6.jpeg'
                text='Cambridge and Rindge and Latin High School'
                label='clrhs6'
                path='/clrhs6'
              />
            </ul>

            <ul className='cards__items'>
              
              <CardItem
                src='/images/clrhs7.jpeg'
                text='Cambridge and Rindge and Latin High School'
                label='clrhs7'
                path='/clrhs7'
              />
              <CardItem
                src='/images/clrhs8.jpeg'
                text='Cambridge and Rindge and Latin High School'
                label='clrhs8'
                path='/clrhs8'
              />
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default EducationCLRHS
