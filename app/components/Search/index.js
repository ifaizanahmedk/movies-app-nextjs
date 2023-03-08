import React, { useState } from "react";
import { API_URL } from "@/app/utils/constants";

const Search = ({ handleSearch, handleReset }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputs = (e) => {
		let { value } = e.target;

		setSearchTerm(value);
	};

	const searchMovies = async (e) => {
		e.preventDefault();

		handleSearch(searchTerm);
	};

	const resetSearchFilter = () => {
		setSearchTerm("");
		handleReset();
	};

	return (
		<>
			<form onSubmit={searchMovies} className="text-center">
				<input
					type="text"
					className="form-input search-movie rounded px-5 py-2 w-96 mr-3 text-black"
					placeholder="Search a Movie"
					name="searchTerm"
					value={searchTerm}
					onChange={handleInputs}
					required
				/>
				<button
					className={`bg-blue-500 text-white font-bold py-2 px-4 rounded mr-3
						${searchTerm.length === 0 ? "disabled:opacity-75" : "hover:bg-blue-700"}
						`}
					disabled={searchTerm.length > 0 ? false : true}>
					Search
				</button>
				<button
					onClick={resetSearchFilter}
					type="reset"
					className="bg-gray-200 text-black font-bold py-2 px-4 rounded">
					Reset
				</button>
			</form>
		</>
	);
};

export default Search;
