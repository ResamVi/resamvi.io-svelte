<script>
    import { page } from '$app/stores';
    import { entries } from '../entries.ts';
    import Error from './error.svelte';

	let entry = entries.find(element => element.url == $page.params.blog);
    if (entry === undefined) {
        entry = { component: Error };
    }
</script>


<article>
	<svelte:component this={entry.component} />
</article>

