import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex gap-5 justify-center underline items-center py-4'>
        <Link href='/product/men'> Mens Collection </Link>
        <Link href='/product/women'> Womens Collection </Link>
      </div>
      <h1 className='text-3xl underline'>PRODUCT page</h1>
    </div>
  )
}

export default page
