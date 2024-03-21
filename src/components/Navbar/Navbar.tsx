import Logo from '@/assets/logo.png'
import Button from '../Button';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

type Props = {
  isTopOfPage: boolean
}

const Navbar = ({ isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const flexBetween = "flex items-center justify-between";
  // used to hide navbar for small screens
  const isAboveMediumScreens = useMediaQuery("(min-width: 1180px")

  // change navbar color if user scrolls
  const navbarBackground = isTopOfPage ? "" : "bg-slate-800 drop-shadow";

  return (
    <nav>
       <div className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-8`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* logo and title */}
          <div className='flex items-center gap-8 w-3/5'>
            {/* Logo */}
              <img src={Logo} alt="logo" className='h-36'/>
            {/* title */}
            <p className='text-3xl font-roboto tracking-wider'>
              Git Gud
            </p>
          </div>

          {/* Right Side */}
          { isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
            {/* Center Right side */}
            <div className={`${flexBetween} gap-16 justify-center text-md`}>
          
              <a href="#home" className='hover:text-secondary-500'>
                Home
              </a>
            
              <a href="#ourcoaches" className='hover:text-secondary-500'>
                Our Coaches
              </a>
            
              <a href="#whyus" className='hover:text-secondary-500'>
                Why Us
              </a>

            </div>

            {/* Buttons right side */}
            <div className={`${flexBetween}`}>
              <Button link="#contactus">Contact Us</Button>
            </div>
          </div>) : ( // small screens
            <button 
              className="rounded-full bg-red-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
            <Bars3Icon className="h-8 w-8 text-white"/>
        </button>
          )} 
          
        </div>
      </div>
      {/* Menu toggle for small screens */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-slate-800 drop-shadow-xl'>
          {/* Close icon */}
          <div className='flex justify-end my-10 mr-10'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-8 w-8 text-gray-400"/>
            </button>
          </div>
          {/* Menu items */}
          <div className='ml-[33%] flex flex-col justify-center gap-10 text-2xl'>
                <a href="#home" className='hover:text-secondary-500'>
                  Home
                </a>
                <a href="#ourcoaches" className='hover:text-secondary-500'>
                  Our Coaches
                </a>
                <a href="#whyus" className='hover:text-secondary-500'>
                  Why Us
                </a>
          </div>
        </div>
      )}
      
    </nav>
  )
}

export default Navbar