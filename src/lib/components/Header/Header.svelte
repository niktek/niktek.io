<script>
	import { page } from '$app/stores';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	// For best results limit to 3-5 options max
	const navigation = [
		{ label: 'Home', path: '/' },
		{ label: 'About', path: '/about' }
		// Enable this to show the test sandbox page
		// { label: 'Sandbox', path: '/sandbox' }
	];
</script>

<header class="bg-surface-50/75 dark:bg-surface-900/90 backdrop-blur-xl">
	<AppBar
		background="bg-transparent"
		padding="px-5 md:px-0 py-10"
		gap="gap-10"
		class="container mx-auto"
	>
		<!-- Slot: Lead -->
		<svelte:fragment slot="lead">
			<a
				href="/"
				class="btn-icon md:btn-icon-lg bg-gradient-to-tr variant-gradient-secondary-tertiary"
				title="Return to homepage"
			>
				<i class="fa-solid fa-meteor text-2xl" />
			</a>
		</svelte:fragment>

		<!-- Slot: Default (navigation) -->
		<nav class="flex gap-8">
			{#each navigation as route}
				<a
					class="header-anchor"
					href={route.path}
					class:header-anchor-active={$page.url.pathname.split('/')[1] ===
					route.path.replace('/', '')}
				>
					{route.label}
				</a>
			{/each}
		</nav>

		<!-- Slot: Trail -->
		<svelte:fragment slot="trail">
			<LightSwitch rounded="rounded-full" />
		</svelte:fragment>
	</AppBar>
</header>

<style lang="postcss">
	.header-anchor {
		@apply no-underline;
		@apply text-surface-500 dark:text-surface-400;
		@apply hover:text-surface-900 hover:dark:text-surface-50;
	}
	.header-anchor-active {
		@apply text-surface-900 dark:text-surface-50;
	}
</style>
