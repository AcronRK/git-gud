import Logo from '@/assets/logo.png'
import Button from '../Button';

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
       <div className={`${flexBetween} fixed top-0 z-30 w-full py-8`}>
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
          <div className={`${flexBetween} w-full`}>
            {/* Center Right side */}
            <div className={`${flexBetween} gap-16 justify-center`}>
              <ul className='flex gap-16 text-lg'>
                <li>
                  <a href="#howitworks" className='hover:text-secondary-500'>
                    How It Works
                  </a>
                </li>

                <li>
                  <a href="#ourcoaches" className='hover:text-secondary-500'>
                    Our Coaches
                  </a>
                </li>

                <li>
                  <a href="#whyus" className='hover:text-secondary-500'>
                    Why Us
                  </a>
                </li>

              </ul>
            </div>

            {/* Buttons right side */}
            <div className={`${flexBetween}`}>
              <Button link="#contacus">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar