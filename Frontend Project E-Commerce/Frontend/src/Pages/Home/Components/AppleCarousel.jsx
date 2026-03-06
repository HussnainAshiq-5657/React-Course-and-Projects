import Slider from 'react-slick';
import { NavLink } from 'react-router';
import { FaAngleRight } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Iphone from '../../../assets/Iphone.jpg';
import Logo from '../../../assets/Logo.png';

function AppleCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slidesData = [
    {
      id: 1,
      title: 'iPhone 14 Series',
      heading: 'Up to 10% off Voucher',
      image: Iphone,
    },
    {
      id: 2,
      title: 'MacBook Pro',
      heading: 'Up to 15% off',
      image: Iphone,
    },
    {
      id: 3,
      title: 'Apple Watch',
      heading: 'Special 20% Discount',
      image: Iphone,
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full md:max-w-7xl md:mx-auto md:flex md:justify-center flex flex-col md:flex-row px-4 mb-16 font-poppins">
        <div className="hidden lg:flex md:w-1/4 lg:w-1/5 pt-8 pr-6 border-r border-gray-300 flex-col gap-4 text-base">
          <NavLink
            to="/"
            className="flex justify-between items-center hover:text-red-500 transition"
          >
            <p>Woman’s Fashion</p>
            <FaAngleRight />
          </NavLink>

          <NavLink
            to="/"
            className="flex justify-between items-center hover:text-red-500 transition"
          >
            <p>Men’s Fashion</p>
            <FaAngleRight />
          </NavLink>

          <NavLink to="/" className="hover:text-red-500 transition">
            Electronics
          </NavLink>
          <NavLink to="/" className="hover:text-red-500 transition">
            Home & Lifestyle
          </NavLink>
          <NavLink to="/" className="hover:text-red-500 transition">
            Medicine
          </NavLink>
          <NavLink to="/" className="hover:text-red-500 transition">
            Sports & Outdoor
          </NavLink>
          <NavLink to="/" className="hover:text-red-500 transition">
            Baby’s & Toys
          </NavLink>
          <NavLink to="/" className="hover:text-red-500 transition">
            Groceries & Pets
          </NavLink>
          <NavLink to="/" className="hover:text-red-500 transition">
            Health & Beauty
          </NavLink>
        </div>

        {/* Carousel */}
        <div className="w-full md:w-3/4 lg:w-4/5 mt-6 md:mt-8 md:pl-8 rounded-2xl overflow-hidden">
          <Slider {...settings}>
            {slidesData.map((slide) => (
              <div key={slide.id}>
                <div className="flex flex-col sm:flex-row justify-between items-center bg-black text-white p-6 sm:p-8 md:p-12 rounded-lg gap-6">
                  {/* Left Content */}
                  <div className="space-y-4 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <img src={Logo} alt="Logo" className="w-6 md:w-8" />
                      <p className="text-sm md:text-base">{slide.title}</p>
                    </div>

                    <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                      {slide.heading}
                    </h1>

                    <NavLink to="/">
                      <div className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer group">
                        <button className="text-sm md:text-base border-b border-white group-hover:text-red-500 transition">
                          Shop Now
                        </button>
                        <FaArrowRight className="group-hover:translate-x-1 transition" />
                      </div>
                    </NavLink>
                  </div>

                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-28 sm:w-40 md:w-64 lg:w-80 object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AppleCarousel;
