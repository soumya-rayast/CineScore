import React from 'react';

const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-2xl p-4 text-center">
        <h1 className="text-3xl font-semibold my-3">About CineScore</h1>
        <div className="text-md text-gray-800 dark:text-white flex flex-col gap-6">
          <p>
            Welcome to <strong>CineScore</strong>, your go-to IMDb clone for all things movies and TV shows.
          </p>
          <p>
            At CineScore, you’ll find detailed information about your favorite movies and TV series, including summaries, user reviews, and ratings. Our goal is to keep our database up to date, ensuring you have access to the latest and most accurate entertainment details.
          </p>
          <p>
            Explore a vast collection of movies and TV shows, from timeless classics to the latest blockbusters. Discover hidden gems, browse curated lists, and stay informed about upcoming releases.
          </p>
          <p>
            Our user-friendly interface allows you to search for titles, read insightful reviews, and even contribute your own ratings and opinions. CineScore is designed to be an engaging community for movie enthusiasts to share their love for cinema.
          </p>
          <p>
            Join us at CineScore and enhance your entertainment experience today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
