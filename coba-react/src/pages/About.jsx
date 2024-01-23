import React from 'react'
import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <div>
      <div className='py-40 bg-biruGelapLight text-center font-serif text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '>About Us</h2>
      </div>

      {/* container about  */}
      <div className='max-w-7xl mx-auto'>
        <AboutCard />
      </div>
    </div>
  )
}

export default About