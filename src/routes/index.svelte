<svelte:head>
    <title>ResamVi</title>
</svelte:head>

<header id="hero-page">
    <div id="row1">
        <img src="/logo.png" id="logo" alt="melone">
        <img src="/line.png" id="line" alt="linie">
        <span id="resamvi">ResamVi</span>
    </div>

    <div id="row2">
        Hey, ich bin <a sveltekit:prefetch href="impressum">Julien</a>.<br/>
        Softwareentwickler
    </div>

    <div id="row3">
        {#each icons as icon}
            <div class="icon-column">
                <a class="icon-link" href="{icon.link}">
                    <img src="{icon.src}" class="icon" alt="{icon.description}">
                    <br />
                    <span class="icon-description">{icon.description}</span>
                </a>
            </div>
        {/each}
    </div>
</header>

<script>
    import BadischeMeile22 from './blog/badischemeile22.svelte';
    import Electroqueens from './blog/electroqueens.svelte';
    import Infclass from './blog/infclass.svelte';
    import Schlossparklauf from './blog/schlossparklauf18.svelte';
    import YTPMV from './blog/ytpmv.svelte';
    import Pastmemories from './blog/pastmemories.svelte';
    import Spayle from './blog/spayle.svelte';
    import Jubilaeum from './blog/jubilaeum.svelte';
    import Rheinuferlauf from './blog/rheinuferlauf17.svelte';
    import Apfelkuchen from './blog/apfelkuchen.svelte';
    import Kaesekuchen from './blog/kaesekuchen.svelte';
    import Charityrun from './blog/charityrun17.svelte';
    import Screenbounce from './blog/screenbounce.svelte';
    import Bouncingball from './blog/bouncingball.svelte';
    import Chocolatechips from './blog/chocolatechipcookies.svelte';
    import Start from './blog/start.svelte';

    const icons = [
        { link: "https://github.com/ResamVi", src: "/github.png" , description: "Code" },
        { link: "https://www.youtube.com/user/ResamVi", src: "/youtube.png", description: "Videos" },
        { link: "https://dst.resamvi.io/", src: "/dstvis.png", description: "Don't Starve" },
        { link: "https://stats.resamvi.io/", src: "/infclass.png", description: "InfClass Stats" },
    ];

    const entries = [
        { component: BadischeMeile22,   width: 7920 },
        { component: Electroqueens,     width: 22200 },
        { component: Infclass,          width: 40680 },
        { component: Apfelkuchen,       width: 43080 },
        { component: Schlossparklauf,   width: 56280 },
        { component: YTPMV,             width: 73920 },
        { component: Pastmemories,      width: 86999 },
        { component: Spayle,            width: 91680 },
        { component: Jubilaeum,         width: 93959 },
        { component: Rheinuferlauf,     width: 103679 },
        { component: Apfelkuchen,       width: 105883 },
        { component: Kaesekuchen,       width: 107247 },
        { component: Charityrun,        width: 115211 },
        { component: Screenbounce,      width: 116095 },
        { component: Bouncingball,      width: 116854 },
        { component: Chocolatechips,    width: 118458 },
        { component: Start,             width: 121857 },
    ];

    let index = 0;

    let yScroll = 0;
    $: if(yScroll >= entries[index].width) {
        index++;
    }
</script>

<svelte:window bind:scrollY={yScroll}/>

<main>
    {#each entries as entry, i}
        {#if i <= index}
            <svelte:component this={entry.component} />
        {/if}
    {/each}
</main>

<style>
    main {
        margin: 0 5%;
    }

    #hero-page {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100vh;
        flex-direction: column;
    }

    #row1 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #logo {
        max-width: 50%; /* responsiveness */
        width: auto; /* override global width of 100% */
    }

    #line {
        height: clamp(10px, 10vw, 80px);
        width: auto; /* override global width of 100% */
    }

    #resamvi {
        font-family: 'Cinzel', serif;
        font-size: clamp(20px, 5px + 5vw, 64px); /* responsiveness */
    }

    #row2 {
        text-align: center;
        font-family: 'Space Mono', monospace;
        font-size: clamp(12px, 5vw, 24px); /* responsiveness */
    }

    #row3 {
        display: flex;
        justify-content: space-evenly;
        gap: 10px;
        margin-top: 50px;
    }

    .icon-link {
        text-decoration: none;
        color: black;
    }

    .icon-column {
        text-align: center;
        flex: 1 1 0;
    }

    .icon-description {
        font-family: 'Cinzel', monospace;
        font-size: clamp(12px, 3vw, 18px); /* responsiveness */
    }
</style>