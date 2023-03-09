'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { API_URL, IMAGE_PATH } from '../utils/constants';

const MovieDetail = ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState({});
  const { movie } = params;

  const getDataFromUrl = async () => {
    setIsLoading(true);

    const data = await fetch(
      `${API_URL}/movie/${movie}?api_key=${process.env.apiKey}`
      // { next: { revalidate: 60 } }
    );

    const res = await data.json();

    setMovieData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getDataFromUrl();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2 className="text-2xl">{movieData.title}</h2>
          <h2 className="text-lg">{movieData.release_date}</h2>
          <h2>Runtime: {movieData.runtime}</h2>
          <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
            {movieData.status}
          </h2>
          <Image
            className="my-12"
            src={IMAGE_PATH + movieData.backdrop_path}
            alt={movieData.title}
            width={1000}
            height={1000}
            priority
          />
          <p>{movieData.overview}</p>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
