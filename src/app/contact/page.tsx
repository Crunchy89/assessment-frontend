"use client";
import React from 'react';
import HomeComponent from '@/components/HomeComponent';

const Page = () => {
    return (
        <HomeComponent>
            <h1 className="text-4xl font-bold w-full text-center mt-10 mb-5">Contact</h1>
            <p className="text-lg text-center mb-10">Contact Us, We'll be waiting for you</p>
            <div className="flex flex-col md:flex-row mt-10 w-full bg-gray-200 p-5">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-3 w-full text-center">Office Location</h2>
                    <iframe className="" title='office_map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15776.32982314008!2d116.28951699999999!3d-8.6837089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1719788577179!5m2!1sen!2sid" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-3 w-full text-center">Contact Information</h2>
                    <p className="text-lg w-full text-center ">Email: example@example.com</p>
                    <p className="text-lg w-full text-center">Phone: 123-456-7890</p>
                </div>
            </div>
        </HomeComponent>
    );
};

export default Page;
