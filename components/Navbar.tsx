"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram
} from "react-icons/ai"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Experience",
    page: "experience",
  },
// Uncomment out once project page is completed
//  {
//    label: "Projects",
//    page: "projects",
//  }
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div>
              <h2 className="text-2xl font-bold">Jordan Wong</h2>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "cursor-pointer block lg:inline-block text-black hover:bg-blue-100 px-2 py-1 rounded-full"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <a href="https://github.com/jordanwong2002"
               rel="noreferrer"
               target="_blank"
               className="hidden md:block">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={25}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jordanwongg/"
            rel="noreferrer"
            target="_blank"
            className="hidden md:block"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={25}
            />
          </a>
          <a
            href="https://www.instagram.com/jordannwongg/"
            rel="noreferrer"
            target="_blank"
            className="hidden md:block"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={25}
            />
          </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
