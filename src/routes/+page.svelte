<script>
	import { VERCEL_ENV } from '$env/static/public';
	export let data;
</script>
<p>in feature branch preview mode</p>
<p>{data.vercelEnv } <br /> {data.vercelUrl}</p>
<p>{VERCEL_ENV}</p>
