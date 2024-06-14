'use server';
import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi"

const getTopics = async() =>
  {
   try {
     const res = await fetch("http://localhost:3000/api/topics",
       {
         cache:"no-cache"
       }
     )
     if(!res.ok)
      {
        throw new Error("Request failed")
      }
     return res.json()
   } catch (error) {
    console.error(error)
   }
  }



const TopicList = async() => {
   const {topics} = await getTopics()
  return (
    <>
      {topics.map(t => (
        <div key={t._id} className="flex justify-between items-start p-4 border border-slate-300 my-4 px-6 gap-5">
          <div>
            <h2 className='text-2xl font-bold'>{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

;
export default TopicList;

