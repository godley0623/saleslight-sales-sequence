"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import styles from './signin.module.css';
import logo from '../images/saleslights_logo/saleslights-logo04.svg';
import { getAuthToken, jwtAuthCheck } from '../controller/server'

export default function signIn() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const goToSignUpPage = () => {
        router.push('/signup')
    }

    const handleEmailInput = (e:any) => {
        setEmail(e)
    }

    const handlePasswordInput = (e:any) => {
        setPassword(e)
    }

    const handleSignIn = async (e:any) => {
        e.preventDefault()
        
        const data = await getAuthToken(email, password)
        //@ts-ignore
        const token = data.token

        if (token) {
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)
            router.push('/')
        } else {
            alert("Invalid username/password")
        }

        const jwtVerify = await jwtAuthCheck(token)
        console.log(jwtVerify)
    }

    return (
        <div id={styles.view_login}>
            <a href="https://saleslights.com/">
                <Image
                    src={logo}
                    alt="Saleslights Logo"
                    draggable="false"
                />
            </a>
            <form id={styles.form_login}>
                <div className="w-full h-10 mb-3 flex justify-center">
                    <input
                        id="input_login_email"
                        className="form-control pl-2 w-3/4 h-full rounded-md"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => handleEmailInput(e.target.value)}
                        required />
                </div>
                <div className="w-full h-10 mb-3 flex justify-center">
                    <input
                        id="input_login_pass"
                        className="form-control pl-2 w-3/4 h-full rounded-md"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => handlePasswordInput(e.target.value)}
                        required />
                </div>
                <div className="w-full h-10 mb-3 flex justify-center">
                    <button
                        id="btn_login"
                        className="bg-primary text-white w-1/2 h-full rounded-md"
                        onClick={(e) => handleSignIn(e)}>
                        Login
                    </button>
                </div>
                <div className="w-full text-center">
                    <h6 id={styles.link_forgot_pass} className="text-primary">
                        Forgot password?
                    </h6>
                </div>

                <div className="w-full h-0.5 hr-line mt-6 mb-6 bg-neutral-500 rounded-md"></div>

                <div className="w-full h-10 text-center">
                    <button
                        id="link_signup"
                        className="bg-success text-white w-1/2 h-full rounded-md"
                        type="submit"
                        onClick={goToSignUpPage}>
                        Create New Account
                    </button>
                </div>
            </form>
        </div>
    )
}