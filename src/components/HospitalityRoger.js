import React from 'react'
import CardItem from './CardItem';

function HospitalityRoger() {
  window.scrollTo(0,0);
    return (
        <div className='cards'>
        <h1>50 Roger St, Cambridge, MA</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/roger1.jpeg'
                text='50 Roger St, Cambridge, MA'
                label='Cambridge'
                path='/roger1'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/roger2.jpeg'
                text='50 Roger St, Cambridge, MA'
                label='Cambridge'
                path='/roger2'
              />
            </ul>

            <ul className='cards__items'>
              
              <CardItem
                src='/images/roger3.jpeg'
                text='50 Roger St, Cambridge, MA'
                label='Cambridge'
                path='/roger3'
              />
            </ul>

            <ul className='cards__items'>   
              <CardItem
                src='/images/roger4.jpeg'
                text='50 Roger St, Cambridge, MA'
                label='Cambridge'
                path='/roger4'
              />
            </ul>

              
            <ul className='cards__items'>
              <CardItem
                src='/images/roger5.jpeg'
                text='50 Roger St, Cambridge, MA'
                label='Cambridge'
                path='/roger5'
              />
              
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/roger6.jpeg'
                text='50 Roger St, Cambridge, MA'
                label='Cambridge'
                path='/roger6'
              />
              
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/roger7.jpeg'
                text='50 Roger St, Cambridge, MA'
                label='Cambridge'
                path='/roger7'
              />
              
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default HospitalityRoger
