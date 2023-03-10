/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		apiKey: process.env.API_KEY,
	},
	// serverRuntimeConfig: {
	// 	// Will only be available on the server side
	// 	apiKey: process.env.API_KEY, // Pass through env variables
	// },
	// publicRuntimeConfig: {
	// 	// Will be available on both server and client
	// 	apiKey: process.env.API_KEY,
	// 	// staticFolder: "/static",
	// },
	images: {
		domains: ["image.tmdb.org"],
	},
};

module.exports = nextConfig;
