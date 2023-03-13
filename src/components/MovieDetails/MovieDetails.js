import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { IMAGE_PATH } from '@/utils/constants';

function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;

  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.isLoading);
  const error = useSelector((state) => state.movies.error);

  const movieData = movies.find((movie) => movie.id === Number(id));
  const { title, release_date, runtime, status, backdrop_path, overview } = movieData;

  if (isLoading) {
    return <div className="container mx-auto">Loading...</div>;
  }
  if (error) {
    return <div className="container mx-auto">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      {title && <h2 className="text-2xl">{title}</h2>}
      {/* eslint-disable-next-line camelcase */}
      {release_date && <h2 className="text-lg">{release_date}</h2>}
      {runtime && <h2>Runtime: {runtime}</h2>}
      {status && (
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{status}</h2>
      )}
      {/* eslint-disable-next-line camelcase */}
      {backdrop_path && (
        <Image
          className="my-12"
          /* eslint-disable-next-line camelcase */
          src={IMAGE_PATH + backdrop_path}
          alt={title}
          width={1000}
          height={1000}
          priority
        />
      )}
      {overview && <p>{overview}</p>}
    </div>
  );
}

export default MovieDetails;
