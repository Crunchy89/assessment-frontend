import HomeComponent from '@/components/HomeComponent';
import React from 'react';
import Link from 'next/link';

const login = () => {
    return (
        <HomeComponent>
            <div className="flex items-center justify-center w-full h-[90vh]">
                <div className='flex flex-col border border-grey-700 p-5 sm:w-[300px] md:w-[400px]'>
                    <h1 className='text-2xl font-bold mb-4'>Login</h1>
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
                    />
                    <button className="w-64 px-4 py-2 text-white bg-blue-500 rounded-md w-full">
                        Login
                    </button>
                    <div className='flex flex-row items-center'>
                        <Link href="/register" className='mt-2 text-blue-500'>don't have account ?</Link>
                    </div>
                </div>
            </div>
        </HomeComponent>
    );
};

export default login;