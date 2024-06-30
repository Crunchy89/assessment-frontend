"use client";
import React from 'react';
import HomeComponent from '@/components/HomeComponent';
import ProfileModel from '@/models/ProfileModel';

const page = () => {
    const model = ProfileModel();
    return (
        <HomeComponent>
              <div className="flex items-center justify-center w-full h-[90vh]">
        <div className='flex flex-col border border-grey-700 p-5 sm:w-[300px] md:w-[400px]'>
            <form onSubmit={model.action.handleChangePassword}>
            <h1 className='text-2xl font-bold mb-4'>Update Password</h1>
            <input
                name='oldPassword'
                type="password"
                placeholder="Old Password"
                value={model.payloadPasswordChange.oldPassword}
                onChange={model.action.handlePasswordChange}
                className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
            />
            <input
                name='retypePassword'
                type="password"
                placeholder="Retype Password"
                value={model.payloadPasswordChange.retypePassword}
                onChange={model.action.handlePasswordChange}
                className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
            />
            <input
                name='newPassword'
                type="password"
                placeholder="New Password"
                value={model.payloadPasswordChange.newPassword}
                onChange={model.action.handlePasswordChange}
                className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
            />
            <button type='submit' className="w-64 px-4 py-2 text-white bg-blue-500 rounded-md w-full">
                Update Password
            </button>
            </form>
        </div>
        </div>
        </HomeComponent>
    );
};

export default page;