'use client'
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
    const params = useParams();
    const area = params.area;
    
  return (
    <div>{area}</div>
  )
}

export default Page