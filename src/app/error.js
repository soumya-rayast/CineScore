"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Please try again later or refresh the page.
      </p>
      <button
        className="px-6 py-3 text-lg font-medium text-white bg-amber-600 rounded-lg shadow-md hover:bg-amber-700 transition"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  ); 
}
