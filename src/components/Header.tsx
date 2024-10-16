"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { Mobile } from './Mobile'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-10 flex justify-between  items-center py-5 px-4 sm:px-[7rem]  ${scrolled && "scrolled" } `}>
      <div className="logo font-bold text-3xl sm:text-4xl cursor-pointer">
        <span className='text-[#FF6584]'>
          <img src= 'mbunix.png' alt ='bellian-profile' className='object-contain w-8 h-8 rounded-full'/>
          bellian.</span>dev
        </div>
      
      <div className='hidden header-links sm:flex items-center gap-8 font-bold text-sm'>
        <Link href="/#home">HOME</Link>
        <Link href="/#experience">EXPERIENCE</Link>
        <Link href="/#about">ABOUT</Link>
        <Link href="/#skills">SKILLS</Link>
        <Link href="/#projects">PROJECTS</Link>
        <Link href="/#contact">CONTACT</Link>
        <Link href="">CV</Link>
      </div>
      <Mobile/>
    </div>
  )
}

export default Header
