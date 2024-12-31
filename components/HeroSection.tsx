"use client" // this is a client component
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-8 py-12 sm:py-24 md:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/graduation.PNG"
            alt="headshot pic"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&apos;m  
          <span className="text-blue-500"> Jordan</span>!</h1>
          <p className="text-xl mt-2 mb-2 md:text-4xl fixed-height flex items-center">
            <span className="font-semibold text-gray-500">
            <TypeAnimation 
                cursor={true}
                sequence={["Computer Science Student", "Software Engineer"]}
                wrapper="b"
                repeat={Infinity} 
                speed={{type: 'keyStrokeDelayInMs', value: 160}}
                deletionSpeed={{type: 'keyStrokeDelayInMs', value: 150}}
              />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce mb-20" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
