"use client";
import HomeComponent from "@/components/HomeComponent";
import Carousel from "@/components/Carousel";
import Feature from "@/components/Feature";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <HomeComponent>
      <Carousel />
      <Feature/>
      <Testimonial/>
    </HomeComponent>
  );
}
