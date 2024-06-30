"use client";
import React from 'react';
import notification from "@/assets/notification.png";
import favorite from "@/assets/favorite.png";
import team from "@/assets/team.png";

const Feature = () => {
    return (
        <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metric
            </h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture your
              vitals while you exercise. You can create different categories of
              exercises and track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={notification.src} alt="Monitoring" />
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img src={favorite.src} alt="Reporting" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch can generate a comprehensive
              report on your vitals based on your settings, whether daily,
              weekly, monthly, quarterly, or yearly. Stay informed about your
              health with detailed reports.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch allows you to sync data
              across all your mobile devices. Stay connected and access your
              health data anytime, anywhere.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={team.src} alt="Syncing" />
          </div>
        </div>
      </section>
    );
};

export default Feature;