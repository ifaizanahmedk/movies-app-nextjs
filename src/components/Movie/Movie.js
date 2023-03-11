import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { IMAGE_PATH } from '@/utils/constants';

function Movie({ title, id, poster_path, release_date }) {
  return (
    <div>
      <Link
        href={{
          pathname: '/movie/[id]',
          query: { id }
        }}>
        {/* eslint-disable-next-line camelcase */}
        <Image src={IMAGE_PATH + poster_path} alt={title} width={800} height={800} />
      </Link>
      <h1>{title}</h1>
      {/* eslint-disable-next-line camelcase */}
      <h2>{release_date}</h2>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string
};

Movie.defaultProps = {
  title: '',
  poster_path: '',
  release_date: ''
};

export default Movie;
