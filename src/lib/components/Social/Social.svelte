<script lang="ts">
	import { socialLinks } from '$lib/data/social';

	/** Provide classes to set the button variant style. */
	export let variant = 'variant-soft hover:variant-filled-primary';
</script>

<div class="flex space-x-4">
	{#each socialLinks as link}
		<a
			class="btn-icon bg-icon-lg {variant}"
			href={link.url}
			target={link.target}
			rel="noreferrer"
			title={link.title}
		>
			<i class={link.icon} />
		</a>
	{/each}
</div>
