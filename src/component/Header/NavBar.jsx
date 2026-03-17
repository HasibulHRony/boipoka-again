import React, { useState } from 'react'
import { FaArrowsDownToLine, FaArrowsUpToLine } from 'react-icons/fa6';
import { NavLink } from 'react-router'

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    const navClasses = ({ isActive }) => isActive ? "px-3 py-2 border-2 border-green-500 rounded-sm cursor-pointer text-green-500 font-semibold" : "text-semibold";

    return (
        <div>
            <nav className='flex justify-between items-center p-2'>
                <div className='flex space-x-2 items-center'>
                    <span onClick={() => setShowMenu(!showMenu)} className='flex md:hidden cursor-pointer'>{showMenu ? <FaArrowsUpToLine /> : <FaArrowsDownToLine />}</span>
                    <p className='text-2xl font-bold'>Book Vibe</p>
                </div>

                {/* <ul className={`relative bg-green-500 px-2 text-white font-bold flex flex-col -left-[40vw] ${showMenu ? "top-11" : "-top-30"} duration-1000`}> */}
                <ul
                    className={`absolute bg-green-500 px-2 text-white font-bold flex flex-col left-5 transform transition-transform duration-500 p-2 rounded-lg ${showMenu ? "translate-y-10 md:hidden" : "-translate-y-40 hidden"
                        }`}
                >
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/listed-book"}>Listed Books</NavLink></li>
                    <li><NavLink to={"/Pages-to-read"}>Pages To Read</NavLink></li>
                </ul>

                <ul className='gap-5 hidden md:flex'>
                    <li><NavLink className={navClasses} to={"/"}>Home</NavLink></li>
                    <li><NavLink className={navClasses} to={"/listed-book"}>Listed Books</NavLink></li>
                    <li><NavLink className={navClasses} to={"/Pages-to-read"}>Pages To Read</NavLink></li>
                </ul>
                <div className='flex items-center gap-2'>
                    <button className='py-2 px-1 md:px-3 md:font-bold text-white bg-green-600 rounded-md cursor-pointer'>Sign In</button>
                    <button className='py-2 px-1 md:px-3 md:font-bold text-white bg-sky-400 rounded-md cursor-pointer'>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}
