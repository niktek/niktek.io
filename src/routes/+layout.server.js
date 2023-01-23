import { VERCEL_ENV, VERCEL_URL } from '$env/static/private';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	return {
		vercelEnv: VERCEL_ENV, vercelUrl: VERCEL_URL
	};
}