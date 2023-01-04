import React from 'react'
import search from '../assets/headerImage/search.svg'
import cart from '../assets/headerImage/cart.svg'
import bell from '../assets/headerImage/Vectorbell.svg'

const NavigationDesktop = () => {
  return (

    <div className='w-full flex justify-between py-8 items-center'>
        <div className='cursor-pointer logo stix select-none font-semibold text-3xl stix'>ARTSY.</div>
        <div className=''>
            <nav className='satoshi'>
                 <ul className='text-2xl font-normal flex'>
                    <li className='p-6 cursor-pointer mr-2 underline'>Home</li>
                    <li className='p-6 cursor-pointer mr-2'>Auctions</li>
                    <li className='p-6 cursor-pointer mr-2'>Marketplace</li>
                    <li className='p-6 cursor-pointer mr-2'>Drops</li>
                </ul>
            </nav>
        </div>
        <div className='flex'>
            <span id='search-button' className='pr-6 '>
                <img width={24} src={search} alt="search button"/>
            </span>
            <span id='cart' width={24} className="relative before:content-[' '] before:w-2 before:h-2 before:bg-red-500 before:absolute before:-top-2 before:-right-1 before:rounded-full before:flex before:justify-center before:items-center ">
                <img width={24} src={cart} alt="cart button"/>
            </span>
            <span className='pl-6'> <img width={24} src={bell} alt="bell button"/></span>
        </div>
    </div>
  )
}

export default NavigationDesktop