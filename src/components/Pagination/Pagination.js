import React from 'react';
import PropTypes from 'prop-types';

const populatePageNumbers = (postsPerPage, totalPosts) => {
  const pageNumbers = [];

  /* eslint-disable-next-line no-plusplus */
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = populatePageNumbers(postsPerPage, totalPosts);

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item inline-block">
            <button
              className="page-link py-2 px-4 border"
              onClick={() => paginate(number)}
              type="button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginate: PropTypes.func
};

Pagination.defaultProps = {
  postsPerPage: 0,
  totalPosts: 0,
  paginate: () => {}
};

export default Pagination;
