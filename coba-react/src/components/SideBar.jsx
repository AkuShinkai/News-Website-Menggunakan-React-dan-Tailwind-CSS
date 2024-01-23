import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const SideBar = () => {
    const [popularPost, setPopularPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs').then(res => res.json()).then(data => setPopularPost(data.slice(0, 15)))
    }, [])


    return (
        <div className='sticky top-20 px-2'>
            <div className='shadow-md rounded-md'>
                <h3 className='text-2xl font-semibold font-serif px-4'>Lastest Post</h3>
                {
                    popularPost.slice(0, 5).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h4 className='font-medium mb-2'>{blog.title}</h4>
                        <Link to={`/blogs/${blog.id}`} key={blog.id} className='font-base font-serif pb-2 hover:text-biruTerangLight inline-flex items-center py-1'>Read More<FaArrowRight className='mt-1 ml-2' /></Link>
                    </div>)
                }
            </div>

            {/* popular post  */}
            <div className='shadow-md rounded-md'>
                <h3 className='text-2xl font-semibold font-serif px-4 mt-20'>Popular Post</h3>
                {
                    popularPost.slice(6, 10).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h4 className='font-medium mb-2'>{blog.title}</h4>
                        <Link to={`/blogs/${blog.id}`} key={blog.id} className='font-base font-serif pb-2 hover:text-biruAgakGelapLight inline-flex items-center py-1'>Read More<FaArrowRight className='mt-1 ml-2' /></Link>
                    </div>)
                }
            </div>
        </div>
    )
}

export default SideBar