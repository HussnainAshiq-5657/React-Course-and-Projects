import React from 'react';
import { NavLink } from 'react-router';

function PageNotFound() {
  return (
    <>
      <div className="flex flex-col items-center gap-12 mt-10">
        <img
          className="w-1/3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1SP2nTF7szXqUGCXO4ku_xYPFJxFFSfsDQ&s"
          alt="404 Error Occured"
        />
        <div className="flex flex-col gap-4 items-center">
          <NavLink to="/" className="bg-blue-600 px-6 py-2 rounded-lg text-white">
            Go To Home Page
          </NavLink>
          <p className="text-lg font-bold">
            You Requested Page Not Existed Please Go Back!!!!!!!!!!!.
          </p>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
