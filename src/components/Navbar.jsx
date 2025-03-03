import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='relative z-1000 w-full h-20 bg-transparent'></div>
            <div className='fixed left-0 top-0 z-50 flex items-center justify-between py-5 px-4 w-full backdrop-blur-sm text-gray-200 transition duration-500 ease-in-out'>
                <div className="font-bold text-4xl transition-all duration-500 ease-in-out hover:scale-110 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-500/50">NandniVerse</div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-4xl">
                        <i className={`ri-menu-3-line ${isOpen ? 'hidden' : 'block'}`}></i>
                        <i className={`ri-close-line ${isOpen ? 'block' : 'hidden'}`}></i>
                    </button>
                </div>
                <div className={`flex-col md:flex md:flex-row md:gap-14 font transition duration-500 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                    <a id='navItem' href="/" className='text-4xl font-thin transition-all duration-300 hover:text-pink-500 hover:scale-125 hover:rotate-[360deg] hover:shadow-lg hover:shadow-pink-500/50'><i className="ri-home-8-line"></i></a>
                    <a id='navItem' href="/profile" className='text-4xl font-thin transition-all duration-300 hover:text-pink-500 hover:scale-125 hover:rotate-[360deg] hover:shadow-lg hover:shadow-pink-500/50'><i className="ri-user-line"></i></a>
                    <a id='navItem' href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-4xl font-thin transition-all duration-300 hover:text-pink-500 hover:scale-125 hover:rotate-[360deg] hover:shadow-lg hover:shadow-pink-500/50'><i className="ri-youtube-fill"></i></a>
                    <a id='navItem' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-4xl font-thin transition-all duration-300 hover:text-pink-500 hover:scale-125 hover:shadow-lg hover:shadow-pink-500/50'><i className="ri-instagram-fill hover:rotate-[360deg]"></i></a>
                    <Link 
                        to="/blog" 
                        className="text-4xl font-thin transition-all duration-300 hover:text-pink-500 hover:scale-125 hover:rotate-[360deg] hover:shadow-lg hover:shadow-pink-500/50"
                    >
                        <i className="ri-news-line"></i>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
