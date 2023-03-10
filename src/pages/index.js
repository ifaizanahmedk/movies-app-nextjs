import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Movie from '@/features/Movie';
import Search from '@/components/Search';
import Pagination from '@/components/Pagination';

import { searchMovie } from '@/utils/api/moviesAPI';
import { fetchInitialData } from '@/redux/actions/movies';

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.isLoading);
  const error = useSelector((state) => state.movies.error);
  // const [isLoading, setIsLoading] = useState(false);
  // const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  // const fetchPopularMovies = async () => {
  //   setIsLoading(true);

  //   let popularMovies = await getPopularMovies();
  //   setMovies(popularMovies.results);

  //   setIsLoading(false);
  // };

  const searchMovies = async (searchTerm) => {
    const searchedMovies = await searchMovie(searchTerm);
  };

  const resetSearchFilter = () => {
    // fetchPopularMovies();
    dispatch(fetchInitialData());
    setCurrentPage(1);
  };

  useEffect(() => {
    // fetchPopularMovies();
    dispatch(fetchInitialData());
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <div className="container mx-auto mb-14">
        <Search onSearch={searchMovies} onReset={resetSearchFilter} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
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
            <Pagination
              postsPerPage={moviesPerPage}
              totalPosts={movies.length}
              paginate={paginate}
            />
          </div>
        </>
      )}
    </main>
  );
}

export default Home;
