import React, { use, useEffect, useState } from 'react'
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
import Quiz from '@/components/Quiz';

function QuizList() {
    const [quizzes, setQuizzes] = useState([])

    const fetchQuizzes = async () => {
        try {
          const username = localStorage.getItem('username')
          console.log(username)
          const response = await axios.post("http://localhost:3000/quiz/all-quizzes", {
            username: username
        });
        setQuizzes(response.data.quizzes)
        console.log("Response:", response.data.quizzes);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      useEffect(() => {
        fetchQuizzes()
      }, [])

      useEffect(() => {
        console.log(quizzes)
      }, [quizzes])
      


  return (
    <Card className='w-3/4 lg:w-2/5 h-110 border-black dark:border-white overflow-y-scroll'>
        <CardHeader className='flex justify-center items-center'>
            <Button onClick={() => window.location.href='/teacher/dashboard'} className='font-bold bg-red-500 text-white text-md hover:bg-red-600'>Back</Button>
            <CardTitle className='text-4xl'>All Quizzes</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          { quizzes ? (
            quizzes.length > 0 ? (
              quizzes.map((element) => (
                  <Quiz key={element.ID} id={element.ID} title={element.title} quizzes={quizzes} setQuizzes={setQuizzes}/>
              ))
          ) : (
              <p className="text-center text-gray-500">No quizzes available.</p>
            )
          ): <p className="text-center text-gray-500">No quizzes available.</p>}   
        </CardContent>
    </Card>
  )
}

export default QuizList