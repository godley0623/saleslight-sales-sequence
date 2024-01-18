import React from 'react';
import Image from 'next/image';
import styles from './signin.module.css';
import logo from '../images/saleslights_logo/saleslights-logo04.svg';

export default function signIn() {
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
                        className="form-control form-control w-3/4 h-full rounded-md"
                        type="email"
                        placeholder="Email"
                        required />
                </div>
                <div className="w-full h-10 mb-3 flex justify-center">
                    <input
                        id="input_login_pass"
                        className="form-control form-control w-3/4 h-full rounded-md"
                        type="password"
                        placeholder="Password"
                        required />
                </div>
                <div className="w-full h-10 mb-3 flex justify-center">
                    <button
                        id="btn_login"
                        className="bg-primary text-white w-1/2 h-full rounded-md"
                        type="submit">
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
                        type="submit">
                        Create New Account
                    </button>
                </div>
            </form>
        </div>
    )
}