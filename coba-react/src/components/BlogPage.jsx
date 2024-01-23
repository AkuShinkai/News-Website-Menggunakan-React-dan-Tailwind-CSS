import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';
import Swiper from './Swiper';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 18
  const swiperSize = 6
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);


  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      // filter kategori berita
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory])

  // page change button
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }

  return (
    <div>
      {/* kategori */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory}
          activeCategory={activeCategory} />
      </div>

      {/* card section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

        {/* SideBar */}
        <div>
          <SideBar />
        </div>

      </div>

      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
      </div>

      <div className='pb-6'>
        <Swiper blogs={blogs} swiperSize={swiperSize}/>
      </div>

    </div>
  )
}

export default BlogPage