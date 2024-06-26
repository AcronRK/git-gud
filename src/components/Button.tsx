import React from 'react'

type Props = {
    children: React.ReactNode,
    link:string,
}

const Button = ({children, link}: Props) => {
  return (
    <a className='rounded-md px-10 py-3 bg-red-500 transition duration-500 hover:bg-red-50  text-lg'
        href={`${link}`}
    >
        {children}
    </a>

  )
}

export default Button