"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { jwtAuthCheck } from './controller/server'
import styles from './home.module.css';
import logo from './images/saleslights_logo/saleslights-logo04.svg';


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

  return (
    <>
      {isLoading && <div id={styles.loading_screen} className='w-screen h-screen flex justify-center items-center'>
        <Image
          src={logo}
          alt="Saleslights Logo"
          draggable="false"
        />
      </div>}

      {!isLoading && <div>
        Done
      </div>}
    </>
  )
}
