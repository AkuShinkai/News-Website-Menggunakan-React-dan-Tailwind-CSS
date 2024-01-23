import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "gray", color: 'black' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "gray", color: "black" }}
      onClick={onClick}
    />
  );
}

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        className: "center",
        nextArrow: false,
        prevArrow: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
        nextArrow: false,
        prevArrow: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false
      }
    }
  ]
};

// fungsi untuk memotong judul artikel
const truncateTitle = (title, limit = 6) => {
  const words = title.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + ' ...';
  }
  return title;
};

const Swiper = ({ blogs }) => {
  // Check if blogs is an empty array or undefined
  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  return (
    <div className="max-w-7xl m-auto">
      <div className="mt-2">
        <h3 className='text-2xl font-bold font-serif mx-auto text-center py-5 pb-1'>More To Find</h3>
        <Slider {...settings} className='pb-4'>
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="text-black p-3 lg:p-4 shadow-md cursor-pointer hover:text-biruTerangLight hover:scale-105 transition-transform duration-300 rounded-md">
              <div className="bg-white flex flex-col h-full text-black rounded-xl">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={blog.image} alt={blog.title} className="rounded-xl w-full h-full object-cover" />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4 flex-grow">
                  <p className="text-md md:text-md lg:text-md font-semibold text-center">
                    {truncateTitle(blog.title)}
                  </p>
                  <p className="text-sm md:text-base text-center flex items-center py-1">
                    <FaUser className="inline-flex items-center mr-2" />
                    {blog.author}
                  </p>
                  <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl mt-auto">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Swiper;