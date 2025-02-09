
import AddToFav from '../../../components/AddToFav';
import Link from 'next/link';

export default async function MoviePage({ params }) {
  const { id: movieId } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  if (!res.ok) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Movie details are not available at the moment!
        </h1>
        <Link
          href="/"
          className="px-6 py-2 text-lg font-medium text-white bg-amber-600 rounded-md shadow-lg hover:bg-amber-700 transition"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Movie Image */}
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title || movie.name}
          className="rounded-lg w-full md:w-96 h-64 md:h-auto object-cover shadow-lg"
        />

        {/* Movie Details */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed dark:text-white">{movie.overview}</p>

          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-semibold text-gray-800">Release Date:</span>{' '}
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-800">Rating:</span>{' '}
              {movie.vote_average} / 10 ({movie.vote_count} votes)
            </p>
          </div>

          <AddToFav
            movieId={movieId}
            title={movie.title || movie.name}
            image={movie.backdrop_path || movie.poster_path}
            overview={movie.overview}
            releaseDate={movie.release_date || movie.first_air_date}
            voteCount={movie.vote_count}
          />
        </div>
      </div>
    </div>
  );
}
