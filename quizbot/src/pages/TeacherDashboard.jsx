import React, { useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function TeacherDashboard() {
    const navigate = useNavigate()

     const checkLogin = () => {
        const loggedIn = localStorage.getItem('loggedin');
        if (!loggedIn){
            navigate('/login')
        }
    }

    useEffect(() => {
        checkLogin()
      }, [])

    const handleLogout = () => {
        localStorage.removeItem('loggedin');
        navigate('/login')
    }

  return (
    <Card className='w-3/4 lg:w-1/4 border-black dark:border-white'>
        <CardHeader className='flex justify-center items-center'>
            <CardTitle className='text-4xl'>Quiz Dashboard</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
            <Button onClick={() =>navigate('/teacher/dashboard/all')} className='text-md font-bold'>All Quizzes</Button>
            <Button onClick={() =>navigate('/teacher/dashboard/add')} className='text-md font-bold'>Add Quiz</Button>
        </CardContent>
        <CardFooter className='flex flex-col'>
            <Button onClick={handleLogout} className='font-bold bg-red-500 text-white text-md hover:bg-red-600'>Logout</Button>
        </CardFooter>
    </Card>
  )
}

export default TeacherDashboard