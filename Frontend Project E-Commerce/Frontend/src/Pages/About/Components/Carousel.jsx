import Slider from 'react-slick';
import TomCruise from '../../../assets/Tom Cruise.png';
import EmmaWatson from '../../../assets/Emma Watson.png';
import WillSmith from '../../../assets/Will Smith.png';
import { CiTwitter, CiLinkedin } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa6';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const CarouselData = [
    { id: 0, img: TomCruise, name: 'Tom Cruise', message: 'Founder & Chairman' },
    { id: 1, img: EmmaWatson, name: 'Emma Watson', message: 'Managing Director' },
    { id: 2, img: WillSmith, name: 'Will Smith', message: 'Product Designer' },
    { id: 3, img: TomCruise, name: 'Tom Cruise', message: 'Founder & Chairman' },
    { id: 4, img: EmmaWatson, name: 'Emma Watson', message: 'Managing Director' },
    { id: 5, img: WillSmith, name: 'Will Smith', message: 'Product Designer' },
  ];

  return (
    <div className="my-10 w-full max-w-6xl mx-auto px-4">
      <Slider {...settings}>
        {CarouselData.map((item) => (
          <div key={item.id} className="px-3">
            {/* Card */}
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Image */}
              <div className="bg-gray-200 flex justify-center items-center p-6 rounded-xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full max-w-[250px] h-60 sm:h-72 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="mt-4 text-center sm:text-left">
                <p className="font-semibold text-lg sm:text-xl">{item.name}</p>
                <p className="text-gray-600 text-sm sm:text-base">{item.message}</p>

                <div className="flex justify-center sm:justify-start gap-4 mt-3 text-xl">
                  <CiTwitter className="cursor-pointer hover:text-blue-500 transition" />
                  <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
                  <CiLinkedin className="cursor-pointer hover:text-blue-700 transition" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
