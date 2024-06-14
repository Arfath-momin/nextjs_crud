'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'



function page() {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const  router = useRouter()

  const  handleSubmit = async  (e) => {
    e.preventDefault()
    if(!title || !description)
      {
        alert('title or description is required');
        return;
      }

      try {
        const res = await fetch("http://localhost:3000/api/topics",{
          method:"post",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({title,description})
        })
        router.push("/")
      } catch (error) {
        console.log(error)
      }
  
  }

  return (

    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input onChange={(e)=>setTitle(e.target.value)} className='border border-slate-500 px-8 py-2 '  type="text" placeholder='Topic Title' />
      <input onChange={(e)=>setDescription(e.target.value)} className='border border-slate-500 px-8 py-2 '  type="text" placeholder='Topic Description' />
      <button type='submit' className='bg-green-600 text-white px-8 py-2 w-fit font-bold'>Add Topic</button>

    </form>
  )
}

export default page