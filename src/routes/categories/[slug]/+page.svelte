<script lang="ts">
	import { formatCategory } from '$lib/utils.js';

	// Loaded Data
	export let data;

	// Local
	const slugFormatted = formatCategory(data.slug);
</script>

<div>
	<!-- <pre class="pre">{JSON.stringify(data, null, 2)}</pre> -->

	<hr class="container mx-auto" />

	<!-- Header -->
	<header class="section-padding">
		<div class="container mx-auto space-y-4">
			<h1 class="h1 capitalize">{slugFormatted}</h1>
			<p>
				Showing <code class="code">{data.posts.length}</code> {data.posts.length > 1 ? 'posts' : 'post'} for
				the <code class="code capitalize">{slugFormatted}</code> category.
			</p>
		</div>
	</header>

	<hr class="container mx-auto" />

	<section class="section-padding bg-surface-900-50-token text-surface-50-900-token">
		<div class="container mx-auto space-y-10">
			{#if data.posts.length}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{#each data.posts as post}
						<a class="space-y-2" href="/posts/{post.slug}">
							<img
								class="w-full aspect-square rounded-container-token"
								src={post.thumbnail_image}
								alt="Portfolio"
							/>
							<time class="block text-base">{post.date}</time>
							<h3 class="h3">{post.title}</h3>
						</a>
					{/each}
				</div>
			{:else}
				<p class="text-center">Sorry, no posts could be found using this category.</p>
			{/if}
		</div>
	</section>
</div>
