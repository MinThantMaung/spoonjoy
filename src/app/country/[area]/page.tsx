'use client'
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {
    const params = useParams();
    const area = params.area;
    
  return (
    <div>{area}</div>
  )
}

export default page