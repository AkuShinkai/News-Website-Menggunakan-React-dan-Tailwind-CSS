import React from 'react'
import ContactPage from '../components/ContactPage'

const Contact = () => {
  return (
    <div>
      <div className='py-40 bg-biruGelapLight font-serif text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '>Contact Us</h2>
      </div>
      <div className='max-w-7xl mx-auto'>
        <ContactPage />
      </div>
    </div>
  )
}

export default Contact