import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TeacherDashboard from './pages/TeacherDashboard'
import QuizList from './pages/QuizList'
import Desc from './components/Desc'
import AddQuiz from './components/AddQuiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='teacher/dashboard' element={<TeacherDashboard />} />
          <Route path='teacher/dashboard/all' element={<QuizList />} />
          <Route path='teacher/dashboard/:id' element={<Desc />} />
          <Route path='teacher/dashboard/add' element={<AddQuiz />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
