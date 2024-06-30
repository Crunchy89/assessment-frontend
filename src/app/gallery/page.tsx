"use client"
import React from 'react';
import HomeComponent from '@/components/HomeComponent';
import { galleryData } from '@/variables/menu';

const page = () => {

    return (
        <HomeComponent>
            <h1 className="text-4xl font-bold w-full text-center mt-10 mb-5">Gallery</h1>
            <p className="text-lg text-center mb-10">Browse our collection of beautiful products:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryData.map((imageUrl, index) => (
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imageUrl} alt=""/>
                    </div>
                ))}
            </div>
        </HomeComponent>
    );
};

export default page;