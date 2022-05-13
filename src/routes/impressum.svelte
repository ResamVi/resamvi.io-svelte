<svelte:head>
    <title>ResamVi</title>
</svelte:head>

<main>
    <h1 class="serif">Impressum</h1>

    <blockquote class="sans">
        "Because I knew my therapist <br />
        was right, and I wanted <br />
        to keep being wrong. <br />
        I wanted to keep my bad habits <br />
        like charms on a bracelet. <br />
        I did not want to be brave. <br />
        I think I like my brain best <br />
        in a bar fight with my heart. <br />
        I think I like myself a little broken, <br />
        with rough edges, a little harder <br />
        to grasp. I like poetry <br />
        better than therapy anyway. <br />
        The poems never judge me <br />
        for healing wrong." <br />
    </blockquote>
    <cite>“I stopped going to therapy” by Clementine von Radics</cite>
</main>
<footer class="flex">
    <img src="/ich.jpg" alt="ich">
    <p class="sans"> Julien Midedji - <a href="mailto:julien@resamvi.io">Julien@resamvi.io</a> </p>
</footer>


<style>
    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    h1 {
        font-size: clamp(20px, 5px + 5vw, 64px);
    }

    cite {
        text-align: center;
    }

    img {
        width: 32px;
    }

    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 32px;
    }
</style>
