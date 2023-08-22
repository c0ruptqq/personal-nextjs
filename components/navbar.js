import React, { useState } from "react";
import Link from 'next/link';
import Logo from '../public/moon.svg';
import { FaGithub, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { useRouter } from 'next/router';
import SvgComponent from './moon.js';

const Navbar = () => {

  const router = useRouter();
  const currentRoute = router.pathname;

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [height_class, setHeightClass] = useState("height open")

  const [isDark, setDark] = useState(false)

  const ToggleMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu expanded")
      setHeightClass("height_open")
      window.scrollTo(0, 0)
      document.querySelector("html").classList.add('overflow-y-hidden');
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu closed")
      setHeightClass("height_closed")
      document.querySelector("html").classList.remove('overflow-y-hidden');
    }
    setIsMenuClicked(!isMenuClicked)

  }
  const CustomLink = ({ href, title, className = "", click }) => {
    return (
      <Link href={href} className={`${className} relative group text-2xl flex justify-center text-center ${currentRoute === href ? "text-secondary" : "text-text dark:text-bg"}`} onClick={click}>
        {title}
        <span className="h-[3px] inline-block w-0 bg-secondary absolute left-0 -bottom-0.5 lg:group-hover:w-full transition-[width] ease duration-300"></span>
      </Link >
    )

  }
  const useEffect = () => {
    var root = document.getElementsByTagName( 'html' )[0];
    if (!isDark) {
      root.classList.add("dark") 
      setDark(true)
      }
    else {
      root.classList.remove('dark')
      setDark(false)
    }
  }
  return (
    <div className={`flex justify-center content-center items-center absolute w-screen ${height_class} lg:items-start lg:h-fit`}>
      <Link
        href="/" className="h-40 aspect-square absolute border-none z-30 top-[-0.5em] cursor-pointer stroke-text dark:stroke-bg"><SvgComponent /></Link>
      <button className={`z-20 flex flex-col justify-between items-start absolute aspect-square w-16 top-8 right-8 border-none text-text burger-menu lg:hidden`} onClick={ToggleMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </button>
      <div
        className={`flex flex-col justify-center items-center content-center min-w-[90vw] min-h-[100vh] rounded-2xl z-10 bg-bg/40 dark:bg-text/30 backdrop-blur-md ${menu_class} duration-300 lg:expanded lg:bg-inherit lg:flex lg:relative lg:min-h-fit lg:w-screen lg:flex-row`}>
        <ul
          className={`lg:flex lg:content-start lg:ml-3 w-screen`}>
          <CustomLink href="/" title="Home" className="lg:mr-4" click={ToggleMenu} />
          <CustomLink href="/projects" title="Projects" className="lg:mx-4" click={ToggleMenu} />
          <CustomLink href="/blog" title="Blog" className="lg:ml-4" click={ToggleMenu} />
          <div className='flex justify-center lg:mt-2 lg:ml-3'>
          <FaMoon className='lg:ml-4 light-toggle dark:hidden'  onClick={useEffect} />
          <FaSun className='lg:ml-4 light-toggle  hidden dark:flex'  onClick={useEffect} />
          </div>
        </ul>
        <div className="nav-element">
          <a className="nav-element-links" href="https://github.com/c0ruptqq" target="_blank">
            <FaGithub />

          </a>
          <a className="nav-element-links" href="mailto:max.d.astapov@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
