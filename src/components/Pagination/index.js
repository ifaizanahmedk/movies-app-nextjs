import React from "react";

const populatePageNumbers = (postsPerPage, totalPosts) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return pageNumbers;
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = populatePageNumbers(postsPerPage, totalPosts);

	return (
		<nav>
			<ul>
				{pageNumbers.map((number) => (
					<li key={number} className="page-item inline-block">
						<button
							className="page-link py-2 px-4 border"
							onClick={() => paginate(number)}>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;