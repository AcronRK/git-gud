import React from 'react'
import faker from "@/assets/faker.png"
import Button from '../Button';

type Props = {}

const Home = (props: Props) => {
  return (
    <section id="home" className='w-fill gap-16 bg-gray-20 py-10 md:h-ful md:pb-0'>
      <div className='md:flex mx-auto mt-44 justify-center items-center w-5/6'>
        {/* left side */}
        <div className='z-10 basis-3/5'>
          {/* paragraph */}
          <div className='relative'>
            <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
              <h1 className='text-7xl w-full text-red-500 bold font-bold pt-5'>
              GIT GUD TODAY!
              </h1>
            </div>
            <p className='mt-10 text-2xl'>
              Learn from the best of the best players in the world!
            </p>
          </div>
          {/* join button */}
          <div className="mt-10">
              <Button link="#contactus">Join Now</Button>
          </div>
        </div>


        {/* right side image */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md-justify-items-end'>
          <img src={faker} alt="faker"/>
        </div>
      </div>
    </section>
  )
}

export default Home