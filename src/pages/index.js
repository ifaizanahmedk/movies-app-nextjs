import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDataFromUrl } from '@/redux/actions/shared';
import { API_URL } from '@/utils/constants';
import Movie from '@/components/Movie';
import Search from '@/components/Search';
import Pagination from '@/components/Pagination';

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.isLoading);
  const error = useSelector((state) => state.movies.error);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  const fetchPopularMovies = () => {
    const getPopularMoviesAPI = `${API_URL}movie/popular?api_key=${process.env.apiKey}`;
    dispatch(fetchDataFromUrl(getPopularMoviesAPI));
  };

  const fetchSearchedMovies = async (searchTerm) => {
    const getSearchedMovieAPI = `${API_URL}/search/movie?api_key=${process.env.apiKey}&language=en-US&query=${searchTerm}&include_adult=false`;
    dispatch(fetchDataFromUrl(getSearchedMovieAPI));
  };

  const resetSearchFilter = () => {
    fetchPopularMovies();
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <div className="container mx-auto">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto">Error: {error}</div>;
  }

  return (
    <main>
      <div className="container mx-auto mb-14">
        <Search onSearch={fetchSearchedMovies} onReset={resetSearchFilter} />
      </div>
      <div className="container mx-auto">
        <div className="grid gap-16 grid-cols-fluid">
          {currentMovies?.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <Pagination postsPerPage={moviesPerPage} totalPosts={movies.length} paginate={paginate} />
      </div>
    </main>
  );
}

export default Home;
