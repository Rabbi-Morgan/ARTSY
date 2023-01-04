import React from 'react'
import cancel from '../assets/headerImage/cancel.svg'
import messag from '../assets/headerImage/Vectormessag.png'
import { bounce } from 'react-animations'
import Radium, {StyleRoot} from 'radium'

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

const Navigation = (props) => {
  return (
    <div className='bg-white z-50 py-6 px-4 flex-col fixed flex justify-between top-0 left-0 w-full h-screen'>
      <div className='tj_top_cont'>
        <div className='tj-top flex justify-between '>
            <div className='cursor-pointer logo stix select-none font-semibold text-xl stix'>ARTSY.</div>
            <div className='cursor-pointer cancel_l' onClick={props.isOpen}><img src={cancel} alt='close navigation' title='close'/></div>
        </div>
    <nav className='satoshi mt-10'>
      <ul className='text-2xl font-medium'>
        <li className='py-6'>Home</li>
        <li className='py-6'>Auctions</li>
        <li className='py-6'>Marketplace</li>
        <li className='py-6'>Drops</li>
      </ul>
    </nav>
    </div>
    <div className='tj_bottom_cont'>
        <StyleRoot>
      <div style={styles.bounce} className='float-right w-16 shadow-md shadow-blue-700 h-16 p-4 flex justify-center items-center rounded-full bg-blue-700'>
        <img src={messag} alt='message icon' title='send message'/>
          </div>
          </StyleRoot>
    </div>
    </div>
  )
}

export default Navigation;