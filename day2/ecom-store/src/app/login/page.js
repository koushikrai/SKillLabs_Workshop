"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(email);
        alert(password);
        router.push("/home");
    };

    return (
        <div className='flex flex-col min-h-screen w-full bg-blue-500 items-center justify-center'>
            <div className='flex flex-col bg-white w-[400px] h-[500px] shadow-lg rounded-lg p-6'>
                <img src='logo1.svg' alt='Logo' className='w-40 h-40 mx-auto' />
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input 
                        onChange={(event) => setEmail(event.target.value)}
                        id='email'
                        type='email' 
                        placeholder='Enter your email' 
                        className='w-full p-2 mt-4 border border-gray-300 rounded-md text-black'
                    />
                    <input 
                        onChange={(event) => setPassword(event.target.value)}
                        type='password' 
                        placeholder='Enter your password' 
                        className='w-full p-2 mt-4 border border-gray-300 rounded-md text-black'
                    />
                    <button type='submit' className='mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
