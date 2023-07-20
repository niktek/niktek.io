<script lang="ts">
	import { formatCategory, formatDate } from '$lib/utils';
	import { authors } from '$lib/data/authors';
	import { categories } from '$lib/data/categories';

	// Types
	import type { Post } from '$lib/types.js';

	// Loaded Data
	export let data;

	// Post Filters
	// We query our list of posts in different manners below:
	const postsFeatured = data.posts.filter((post: Post) => post.featured === true);
	const postFeaturedSmall = postsFeatured.slice(1, 4);
	const postsStandard = data.posts.slice(1, 5); // .filter((post: Post) => post.featured !== true);
	const postsAstronauts = data.posts.filter((post: Post) => post.categories.includes('astronauts'));
</script>

<!-- Page Head SEO -->
<svelte:head>
	<title>Blog</title>
</svelte:head>

<div>
	<!-- DEBUG: enable to preview the data structure: -->
	<!-- <pre class="pre">{JSON.stringify(data, null, 2)}</pre> -->
	<!-- <pre class="pre">{JSON.stringify(postsFeatured, null, 2)}</pre> -->
	<!-- <pre class="pre">{JSON.stringify(postFeaturedSmall, null, 2)}</pre> -->
	<!-- <pre class="pre">{JSON.stringify(postsStandard, null, 2)}</pre> -->
	<!-- <pre class="pre">{JSON.stringify(postsAstronauts, null, 2)}</pre> -->

	<hr class="container mx-auto" />

	<!-- Header -->
	<header class="section-padding flex justify-center items-center py-10">
		<!-- Responsive Title -->
		<!-- NOTE: you may need to adjust the font-size based on the number of characters -->
		<!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text -->
		<svg class="container mx-auto w-full" viewBox="0 0 1750 280" xmlns="http://www.w3.org/2000/svg">
			<text
				font-size={310}
				x="50%"
				y="50%"
				dominant-baseline="central"
				text-anchor="middle"
				class="fill-token uppercase font-bold"
			>
				Niktek
			</text>
		</svg>
	</header>

	<hr class="container mx-auto" />

	<!-- Featured -->
	<section class="section-padding">
		<div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
			<!-- The Top Post -->
			<a class="space-y-4" href="/posts/{postsFeatured[0].slug}">
				<img
					class="w-full aspect-video rounded-container-token"
					src={postsFeatured[0].feature_image}
					alt="Portfolio"
				/>
				<h2 class="h2">{postsFeatured[0].title}</h2>
				<article>
					<p>{postsFeatured[0].excerpt}</p>
				</article>
			</a>
			<!-- Additional Featured Posts -->
			<div class="grid grid-cols-1 gap-8 place-content-start">
				{#each postFeaturedSmall as post, i}
					<a class="grid grid-cols-1 sm:grid-cols-[300px_1fr] gap-5" href="/posts/{post.slug}">
						<img
							class="w-full aspect-video rounded-container-token"
							src={post.feature_image}
							alt="Portfolio"
						/>
						<div class="space-y-4">
							<time class="block text-base">{formatDate(post.date)}</time>
							<h3 class="h3">{post.title}</h3>
						</div>
					</a>
					{#if i < postFeaturedSmall.length - 1}<hr class="opacity-50" />{/if}
				{/each}
			</div>
		</div>
	</section>

	<!-- Latest -->
	<section class="section-padding bg-surface-900-50-token text-surface-50-900-token">
		<div class="container mx-auto space-y-10">
			<h2 class="h3">Latest Posts</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
				{#each postsStandard as post}
					<a class="space-y-2" href="/posts/{post.slug}">
						<img
							class="w-full aspect-square rounded-container-token"
							src={post.thumbnail_image}
							alt="Portfolio"
						/>
						<time class="block text-base">{formatDate(post.date)}</time>
						<h3 class="h3">{post.title}</h3>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- Authors / Categories -->
	<section class="section-padding variant-filled-primary">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-10 lg:gap-20 items-center">
				<!-- Authors -->
				<div class="space-y-4">
					<h2 class="h3">Authors</h2>
					<div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
						{#each authors as author}
							<a class="text-center space-y-2" href={author.website} target="_blank">
								<img
									class="w-full max-w-xs aspect-square mx-auto rounded-full overflow-hidden"
									src={author.profile_image}
									alt={author.slug}
								/>
								<div>
									<h4 class="h2 md:h3">{author.name}</h4>
									<p class="opacity-75">{author.title}</p>
								</div>
							</a>
						{/each}
					</div>
				</div>
				<!-- Categories -->
				<div class="space-y-4">
					<h2 class="h3">Categories</h2>
					<p class="opacity-75">Filter articles by a particular category.</p>
					<div class="flex gap-2 flex-wrap">
						{#each categories as category}
							<a href="/categories/{category}" class="btn variant-filled capitalize">
								{formatCategory(category)}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Tag: Astronauts -->
	<section class="section-padding bg-surface-900-50-token text-surface-50-900-token">
		<div class="container mx-auto space-y-10">
			<h2 class="h3">Astronauts</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
				{#each postsAstronauts as post}
					<a class="space-y-2" href="/posts/{post.slug}">
						<img
							class="w-full aspect-square rounded-container-token"
							src={post.thumbnail_image}
							alt="Portfolio"
						/>
						<time class="block text-base">{formatDate(post.date)}</time>
						<h3 class="h3">{post.title}</h3>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
