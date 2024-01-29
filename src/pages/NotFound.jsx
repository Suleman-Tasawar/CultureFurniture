import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="text-white text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl mt-4">Oops! Page not found 😞</p>
        <p className="text-xl mt-2">
          The page you are looking for might be in another dimension or it might
          be out for a walk
        </p>
        <button className="mt-6 bg-button-background text-dark-brown px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
          <Link to="/">Go back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
