import { NavLink } from 'react-router';

function NewArrival() {
  return (
    <div className="font-poppins my-12   w-4/5 mx-auto">
      <div className="mb-8">
        <p className="text-red-500 font-medium">Featured</p>
        <h1 className="text-2xl md:text-3xl font-semibold">New Arrival</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black p-6 text-white rounded-lg">
          <div className="h-56 md:h-100 bg-contain bg-no-repeat bg-center bg-[url('/PlayStation.png')]"></div>
          <div className="flex flex-col gap-3 mt-4">
            <h3 className="text-xl font-semibold">PlayStation 5</h3>
            <p className="text-sm text-gray-300">
              Black and White version of the PS5 coming out on sale.
            </p>
            <NavLink to="/" className="underline hover:text-gray-300 underline-offset-5">
              Shop Now
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-black p-6 text-white rounded-lg">
            <div className="h-38 md:h-48 bg-[url('/woman.jpg')] bg-no-repeat bg-contain bg-right"></div>
            <div className="flex flex-col gap-2 ">
              <h3 className="text-lg font-semibold">Women’s Collections</h3>
              <p className="text-sm text-gray-300">
                Featured woman collections that give you another vibe.
              </p>
              <NavLink to="/" className="underline hover:text-gray-300 underline-offset-5">
                Shop Now
              </NavLink>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black p-6 text-white rounded-lg">
              <div className="h-40 bg-contain bg-no-repeat bg-center bg-[url('/speaker.png')]"></div>
              <div className="flex flex-col gap-2 mt-4">
                <h3 className="text-lg font-semibold">Speakers</h3>
                <p className="text-sm text-gray-300">Premium sound experience.</p>
                <NavLink to="/" className="underline hover:text-gray-300 underline-offset-5">
                  Shop Now
                </NavLink>
              </div>
            </div>

            <div className="bg-black p-6 text-white rounded-lg">
              <div className="h-40 bg-contain bg-no-repeat bg-center bg-[url('/perfume.png')]"></div>
              <div className="flex flex-col gap-2 mt-4">
                <h3 className="text-lg font-semibold">Perfume</h3>
                <p className="text-sm text-gray-300">Luxury fragrance collection.</p>
                <NavLink to="/" className="underline hover:text-gray-300 underline-offset-5">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
