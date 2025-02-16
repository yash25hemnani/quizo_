import React from 'react'
import { Button } from './ui/button'
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Quiz({id, title, quizzes, setQuizzes}) {
    const navigate = useNavigate();
    const handleDelete = async () => {
        quizzes = quizzes.filter((element) => element.ID != id)
        setQuizzes(quizzes)

        try {
            const response = await axios.post("http://localhost:3000/quiz/delete", {
                question_id: id
            });
                console.log("Response:", response.data);
            } catch (error) {
                console.error("Error:", error);
        }
    }

    const redirect = (type) => {
        navigate('/teacher/dashboard/'+id, {
            state: {type:type}
        })
    }

  return (
    <div className='flex border-2 border-black dark:border-white p-4 rounded-2xl justify-between items-center'>
        <div className='font-bold text-md'>
            {title}
        </div>

        <div className='flex gap-2'>
            <Button onClick={() => redirect('view')}><HiEye /></Button>
            <Button onClick={() => redirect('edit')}><HiPencil /></Button>
            <Button onClick={handleDelete} className='cursor-pointer'><HiTrash /></Button>
        </div>
    </div>
  )
}

export default Quiz