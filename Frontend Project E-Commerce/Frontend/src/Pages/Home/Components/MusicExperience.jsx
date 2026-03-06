import { NavLink } from 'react-router';
import BoomBox from '../../../assets/BoomBox.png';
import ReverseClock from './ReverseClock';

function MusicExperience() {
  return (
    <div className="bg-black w-full lg:w-4/5 mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-10 rounded-md flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-12">
      <div className="flex flex-col pl-2 gap-4 sm:gap-6 lg:w-1/2 text-center lg:text-left">
        <p className="text-base sm:text-lg md:text-xl text-green-500">Categories</p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug">
          Enhance Your Music Experience
        </h1>

        <ReverseClock />

        <NavLink
          to="/allProducts"
          className="px-4 sm:px-6 py-2 sm:py-3 text-center text-white bg-green-400 rounded-xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green-500 w-1/2 sm:w-auto mx-auto lg:mx-0"
        >
          Buy Now
        </NavLink>
      </div>

      <div className="relative lg:w-1/2 flex justify-center mt-6 lg:mt-10 lg:pb-6">
        <img
          src={BoomBox}
          alt="Picture of Music Box"
          className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-4/5 relative z-10"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(200,200,200,0.35)_5%,rgba(0,0,0,0.8)_40%)] rounded-md z-0"></div>
      </div>
    </div>
  );
}

export default MusicExperience;
