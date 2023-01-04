import React from 'react'
import TaskBar from './TaskBar'
import frontImage from '../assets/headerImage/firstimg.png'
import nextImage from '../assets/headerImage/secondimg.png'
import lastImage from '../assets/headerImage/lastimg.png'
import styles from './Header.module.css'


const Header = (props) => {
  return (
    <div className='container mx-auto px-4'>
        <TaskBar/>
        <div className="leading-10 clash font-medium text-center text-3xl py-4">
            <h2 >
                Photography is poetry and beautiful untold stories
            </h2>
        </div>
        <div className='text-center satoshi '>
            <p>
                Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.
            </p>
        </div>
        <div className='flex justify-center w-full'>
        <div className='max-w-7xl w-80 mt-8 p-6 py-10 relative'>
            <img className={` ${styles.blue_drop} z-30 absolute top-1 left-0 scale-95 ` } src={frontImage} alt='hero'/>
            <img className={` ${styles.red_drop} absolute top-0 left-0 scale-105 ` } src={nextImage} alt='hero'/>
            <img className={` ${styles.light_red_drop} absolute top-0 left-0 scale-105 ` } src={lastImage} alt='hero'/>
        </div>
        </div>
    </div>
  )
}

export default Header