import React, { useEffect, useState } from 'react'
import axios from 'axios';
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
import { Textarea } from './ui/textarea';
import { useNavigate } from 'react-router-dom';


function AddQuiz() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const addQuiz = async () => {
        
        try {
            const response = await axios.post(`http://localhost:3000/quiz/add`, {
                username: localStorage.getItem('username'),
                title,
                description,
            });
                console.log("Response:", response.data);
                navigate('/teacher/dashboard/all')
            } catch (error) {
                console.error("Error:", error);
        } 
    }

  return (
    <Card className='w-3/4 lg:w-2/5 h-110 border-black dark:border-white overflow-y-scroll'>
        <CardHeader className='flex justify-center items-center'>
            <Button onClick={() => navigate('/teacher/dashboard')} className='font-bold bg-red-500 text-white text-md hover:bg-red-600'>Back</Button>
            <CardTitle className='text-4xl capitalize'>Add a New Quiz</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
            <Input className='h-13' onChange={(event) => setTitle(event.target.value)} type="text" placeholder="title"/>
            <Textarea  onChange={(event) => setDescription(event.target.value)} placeholder="description" rows={5}/>
        </CardContent>
        <CardFooter className='flex flex-col items-center justify-center gap-3'>
            <Button onClick={addQuiz}>
                Add Quiz   
            </Button>
        </CardFooter>
    </Card>
  )
}

export default AddQuiz