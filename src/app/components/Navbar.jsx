import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
   <nav className='flex justify-between items-center px-6 py-3 bg-slate-700'>
    <Link href={"/"} className='text-white font-bold'>CodeWIthArfath</Link>
    <Link href={"/addTopic"} className='bg-white p-2'>Add Topic</Link>
   </nav>
  )
}

export default Navbar