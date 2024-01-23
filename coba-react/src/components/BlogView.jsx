import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaCalendar, FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import SideBar from './SideBar';

const BlogView = () => {
    const data = useLoaderData();
    const { title, image, category, author, published_date, reading_time, content } = data[0];

    return (
        <div>
            <div className='py-40 bg-biruGelapLight text-center text-white'>
                <h2 className='text-5xl lg:text-7xl leading-snug font-serif font-bold px-24 mb-5'>{title}</h2>
            </div>

            {/* blog data  */}
            <div className='max-w-7xl mx-auto my-12 px-4 flex flex-col md:flex-row gap-12'>
                <div className='lg:w-3/4 mx-auto'>
                    <div>
                        <img src={image} alt='' className='w-full mx-auto rounded' />
                    </div>
                    <h2 className='text-3xl mt-8 font-bold font-serif mb-4 text-blue-500 cursor-pointer text-center'>{title}</h2>
                    <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | <FaCalendar className='inline-flex items-center mr-2'/>{published_date}</p>
                    <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
                    <p className='text-base text-balance text-gray-500 mb-6'>{content}</p>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p><br/>
                    </div>
                </div>
                <div className='lg:w-1/2'><SideBar /></div>
            </div>
        </div>
    )
}

export default BlogView