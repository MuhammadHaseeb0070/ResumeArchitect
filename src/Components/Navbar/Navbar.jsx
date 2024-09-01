import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav
            style={{
                background: "rgb(0,0,0)",
                background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(6,66,94,1) 50%,  rgba(0,91,109,1) 100%)"
            }}
            className="sticky z-50 text-white w-full flex justify-around items-center top-0 p-3 font-poppins bg-zinc-900"
        >
            <h3 className='text-xl font-medium drop-shadow-md md:text-2xl lg:text-3xl'>
                Resume Architect
            </h3>
            <ul className='list-none flex justify-center items-center text-gray-300 text-sm md:text-base lg:text-lg'>
                <li className='mx-1 hover:scale-110 hover:text-white transition-all duration-300 ease-in-out md:mx-3'>
                    <Link to="/">Home</Link>
                </li>
                <li className='mx-1 hover:scale-110 hover:text-white transition-all duration-300 ease-in-out md:mx-3'>
                    <Link to="/templateSelection">Templates</Link>
                </li>
                <li className='mx-1 hover:scale-110 hover:text-white transition-all duration-300 ease-in-out md:mx-3'>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
