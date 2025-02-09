import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-lg rounded-xl sm:border border-gray-700 bg-gray-900 overflow-hidden sm:m-3 transition-all duration-300 transform sm:hover:scale-[1.02]">
      <Link href={`/movie/${result.id}`}>
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            alt={result.title || result.name}
            className="w-full h-40 object-cover sm:h-48 group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all"></div>
        </div>

        <div className="p-4 text-white">
          <h2 className="text-lg font-semibold truncate">{result.title || result.name}</h2>
          <p className="text-gray-400 text-sm line-clamp-3">{result.overview}</p>

          <div className="flex items-center text-gray-400 text-xs mt-2">
            <span>{result.release_date || result.first_air_date}</span>
            <FiThumbsUp className="h-4 w-4 ml-3 text-yellow-400" />
            <span className="ml-1">{result.vote_count}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
