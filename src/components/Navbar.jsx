import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className='w-full h-20'></div>
            {/* Main navbar container */}
            <nav className='fixed left-0 top-0 z-50 h-20 w-full py-4 px-6  backdrop-blur-md border-b border-white/10'>
                <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    {/* Logo/Brand */}
                    <Link 
                        to="/" 
                        className="text-3xl font-bold text-white transition-all duration-300 hover:text-pink-500 hover:scale-105"
                    >
                        NandniVerse
                    </Link>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="text-3xl text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                            <i className="ri-close-line"></i>
                            ) : (
                            <i className="ri-menu-3-line"></i>
                            )}
                        </button>
                    </div>

                    {/* Navigation links */}
                    <div className={`absolute md:relative top-full left-0 w-full md:w-auto bg-black/80 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none transition-all duration-300 ease-in-out ${isOpen ? 'flex flex-col items-center py-4 space-y-6' : 'hidden'} md:flex md:flex-row md:space-x-8 md:space-y-0`}>
                        <NavLink to="/" icon="ri-home-8-line" label="Home" />
                        <NavLink to="/profile" icon="ri-user-line" label="Profile" />
                        <ExternalLink 
                            href="https://www.youtube.com/@Nandni_Verse" 
                            icon="ri-youtube-fill" 
                            label="YouTube"
                        />
                        <ExternalLink 
                            href="https://www.instagram.com/nandni_verse/" 
                            icon="ri-instagram-fill" 
                            label="Instagram"
                        />
                        <NavLink to="/blog" icon="ri-news-line" label="Blog" />
                    </div>
                </div>
            </nav>
        </>
    );
}

// Reusable component for internal links
const NavLink = ({ to, icon, label }) => (
    <Link 
        to={to} 
        className="flex items-center text-2xl text-white/90 hover:text-pink-500 transition-all duration-300 group"
    >
        <i className={`${icon} mr-2 group-hover:rotate-[30deg] transition-transform duration-300`}></i>
        <span className="text-lg font-medium">{label}</span>
    </Link>
);

// Reusable component for external links
const ExternalLink = ({ href, icon, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-2xl text-white/90 hover:text-pink-500 transition-all duration-300 group"
    >
        <i className={`${icon} mr-2 group-hover:rotate-[30deg] transition-transform duration-300`}></i>
        <span className="text-lg font-medium">{label}</span>
    </a>
);

export default Navbar;