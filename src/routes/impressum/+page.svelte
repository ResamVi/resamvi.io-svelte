<svelte:head>
    <title>ResamVi</title>
</svelte:head>

<main>
    <h1 class="serif">Impressum</h1>

    <blockquote class="sans">
		To be alive: not just the carcass <br />
		But the spark. <br />
		That's crudely put, but… <br />
		If we're not supposed to dance, <br />
		Why all this music? <br />
    </blockquote>
    <cite>“To Be Alive” Gregory Orr</cite>
</main>
<footer class="flex">
    <img src="/ich.jpg" alt="ich">
    <p class="sans"> Julien Midedji - <a href="mailto:julien.midedji@gmail.com">E-Mail</a> </p>
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
