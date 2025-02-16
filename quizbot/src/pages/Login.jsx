import React, { useEffect, useState } from 'react'
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

  
function Login() {
    const checkLogin = async () => {
        try {
            const response = await axios.get("http://localhost:3000/user/check");
            console.log(response.data);
        } catch (error) {
            console.error("Session check failed:", error.response.data);
        }
    }
    

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        console.log("Trying...", username, password)
        try {
          const response = await axios.post("http://localhost:3000/user/login", {
            username: username,
            password: password
          });
          console.log("Response:", response.data);
          if(response.status == 200){
            localStorage.setItem('loggedin', 'true')
            localStorage.setItem('username', response.data.username)
            window.location.href = '/teacher/dashboard'
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

  return (
    <Card className='w-3/4 lg:w-1/4 border-black dark:border-white'>
        <CardHeader>
            <CardTitle className='text-4xl'>Log In</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
            <Input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="username" />
            <Input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="password" />
            <Button onClick={handleSubmit}>Log In</Button>
        </CardContent>
        <CardFooter className='flex flex-col'>
            <h1>Don't have an account?</h1>
            <Link to={'/signup'} className='text-blue-500 ml-2'>Sign In</Link>
        </CardFooter>
    </Card>


  )
}

export default Login