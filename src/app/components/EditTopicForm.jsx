'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          newTitle,
          newDescription
        })
      });

      console.log(res);

      if (!res.ok) {
        throw new Error("Error updating topics");
      }

      router.push("/");
      router.refresh()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder={title}
        value={newTitle}
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder={description}
        value={newDescription}
      />
      <button type='submit' className='bg-green-600 text-white px-8 py-2 w-fit font-bold'>Update Topic</button>
    </form>
  );
}

export default EditTopicForm;
