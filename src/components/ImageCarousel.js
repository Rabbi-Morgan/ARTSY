import React, { useEffect, useState } from 'react'
import hand from '../assets/headerImage/carohand.png'
import girl from '../assets/headerImage/carogirl.png'
import handTouch from '../assets/headerImage/carotouch.png'
import kanga from '../assets/headerImage/carokanga.png'
import face from '../assets/headerImage/caroface.png'

const ImageCarousel = () => {
    const caroImages1 = [hand, girl, handTouch, kanga, face]
    const caroImages2 = [girl, handTouch, kanga, face, hand]
    const caroImages3 = [handTouch, kanga, face, hand, girl]
    const caroImages4 = [kanga, face, hand, girl, handTouch]
    const caroImages5 = [girl, handTouch, kanga, face, hand]
    const [index, seIndex] = useState(0)

    const increment = ()=> {
        seIndex(index=>(index +1 )% caroImages1.length)
        console.log(index)
    } 
    const createInterval = ()=>  setInterval(increment, 2000)
    
    useEffect(()=> {
        const interval = createInterval()
      
        
    return () => clearInterval(interval)
  }, [index]);
  return (
    <div className='carousel_gen_cont flex items-center'>
        <div className='caro_container px-4 overflow-hidden self-end flex items-center'>
            <img key={caroImages1[index]} className='px-2' src={caroImages1[index]} alt=''/>
        </div>
        <div className='caro_container px-4 overflow-hidden self-start flex items-center'>
           <img key={caroImages2[index]} className='px-2' src={caroImages2[index]} alt=''/>
        </div>
        <div className='caro_container px-4 overflow-hidden self-center  flex items-center'>
            <img key={caroImages3[index]} className='px-2' src={caroImages3[index]} alt=''/>
        </div>
        <div className='caro_container px-4 overflow-hidden flex items-center'>
            <img key={caroImages4[index]} className='px-2' src={caroImages4[index]} alt=''/>
        </div>
        <div className='caro_container px-4 overflow-hidden flex items-center'>
            <img key={caroImages5[index]} className='px-2' src={caroImages5[index]} alt=''/>
        </div>
    </div>
  )
}

export default ImageCarousel