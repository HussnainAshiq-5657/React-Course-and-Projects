import { NavLink } from 'react-router';

function PageNotFound() {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center font-poppins my-20 px-4 text-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold">404</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
            The page you visited was not found. You may go back to the home page.
          </p>
        </div>
        <div className="mt-5">
          <NavLink
            to="/"
            className="bg-danger px-6 py-3 text-white rounded-lg text-sm sm:text-base md:text-lg hover:bg-red-600 transition duration-300"
          >
            Back to Home Page
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
