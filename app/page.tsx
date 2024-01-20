"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { jwtAuthCheck } from './controller/server'
import styles from './home.module.css';
import logo from './images/saleslights_logo/saleslights-logo04.svg';
import SalesTable from './components/SalesTable'


export default function Home() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push("/signin")
        return
      }

      //@ts-ignore
      const tokenVerified = await jwtAuthCheck(token)
      if (!tokenVerified) {
        router.push("/signin")
        return
      }

      setIsLoading(false)
    };

    verifyToken()
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    router.push('/signin')
  }

  return (
    <>
      {isLoading && <div id={styles.loading_screen} className='w-screen h-screen flex justify-center items-center'>
        <Image
          src={logo}
          alt="Saleslights Logo"
          draggable="false"
        />
      </div>}

      {!isLoading && 
      <div>
        <div className='flex justify-between'>
          <h1 className=' text-2xl'>Sales Sequences</h1>
          <div className=' w-1/12 pt-2'>
            <button className='text-xs w-16 h-8 bg-red-800 text-white rounded-md' onClick={handleLogout}>Logout</button>
            {/*<button className='text-xs w-14 h-8 bg-success text-white rounded-md'>Refresh</button>
            <button className='text-xs w-14 h-8 bg-slate-600 text-white rounded-md'>Feedback</button>*/}
          </div>
        </div>
        <SalesTable />  
      </div>}
    </>
  )
}
