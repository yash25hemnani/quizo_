import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { HiMoon, HiSun } from "react-icons/hi";
  

function Layout() {
        const [mode, setMode] = useState('dark')
        const changeMode = () => {
            setMode(mode == 'dark' ? '' : 'dark')
        }

  return (
    <div className={`${mode} bg-background transition-all ease-linear duration-100`}>
        <div className='h-screen flex flex-col items-center justify-start'>
            
            <h1 className='dark:text-white text-4xl font-bold mb-8 mt-20'>QUIZO</h1>
            <Outlet /> 


            <Button className='absolute bottom-10' onClick={() => changeMode()}>
                {mode == 'dark' ? <HiSun size={20} />:<HiMoon size={20} />}
            </Button>
        </div>
    </div>
  )
}

export default Layout