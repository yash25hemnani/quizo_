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
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Textarea } from "@/components/ui/textarea"
import { HiEye, HiPencil, HiCheckCircle } from 'react-icons/hi';
import debounce from "lodash.debounce";
import { useCallback } from 'react';


function Desc() {
    const navigate = useNavigate()
    const location = useLocation(); 
    const { state } = location || {};
    const {id} = useParams()
    
    const [type, setType] = useState(state?.type)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [saving, setSaving] = useState(false)

    const getQuizData = async () => {
        
        try {
            console.log(`http://localhost:3000/quiz/fetch-one/${id}`)
            const response = await axios.get(`http://localhost:3000/quiz/fetch-one/${id}`);
                console.log("Response:", response.data);
                setTitle(response.data.quiz.title)
                setDescription(response.data.quiz.description)
            } catch (error) {
            console.error("Error:", error);
        } 
    }

    useEffect(() => {
      getQuizData()
    }, [])
    
    // Debounced function
    const updateQuiz = useCallback(
        debounce(async (newTitle, newDescription) => {
            setSaving(true)
            try {
                const response = await axios.post(`http://localhost:3000/quiz/update/${id}`, {
                    title: newTitle,
                    description: newDescription
                });
                    console.log("Response:", response.data);
                } catch (error) {
                    console.error("Error:", error);
            } finally {
                setSaving(false)
            }
        }, 1000), 
    );

    useEffect(() => {
        updateQuiz(title, description); 
    }, [title, description]);
    

    const toggleType = () => {
        if (type == 'view'){
            setType('edit')
        } else {
            setType('view')
        }
        console.log(type)
    }

    useEffect(() => {
    console.log("Saving state changed:", saving);
    }, [saving]);
  return (
    <Card className='w-3/4 lg:w-2/5 h-110 border-black dark:border-white overflow-y-scroll'>
        <CardHeader className='flex justify-center items-center'>
            <Button onClick={() => navigate('/teacher/dashboard/all')} className='font-bold bg-red-500 text-white text-md hover:bg-red-600'>Back</Button>
            <CardTitle className='text-4xl capitalize'>{ state?.type } Quiz: {id}</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
            <Input className='h-13' onChange={(event) => setTitle(event.target.value)} type="text" placeholder="title" value={title} readOnly={type=='view'} />
            <Textarea  onChange={(event) => setDescription(event.target.value)} placeholder="description" rows={5} value={description} readOnly={type=='view'}/>
        </CardContent>
        <CardFooter className='flex flex-col items-center justify-center gap-3'>
            <Button onClick={toggleType}>
                { type == 'view' ? <HiPencil/> : <HiEye/>}       
            </Button>
            {saving ? (
                <h4 className='flex items-center gap-1 text-md'>
                    <HiCheckCircle size={25} /> Auto Saving...
                </h4>
            ) : null}

            
        </CardFooter>
    </Card>
  )
}

export default Desc