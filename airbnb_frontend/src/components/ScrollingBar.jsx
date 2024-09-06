import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function ScrollingBar() {
  const [categoriesData, setCategoriesData] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);

  const [ishome, setIsHome] = useState(false)

  useEffect(() => {
    fetch('https://airbnb-dl81.onrender.com/api/category/all')
      .then(response => response.json())
      .then(data => setCategoriesData(data.data.categories))
      .catch(error => console.error('Error fetching hotels:', error));
  },
    []);

  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/airbnbYourRoom') {
      setIsHome(true)

    }
  }, [location.pathname])

  const activeFilter = (index) => {
    setActiveIndex(index);
  };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <>
      {
        ishome ? <></>
          :
          <div className='border-t pt-4 px-4 mt-9 shadow-[rgb(0_0_0/16%)_0_0] max-md:border-t-0 max-md:mt-0 shadow'>
            <div className='myContainer mx-auto overflow-scroll scrollWrapper'>

              <div className='flex justify-between gap-10 w-max overflow-scroll scrollBar'>


                {
                  categoriesData.map((category, index) => (
                    <ul
                      key={index}
                      className={`text-center flex flex-col text-[#6a6a6a] cursor-pointer hover:text-[#000] hover:border-b-2 hover:border-[#6a6a6a] ${activeIndex === index && '!text-[#000] border-b-2 border-[#000] pb-2'
                        }`}
                      onClick={() => activeFilter(index)}
                    >
                      <li className='text-[25px]'><i className={category.icon} /></li>
                      <li className='text-[12px]'>{category.name}</li>
                    </ul>
                  ))

                }


              </div>


            </div>
          </div>
      }
    </>
  )
}

export default ScrollingBar
