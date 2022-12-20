<script>
    import { page } from '$app/stores';

	import BadischeMeile22 from './badischemeile22.svelte';
    import Electroqueens from './electroqueens.svelte';
    import Infclass from './infclass.svelte';
    import Schlossparklauf from './schlossparklauf18.svelte';
    import YTPMV from './ytpmv.svelte';
    import Pastmemories from './pastmemories.svelte';
    import Spayle from './spayle.svelte';
    import Jubilaeum from './jubilaeum.svelte';
    import Rheinuferlauf from './rheinuferlauf17.svelte';
    import Apfelkuchen from './apfelkuchen.svelte';
    import Kaesekuchen from './kaesekuchen.svelte';
    import Charityrun from './charityrun17.svelte';
    import Screenbounce from './screenbounce.svelte';
    import Bouncingball from './bouncingball.svelte';
    import Chocolatechips from './chocolatechipcookies.svelte';
    import Start from './start.svelte';
    import Error from './error.svelte';

	let map = {
		"badischemeile22": BadischeMeile22,
		"electroqueens": Electroqueens,
		"infclass": Infclass,
		"schlossparklauf": Schlossparklauf,
		"ytpmv": YTPMV,
		"pastmemories": Pastmemories,
		"spayle": Spayle,
		"jubilaeum": Jubilaeum,
		"rheinuferlauf": Rheinuferlauf,
		"apfelkuchen": Apfelkuchen,
		"kaesekuchen": Kaesekuchen,
		"charityrun": Charityrun,
		"screenbounce": Screenbounce,
		"bouncingball": Bouncingball,
		"chocolatechips": Chocolatechips,
		"start": Start,
	}

	let m = map[$page.params.blog] === undefined ? Error : map[$page.params.blog];
</script>


<article>
	<svelte:component this={m} />
</article>

<style>
    h1 {
        border-bottom: 1px solid #333;
        font-size: 1.5em;
        line-break: loose;
        overflow-wrap: anywhere; /* For titles are bigger and don't fit anymore */
    }

    section {
        margin: 10px;
        font-size: 1.5em;
        overflow-wrap: anywhere; /* Complete responsiveness */
    }
</style>
