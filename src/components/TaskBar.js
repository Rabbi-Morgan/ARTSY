import React, {useState } from 'react'
import hamburger from '../assets/headerImage/hamburger.svg'
import search from '../assets/headerImage/search.svg'
import cart from '../assets/headerImage/cart.svg'
import Navigation from './Navigation'

const TaskBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const hamburgerHandler = ()=> {
        setIsOpen((isOpen)=> !isOpen)
        console.log(isOpen)
    }
    // useEffect(()=>{
    //     // hamburgerHandler()
    // },[isOpen])
  return (
    <div className='flex py-6 justify-between'>
        {isOpen&&<Navigation isOpen={hamburgerHandler}/>}
        <div><img onClick={hamburgerHandler} id='hamburger' src={hamburger} alt="hamburger toggle bar" title="toggle"/></div>
        <div className='cursor-pointer font-semibold select-none text-xl stix' title="logo">ARTSY.</div>
        <div className='flex '>
            <span id='search-button' className='pr-4 '>
                <img src={search} alt="search button"/>
            </span>
            <span id='cart' className="relative before:content-[' '] before:w-2 before:h-2 before:bg-red-500 before:absolute before:-top-2 before:-right-1 before:rounded-full before:flex before:justify-center before:items-center">
                <img src={cart} alt="cart button"/>
            </span>
        </div>
    </div>
  )
}

export default TaskBar