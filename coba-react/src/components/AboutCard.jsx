import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutCard = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/about');
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-10 py-9 font-serif text-center items-center justify-center'>
      {aboutData.map((about) => (
        <Link
          to={`/about/`}
          key={about.id}
          className='p-5 shadow-md cursor-pointer hover:text-biruTerangLight hover:scale-105 transition-transform duration-300 rounded-lg h-full' // Added height style
        >
          <div className='flex flex-col h-full'> {/* Container with flex and fixed height */}
            <div className='mb-4'>
              <img src={about.image} alt='' className='w-auto m-auto h-32 object-cover' /> {/* Added height style for image */}
            </div>
            <h3 className='mt-4 mb-2 font-bold cursor-pointer'>{about.title}</h3>
            <p className='text-sm font-sans text-gray-500'>{about.deskripsi}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AboutCard;
