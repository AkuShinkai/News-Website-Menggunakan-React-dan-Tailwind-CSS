import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// react-icon
import { FaBars, FaFacebook, FaGithub, FaInstagram, FaXmark } from "react-icons/fa6";
import LoginButton from './LoginButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  // navitem
  const navItems = [
    { path: "/", Link: "Home" },
    { path: "/about", Link: "About" },
    { path: "/blogs", Link: "Blogs" },
    { path: "/contact", Link: "Contact" },
  ]

  // modal details
  const openModel = () => {
    setIsModelOpen(true);
  }

  const closeModel = () => {
    setIsModelOpen(false);
  }

  return (
    <header className='bg-biruGelapLight font-serif text-white fixed top-0 left-0 right-0 z-50'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href='/' className='text-xl font-bold text-white'>PNM<span className='text-biruTerangLight'>News</span></a>

        {/* navbar dekstop */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({ path, Link }) => <li className='text-white font-semibold hover:text-biruTerangLight' key={path}>
              <NavLink className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              } to={path}>{Link}</NavLink>
            </li>)
          }
        </ul>

        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href='/' className='hover:text-biruTerangLight'><FaFacebook /></a>
          <a href='/' className='hover:text-biruTerangLight'><FaInstagram /></a>
          <a href='/' className='hover:text-biruTerangLight'><FaGithub /></a>
          <button onClick={openModel} className='bg-biruAgakTerangLight px-6 py-2 font-medium text-white hover:bg-biruTerangLight hover:text-black transition-all rounded-lg duration-200 ease-in'>Log On</button>
        </div>

        {/* modal component */}
        <LoginButton isOpen={isModelOpen} onClose={closeModel} />

        {/* mobile menu */}

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='cursor-pointer'>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
            }
          </button>
        </div>
      </nav>
      {/* menu item mobile */}
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-biruGelapLight ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-in-out duration-300" : "hidden"}`}>
          {
            navItems.map(({ path, Link }) => <li className='text-white font-semibold' key={path}>
              <NavLink onClick={toggleMenu} to={path}>{Link}</NavLink>
            </li>)
          }
          <button onClick={() => { openModel(); toggleMenu(); }} className='bg-biruAgakTerangLight px-6 py-2 font-medium rounded-lg text-white hover:bg-biruTerangLight hover:text-black transition-all duration-200 ease-in'>Log On</button>
        </ul>
      </div>
    </header>
  )
}

export default Navbar