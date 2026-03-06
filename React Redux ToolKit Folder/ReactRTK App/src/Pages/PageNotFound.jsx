import { NavLink } from 'react-router';
function PageNotFound() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center mt-10 ">
        <img
          className="w-1/4"
          src="https://img.freepik.com/premium-vector/bold-teal-404-numbers-vector_656853-3519.jpg?semt=ais_user_personalization&w=740&q=80"
          alt="Page Not Found"
        />
        <NavLink to="/">
          <button className="bg-blue-500 text-white px-4 py-2 font-bold rounded-2xl cursor-pointer hover:bg-blue-700 transition delay-150 duration-200 ease-in-out">
            Go Back To Home
          </button>
        </NavLink>
        <p className="text-gray-500">Your Requested URL is Incorrect !!!!!!!.</p>
      </div>
    </>
  );
}

export default PageNotFound;
