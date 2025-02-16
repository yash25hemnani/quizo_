import React from 'react'
import quiz_man from '../assets/quiz_man.png'
import { Button } from '@/components/ui/button'


function Home() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto p-4 gap-10">
      <img className={`h-[50vh] md:h-90 object-contain not-dark:bg-black not-dark:rounded-xl p-4`}src={quiz_man} alt="Quiz Illustration" />

      <div className='flex gap-4'>
        <Button  onClick={() => window.location.href = '/login'}  className='bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'>Log In</Button>
        <Button className='bg-transparent border-2 border-black dark:border-white text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer'>Sign Up</Button>
      </div>
    </div>
  )
}

export default Home