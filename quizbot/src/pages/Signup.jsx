import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
import axios from 'axios'


function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        try {
          const response = await axios.post("http://localhost:3000/user/signup", {
            username: username,
            password: password
          });
          console.log("User Created:", response.data);
          if(response.status == 200){
            localStorage.setItem('loggedin', 'true')
            window.location.href = '/teacher/dashboard'
          }
        } catch (error) {
          console.error("Error creating user:", error);
        }
      };

  return (
    <Card className='w-3/4 lg:w-1/4 border-black dark:border-white'>
        <CardHeader>
            <CardTitle className='text-4xl'>Sign Up</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
            <Input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="username" />
            <Input onChange={(event) => setPassword(event.target.value)}  type="password" placeholder="password" />
            <Button onClick={handleSubmit}>Sign Up</Button>
        </CardContent>
        <CardFooter className='flex flex-col'>
            <h1>Already have an account?</h1>
            <Link to={'/login'} className='text-blue-500 ml-2'>Log In</Link>
        </CardFooter>
    </Card>
  )
}

export default Signup