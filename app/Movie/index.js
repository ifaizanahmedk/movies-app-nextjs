import Link from "next/link";
import Image from "next/image";

import { IMAGE_PATH } from "../utils/constants";

const Movie = ({ title, id, poster_path, release_date }) => (
	<div>
		<Link href={`/${id}`}>
			<Image
				src={IMAGE_PATH + poster_path}
				alt={title}
				width={800}
				height={800}
			/>
		</Link>
		<h1>{title}</h1>
		<h2>{release_date}</h2>
	</div>
);

export default Movie;
