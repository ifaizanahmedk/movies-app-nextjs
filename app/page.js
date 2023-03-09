'use client';

import { useEffect, useState } from 'react';

import Movie from './Movie';
import Search from './components/Search';
import Pagination from './components/Pagination';

import { getPopularMovies, searchMovie } from './utils/api/moviesAPI';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  const fetchPopularMovies = async () => {
    setIsLoading(true);

    let popularMovies = await getPopularMovies();
    setMovies(popularMovies.results);

    setIsLoading(false);
  };

  const searchMovies = async (searchTerm) => {
    let searchedMovies = await searchMovie(searchTerm);
    setMovies(searchedMovies.results);
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
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <div className="container mx-auto mb-14">
        <Search onSearch={searchMovies} onReset={resetSearchFilter} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
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
};

export default Home;
