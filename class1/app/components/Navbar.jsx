import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex text-xl bg-blue-900 mb-10 justify-between items-center px-6 py-3'>
      <h3>Pranjal</h3>
      <div className='flex gap-6'>
        <Link href='/'> Home </Link>
        <Link href='/about'> About </Link>
        <Link href='/product'> Product </Link>
        <Link href='/courses'> Courses </Link>
      </div>
    </div>
  )
}

export default Navbar
