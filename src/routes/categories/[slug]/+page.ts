import type { Post } from '$lib/types';

export async function load({ fetch, params }) {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();
	// Filter posts by current slug
	const filteredByCategory = posts.filter((post: Post) => post.categories.includes(params.slug));
	// Return to `export let data;` for this route
	return { slug: params.slug, posts: filteredByCategory };
}
