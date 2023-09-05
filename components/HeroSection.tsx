"use client" // this is a client component
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import useTypewriter from 'react-typewriter-hook'

const HeroSection = () => {
  const phrases = useMemo(() => ["Computer Science Student", "Software Engineer"], []);
  const [index, setIndex] = useState(0);
  const text = useTypewriter(phrases[index % phrases.length]);

  useEffect(() => {
    if (text === phrases[index % phrases.length]) { // When the current phrase is fully typed out
      const timeout = setTimeout(() => { 
        setIndex(prevIndex => prevIndex + 1);
      }, 2000); // Wait 2 seconds before switching to the next phrase

      return () => clearTimeout(timeout); // Cleanup the timeout if the component gets unmounted
    }
  }, [text, index, phrases]);

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-8 py-12 sm:py-24 md:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
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
             {text}
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
