import React from 'react'
import Link from 'next/link'

const Header = () => {

  return (
    <div className= 'h-16 px-5 text-yellow-50 bg-yellow-400 flex items-center justify-between'>
    <h2>Logo</h2>
        <div className='flex gap-10'>
        <Link href="/About">About</Link>
        <Link href="/Product">Product</Link>
        <Link href="/Courses">Courses</Link>
        </div>
    </div>
  )
}

export default Header