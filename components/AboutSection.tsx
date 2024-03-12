"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

//skills def
const skills = [
  { skill: "Python" },
  { skill: "C++"},
  { skill: "SQL"},
  { skill: "React.js" },
  { skill: "JavaScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "GitHub" },
  { skill: "Google Cloud Platform"},
]

const AboutSection = () => {
  return (
    <section id="about">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jordan and I&apos;m a student at ASU.
              I am currently a rising senior pursuing a Bachelor&apos;s in Computer Science as well as 
              a Certificate in Informatics. 🖥️
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              Currently, I enjoy playing video games, working out, and watching NBA.
              My favorite team is the Sacramento Kings!! 👑
            </p>
            <br />
            <p>
              I have a passion for
              technology and excited to see where my career takes me. I&apos;m always open to
              new opportunites and connections. Please feel 
              free <a href="mailto:jordanmwong2002@gmail.com" className="underline text-blue-500 font-bold"> contact </a>
              me and check out my <a href="https://docs.google.com/document/d/19SpbVr7za6ut0iAlApviVi3Pg5rkQWs9QrddSNfMRSM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline text-blue-500 font-bold">CV</a>!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/smiski2.png"
              alt="smiski pic"
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center mt-8">
        <Link
            to="experience" 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
        >
            <HiArrowDown size={35} className="animate-bounce mb-12" />
        </Link>
      </div>
    </section>
  )
}

export default AboutSection
