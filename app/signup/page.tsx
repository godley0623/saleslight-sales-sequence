"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './signup.module.css';
import logo from '../images/saleslights_logo/saleslights-logo04.svg';

export default function SignUp() {
    const router = useRouter()

    const goToSignInPage = () => {
        router.push("/signin")
    }
    
    return (
        <div id={styles.view_signup}>
            <Image
                src={logo}
                alt="saleslights__logo"
                draggable="false"
            />
            <h3>SIGN UP</h3>
            <form id="form_signup">
                <div className='w-full flex justify-center'>
                    <input
                        id="input_fullname"
                        className="form-control pl-2 w-3/4 h-8"
                        type="name"
                        placeholder="Full Name"
                        required
                    />
                </div>
                <div className='w-full flex justify-center'>
                    <input
                        id="input_email"
                        className="form-control pl-2 w-3/4 h-8"
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className='w-full flex justify-center'>
                    <input
                        id="input_password"
                        className="form-control pl-2 w-3/4 h-8"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <div className='w-full flex justify-center'>
                    <input
                        id="input_confirmpassword"
                        className="form-control pl-2 w-3/4 h-8"
                        type="password"
                        placeholder="Confirm Password"
                        required
                    />
                </div>
                <div className="w-full flex justify-center gap-4 mt-4 mb-4">
                    <div className="align-middle">
                        <input
                            id="input_tocCheck"
                            className="w-4 h-4"
                            type="checkbox"
                            name="toc"
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        By signing up, you agree to our&nbsp;"<a
                        href="https://saleslights.com/privacy-policy"
                        className="text-primary underline"
                        target="_blank">Terms and Conditions</a>"
                    </div>
                </div>

                <div className="w-full text-center">
                    <button
                        id="btn_signup"
                        className="bg-primary text-white w-1/2 h-10 rounded-md"
                        type="submit"
                    >
                        Register New Account
                    </button>
                </div>

                <div className="w-full h-0.5 hr-line mt-6 mb-6 bg-neutral-500 rounded-md"></div>

                <div className="w-full text-center">
                    <button
                        id="link_login"
                        className="bg-success text-white w-1/2 h-10 rounded-md"
                        type="submit"
                        onClick={goToSignInPage}>
                        Login Here
                    </button>
                </div>
            </form>
        </div>
    )
}