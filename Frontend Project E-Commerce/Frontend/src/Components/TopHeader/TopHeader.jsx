import { NavLink } from 'react-router';

function TopHeader() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mlg:justify-evenly justify-center font-poppins items-center bg-black p-2 gap-2 text-center md:text-left">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-2">
          <p className="text-white text-xs sm:text-sm md:text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <NavLink
            to="/allProducts"
            className="text-white font-bold text-xs sm:text-sm md:text-base"
          >
            Shop Now
          </NavLink>
        </div>

        <div className="text-white">
          <select className="px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-white cursor-pointer focus:bg-black">
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="ur">Urdu</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
