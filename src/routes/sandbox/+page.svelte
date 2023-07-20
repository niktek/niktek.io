<script lang="ts">
	const svgBolt = `<svg class="fill-current w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M317.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224C.9 240.7-2.6 254.8 2 267.3S18.7 288 32 288H143.5L66.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H240.5L317.4 44.6z" /></svg>`;
</script>

<div class="section-padding !pt-0">
	<div class="container mx-auto space-y-20 pb-20">
		<hr />

		<header class="text-center space-y-5">
			<p class="text-2xl font-bold">
				This page acts as a sandbox to test your current theme styling.
			</p>
			<a
				class="btn variant-filled-primary"
				href="https://www.skeleton.dev"
				target="_blank"
				rel="noreferrer"
			>
				<span>Skeleton Documentation</span>
				<span>&rarr;</span>
			</a>
		</header>

		<hr />

		<!-- Typography -->
		<section class="space-y-4">
			<!-- prettier-ignore -->
			<div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-20">
			<div class="space-y-4">
				<h1 class="h1">Heading 1</h1>
				<h2 class="h2">Heading 2</h2>
				<h3 class="h3">Heading 3</h3>
				<h4 class="h4">Heading 4</h4>
				<h5 class="h5">Heading 5</h5>
				<h6 class="h6">Heading 6</h6>
			</div>
			<div class="space-y-5">
				<p>Paragraph - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, rerum ducimus! Nihil, distinctio deserunt voluptate autem natus optio sint, minus, quas itaque reprehenderit libero molestias? Laboriosam rerum iure nesciunt molestias.</p>
				<p><a class="anchor" href="https://www.youtube.com/watch?v=XTgFtxHhCQ0" target="_blank" rel="noreferrer">This is an anchor link.</a></p>
				<blockquote class="blockquote">Blockquote - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, rerum ducimus! Nihil, distinctio deserunt voluptate autem natus optio sint, minus, quas itaque reprehenderit libero molestias? Laboriosam rerum iure nesciunt molestias.</blockquote>
				<pre class="pre">Pre - The quick brown fox jumps over the lazy dog.</pre>
				<p><code class="code">.myExampleClass</code></p>
			</div>
		</div>
		</section>

		<hr />

		<!-- Buttons -->
		<section class="space-y-4">
			<h2 class="h2">Buttons</h2>
			<!-- prettier-ignore -->
			<p>Visit <a href="https://www.skeleton.dev/elements/buttons" target="_blank" rel="noreferrer">Skeleton Buttons</a> documentation.</p>
			<div class="grid grid-cols-4 md:grid-cols-7 gap-4 overflow-x-auto">
				<button type="button" class="btn variant-filled">Button</button>
				<button type="button" class="btn variant-filled">
					<span>{@html svgBolt}</span>
					<span>Button</span>
				</button>
				<button type="button" class="btn-icon variant-filled"><span>{@html svgBolt}</span></button>
			</div>
			<div class="grid grid-cols-4 md:grid-cols-7 gap-4 overflow-x-auto">
				<button type="button" class="btn variant-filled-primary">Button</button>
				<button type="button" class="btn variant-filled-secondary">Button</button>
				<button type="button" class="btn variant-filled-tertiary">Button</button>
				<button type="button" class="btn variant-filled-success">Button</button>
				<button type="button" class="btn variant-filled-warning">Button</button>
				<button type="button" class="btn variant-filled-error">Button</button>
				<button type="button" class="btn variant-filled-surface">Button</button>
			</div>
			<div class="grid grid-cols-4 md:grid-cols-7 gap-4 overflow-x-auto">
				<button type="button" class="btn variant-ghost-primary">Button</button>
				<button type="button" class="btn variant-ghost-secondary">Button</button>
				<button type="button" class="btn variant-ghost-tertiary">Button</button>
				<button type="button" class="btn variant-ghost-success">Button</button>
				<button type="button" class="btn variant-ghost-warning">Button</button>
				<button type="button" class="btn variant-ghost-error">Button</button>
				<button type="button" class="btn variant-ghost-surface">Button</button>
			</div>
			<div class="grid grid-cols-4 md:grid-cols-7 gap-4 overflow-x-auto">
				<button type="button" class="btn variant-soft-primary">Button</button>
				<button type="button" class="btn variant-soft-secondary">Button</button>
				<button type="button" class="btn variant-soft-tertiary">Button</button>
				<button type="button" class="btn variant-soft-success">Button</button>
				<button type="button" class="btn variant-soft-warning">Button</button>
				<button type="button" class="btn variant-soft-error">Button</button>
				<button type="button" class="btn variant-soft-surface">Button</button>
			</div>
			<div class="grid grid-cols-4 md:grid-cols-7 gap-4 overflow-x-auto">
				<button type="button" class="btn variant-ringed-primary">Button</button>
				<button type="button" class="btn variant-ringed-secondary">Button</button>
				<button type="button" class="btn variant-ringed-tertiary">Button</button>
				<button type="button" class="btn variant-ringed-success">Button</button>
				<button type="button" class="btn variant-ringed-warning">Button</button>
				<button type="button" class="btn variant-ringed-error">Button</button>
				<button type="button" class="btn variant-ringed-surface">Button</button>
			</div>
		</section>

		<hr />

		<!-- Forms -->
		<div class="card p-4 w-full text-token space-y-4">
			<h2 class="h2">Forms</h2>
			<label class="label">
				<span>Input</span>
				<input class="input" type="text" placeholder="Input" />
			</label>
			<label class="label">
				<span>Select</span>
				<select class="select">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
					<option value="4">Option 4</option>
					<option value="5">Option 5</option>
				</select>
			</label>
			<label class="label">
				<span>Textarea</span>
				<!-- cspell:disable-next-line -->
				<textarea
					class="textarea"
					rows="4"
					placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>
			</label>
		</div>

		<hr />

		<!-- Gradients -->
		<section class="space-y-4">
			<h2 class="h2">Gradients</h2>
			<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
				<!-- Core Trio -->
				<div
					class="card bg-gradient-to-br variant-gradient-primary-secondary px-4 py-10 text-center"
				>
					<span class="badge variant-filled">Primary-Secondary</span>
				</div>
				<div
					class="card bg-gradient-to-br variant-gradient-secondary-tertiary px-4 py-10 text-center"
				>
					<span class="badge variant-filled">Secondary-Tertiary</span>
				</div>
				<div
					class="card bg-gradient-to-br variant-gradient-tertiary-primary px-4 py-10 text-center"
				>
					<span class="badge variant-filled">Tertiary-Primary</span>
				</div>
				<!-- Core Trio (reversed) -->
				<div
					class="card bg-gradient-to-br variant-gradient-secondary-primary px-4 py-10 text-center"
				>
					<span class="badge variant-filled">Secondary-Primary</span>
				</div>
				<div
					class="card bg-gradient-to-br variant-gradient-tertiary-secondary px-4 py-10 text-center"
				>
					<span class="badge variant-filled">Tertiary-Secondary</span>
				</div>
				<div
					class="card bg-gradient-to-br variant-gradient-primary-tertiary px-4 py-10 text-center"
				>
					<span class="badge variant-filled">Primary-Tertiary</span>
				</div>
				<!-- State Trio -->
				<div class="card bg-gradient-to-br variant-gradient-success-warning px-4 py-10 text-center">
					<span class="badge variant-filled">Success-Warning</span>
				</div>
				<div class="card bg-gradient-to-br variant-gradient-warning-error px-4 py-10 text-center">
					<span class="badge variant-filled">Warning-Error</span>
				</div>
				<div class="card bg-gradient-to-br variant-gradient-error-success px-4 py-10 text-center">
					<span class="badge variant-filled">Error-Success</span>
				</div>
				<!-- State Reversed -->
				<div class="card bg-gradient-to-br variant-gradient-warning-success px-4 py-10 text-center">
					<span class="badge variant-filled">Warning-Success</span>
				</div>
				<div class="card bg-gradient-to-br variant-gradient-error-warning px-4 py-10 text-center">
					<span class="badge variant-filled">Error-Warning</span>
				</div>
				<div class="card bg-gradient-to-br variant-gradient-success-error px-4 py-10 text-center">
					<span class="badge variant-filled">Success-Error</span>
				</div>
			</div>
		</section>

		<hr />

		<!-- Color Palette -->
		<section class="space-y-4">
			<h2 class="h2">Color Palette</h2>
			<div class="grid grid-cols-10 gap-0.5 bg-neutral-900 p-1">
				<!-- primary -->
				<div class="bg-primary-50 py-2" />
				<div class="bg-primary-100 py-2" />
				<div class="bg-primary-200 py-2" />
				<div class="bg-primary-300 py-2" />
				<div class="bg-primary-400 py-2" />
				<div class="bg-primary-500 py-2 flex justify-center items-center">
					<strong class="text-on-primary-token">500</strong>
				</div>
				<div class="bg-primary-600 py-2" />
				<div class="bg-primary-700 py-2" />
				<div class="bg-primary-800 py-2" />
				<div class="bg-primary-900 py-2" />
				<!-- secondary -->
				<div class="bg-secondary-50 py-2" />
				<div class="bg-secondary-100 py-2" />
				<div class="bg-secondary-200 py-2" />
				<div class="bg-secondary-300 py-2" />
				<div class="bg-secondary-400 py-2" />
				<div class="bg-secondary-500 py-2 flex justify-center items-center">
					<strong class="text-on-secondary-token">500</strong>
				</div>
				<div class="bg-secondary-600 py-2" />
				<div class="bg-secondary-700 py-2" />
				<div class="bg-secondary-800 py-2" />
				<div class="bg-secondary-900 py-2" />
				<!-- tertiary -->
				<div class="bg-tertiary-50 py-2" />
				<div class="bg-tertiary-100 py-2" />
				<div class="bg-tertiary-200 py-2" />
				<div class="bg-tertiary-300 py-2" />
				<div class="bg-tertiary-400 py-2" />
				<div class="bg-tertiary-500 py-2 flex justify-center items-center">
					<strong class="text-on-tertiary-token">500</strong>
				</div>
				<div class="bg-tertiary-600 py-2" />
				<div class="bg-tertiary-700 py-2" />
				<div class="bg-tertiary-800 py-2" />
				<div class="bg-tertiary-900 py-2" />
				<!-- success -->
				<div class="bg-success-50 py-2" />
				<div class="bg-success-100 py-2" />
				<div class="bg-success-200 py-2" />
				<div class="bg-success-300 py-2" />
				<div class="bg-success-400 py-2" />
				<div class="bg-success-500 py-2 flex justify-center items-center">
					<strong class="text-on-success-token">500</strong>
				</div>
				<div class="bg-success-600 py-2" />
				<div class="bg-success-700 py-2" />
				<div class="bg-success-800 py-2" />
				<div class="bg-success-900 py-2" />
				<!-- warning -->
				<div class="bg-warning-50 py-2" />
				<div class="bg-warning-100 py-2" />
				<div class="bg-warning-200 py-2" />
				<div class="bg-warning-300 py-2" />
				<div class="bg-warning-400 py-2" />
				<div class="bg-warning-500 py-2 flex justify-center items-center">
					<strong class="text-on-warning-token">500</strong>
				</div>
				<div class="bg-warning-600 py-2" />
				<div class="bg-warning-700 py-2" />
				<div class="bg-warning-800 py-2" />
				<div class="bg-warning-900 py-2" />
				<!-- error -->
				<div class="bg-error-50 py-2" />
				<div class="bg-error-100 py-2" />
				<div class="bg-error-200 py-2" />
				<div class="bg-error-300 py-2" />
				<div class="bg-error-400 py-2" />
				<div class="bg-error-500 py-2 flex justify-center items-center">
					<strong class="text-on-error-token">500</strong>
				</div>
				<div class="bg-error-600 py-2" />
				<div class="bg-error-700 py-2" />
				<div class="bg-error-800 py-2" />
				<div class="bg-error-900 py-2" />
				<!-- surface -->
				<div class="bg-surface-50 py-2" />
				<div class="bg-surface-100 py-2" />
				<div class="bg-surface-200 py-2" />
				<div class="bg-surface-300 py-2" />
				<div class="bg-surface-400 py-2" />
				<div class="bg-surface-500 py-2 flex justify-center items-center">
					<strong class="text-on-surface-token">500</strong>
				</div>
				<div class="bg-surface-600 py-2" />
				<div class="bg-surface-700 py-2" />
				<div class="bg-surface-800 py-2" />
				<div class="bg-surface-900 py-2" />
			</div>
		</section>
	</div>
</div>
