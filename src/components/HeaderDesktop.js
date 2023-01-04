import React from 'react'
import ImageCarousel from './ImageCarousel'
import NavigationDesktop from './NavigationDesktop'

const HeaderDesktop = () => {
  return (
    <>    <div className='container mx-auto px-4 pb-6'>
    <NavigationDesktop/>
    <div className='hero-word'>
        <h1 className='text-center leading-snug clash font-bold text-8xl py-4'>Photography is poetry & beautiful untold stories</h1>
        <p className='text-center satoshi text-3xl py-6'>Flip through more than 10,000 vintage shots, old photograghs, historic <br/> images and captures seamlessly in one place. Register to get top access.</p>
    </div>
    </div>
    <ImageCarousel/>
    </>

  )
}

export default HeaderDesktop