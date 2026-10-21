'use client'
import React from 'react'
import { useParams } from 'next/navigation';

const page = () => {

    const params= useParams() //useParams is a client-side component so we have to write 'use client' to use it 

  return (
    <div>
      <h1>{params.courseId} course</h1>
    </div> 
  )
}

export default page
