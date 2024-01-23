import React, { useState, useEffect } from 'react';
import { FaAnglesUp } from "react-icons/fa6";

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-4 right-4 p-4 bg-biruTerangLight bg-opacity-60 hover:bg-sky-500 text-neutral-50 rounded-full ${isVisible ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500 focus:outline-none`}
            onClick={scrollToTop}
        >
            <FaAnglesUp />
        </button>
    );
};

export default ScrollButton;
