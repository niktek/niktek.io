<script lang="ts">
	import { formatDate, formatAuthor, formatCategory } from '$lib/utils';
	import type { Author } from '$lib/types.js';

	// Loaded Data
	export let data;

	// Local
	const currentAuthor: Author | undefined = formatAuthor(data.meta.author_slug);
</script>

<!-- Page Head SEO -->
<!-- Reference: https://ogp.me/ -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div>
	<!-- Debug: -->
	<!-- <pre class="pre">{JSON.stringify(data, null, 2)}</pre> -->

	<hr class="container mx-auto" />

	<!-- Header -->
	<header class="section-padding">
		<div class="container mx-auto">
			<h1 class="h1">{data.meta.title}</h1>
		</div>
	</header>

	<hr class="container mx-auto" />

	<!-- Metadata -->
	<section class="section-padding">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20">
				<!-- Category -->
				<div class="space-y-2 md:space-y-4">
					<p>Category</p>
					<div class="flex gap-2 flex-wrap">
						{#each data.meta.categories as category}
							<a href="/categories/{category}" class="btn variant-ringed capitalize">
								{formatCategory(category)}
							</a>
						{/each}
					</div>
				</div>
				<!-- Author -->
				<div class="space-y-2 md:space-y-4">
					<p>Author</p>
					<div class="grid grid-cols-1">
						<p class="text-2xl font-bold">{currentAuthor?.name}</p>
					</div>
				</div>
				<!-- Published -->
				<div class="space-y-2 md:space-y-4">
					<p>Published</p>
					<p class="text-2xl font-bold">{formatDate(data.meta.date)}</p>
				</div>
				<!-- Reading Time -->
				<div class="space-y-2 md:space-y-4">
					<p>Reading Time</p>
					<p class="text-2xl font-bold">{data.meta.reading_time} mins</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Image -->
	<section class="section-padding bg-surface-900-50-token">
		<div class="container mx-auto">
			<img
				class="w-full rounded-container-token overflow-hidden"
				src={data.meta.feature_image}
				alt="banner"
			/>
		</div>
	</section>

	<!-- Content -->
	<section class="section-padding">
		<div class="container mx-auto">
			<!-- Article - styled via: https://tailwindcss.com/docs/typography-plugin -->
			<!-- Find all styles configured in `/src/app.postcss` -->
			<article class="prose prose-neutral md:prose-lg lg:prose-xl max-w-none">
				<svelte:component this={data.content} />
			</article>
		</div>
	</section>

	<!-- Author -->
	{#if currentAuthor}
		<section class="section-padding variant-filled-primary">
			<div class="max-w-7xl mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center">
					<img
						class="w-[50%] md:w-[280px] mx-auto aspect-square rounded-full overflow-hidden"
						src={currentAuthor.profile_image}
						alt="Portfolio"
					/>
					<div class="space-y-5">
						<div class="space-y-0">
							<h2 class="h5">About the Author</h2>
							<h2 class="h1">{currentAuthor.name}</h2>
						</div>
						<p>{currentAuthor.bio}</p>
					</div>
				</div>
			</div>
		</section>
	{/if}
</div>
