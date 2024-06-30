"use client";
import React from 'react';
import Link from 'next/link';
import AuthModel from '@/models/AuthModel';
import HomeComponent from '@/components/HomeComponent';

const Page = () => {
    const model=AuthModel();
    return (
        <HomeComponent>
        <div className="flex items-center justify-center w-full h-[90vh]">
        <div className='flex flex-col border border-grey-700 p-5 sm:w-[300px] md:w-[400px]'>
            <form onSubmit={model.action.handleLogin}>
            <h1 className='text-2xl font-bold mb-4'>Login</h1>
            <input
                name='email'
                type="email"
                placeholder="Email"
                value={model.payload.email}
                onChange={model.action.handleChange}
                className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
            />
            <input
                name='password'
                type="password"
                placeholder="Password"
                value={model.payload.password}
                onChange={model.action.handleChange}
                className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
            />
            <button type='submit' className="w-64 px-4 py-2 text-white bg-blue-500 rounded-md w-full">
                Login
            </button>
            </form>
            <div className='flex flex-row items-center'>
                <Link href="/register" className='mt-2 text-blue-500'>
                    don't have an account ?
                </Link>
            </div>
        </div>
        </div>
        </HomeComponent>
    );
};

export default Page;