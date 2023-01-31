"use client";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Search from "./components/Search";
import { getPopularMovies, searchMovie } from "./utils/api/moviesAPI";
import Pagination from "./components/Pagination";

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [movies, setMovies] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesPerPage, setMoviesPerPage] = useState(5);

	const fetchPopularMovies = async () => {
		setIsLoading(true);

		let popularMoviesData = await getPopularMovies();
		setMovies(popularMoviesData.results);

		setIsLoading(false);
	};

	const searchMovies = async (searchTerm) => {
		let movies = await searchMovie(searchTerm);
		setMovies(movies.results);
	};

	const resetSearchFilter = () => {
		fetchPopularMovies();
		setCurrentPage(1);
	};

	useEffect(() => {
		fetchPopularMovies();
	}, []);

	// Get current movies
	const indexOfLastMovie = currentPage * moviesPerPage; // 1 * 20 = 20
	const indexOfFirstMovie = indexOfLastMovie - moviesPerPage; // 20 - 20 = 0
	const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<main>
			<div className="container mx-auto mb-14">
				<Search
					handleSearch={searchMovies}
					handleReset={resetSearchFilter}
				/>
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
					<div className="container mx-auto">
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
