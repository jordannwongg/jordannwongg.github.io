import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-400 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 dark:text-white md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1">
           <a href="mailto:jordanmwong2002@gmail.com" className="hover:underline">
           jordanmwong2002@gmail.com
           </a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/jordanwong2002" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={35}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jordanwongg/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={35}
            />
          </a>
          <a
            href="https://www.instagram.com/jordannwongg/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={35}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
