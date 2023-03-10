'use client';

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Movie from './Movie';
import Search from './components/Search';
import Pagination from './components/Pagination';

import { searchMovie } from './utils/api/moviesAPI';
import { fetchInitialData } from './actions/movies';

const Home = ({ movies, isLoading, error, fetchInitialData }) => {
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
    let searchedMovies = await searchMovie(searchTerm);
    setMovies(searchedMovies.results);
  };

  const resetSearchFilter = () => {
    // fetchPopularMovies();
    fetchInitialData();
    setCurrentPage(1);
  };

  useEffect(() => {
    // fetchPopularMovies();
    fetchInitialData();
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
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoading: state.movies.isLoading,
  error: state.movies.error
});

const mapDispatchToProps = {
  fetchInitialData
};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
