<script lang="ts">

	// Set Theme:
	// https://www.skeleton.dev/docs/get-started#themes
	// https://www.skeleton.dev/docs/themes
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';

	// Stylesheets
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { afterNavigate } from '$app/navigation';

	// Settings
	const stickyHeader = true;

	// (optional) Scroll App Shell to top after route navigation
	afterNavigate((params: any) => {
		const isNewPage: boolean =
			params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) elemPage.scrollTop = 0;
	});

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell slotPageHeader={stickyHeader ? 'sticky top-0 z-10' : ''}>
	<!-- Slot: Page Header -->
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />

	<!-- Slot: Page Footer -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
