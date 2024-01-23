import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-biruGelapLight font-serif mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to our news website</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Menyajikan Berita Terkini Berdasarkan Kejadian Yang Ada DiSekitar Anda</p>
            <div>
                <Link to="/" className='font-medium hover:text-biruTerangLight inline-flex items-center py-1'>Learn More <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner