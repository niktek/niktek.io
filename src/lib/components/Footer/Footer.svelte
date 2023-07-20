<script>
	import Social from '../Social/Social.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="section-padding border-t border-surface-500/10">
	<div class="container mx-auto flex flex-col items-center gap-10">
		<Social />
		<p class="text-xs opacity-50">© Copyright {currentYear}. All rights reserved.</p>
	</div>
</footer>
