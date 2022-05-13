<header>
    <img src="/logo.png" id="logo" alt="melone">
    <img src="/line.png" id="line" alt="linie">
    <div class="center">
        <span class="resamvi serif">ResamVi</span>
        <br />
        <span class="julien monospace">Hey, <a href="/">Julien</a> hier.</span>
    </div>
</header>

<main>
    <slot></slot>
</main>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    main {
        margin: 0 5%;
    }

    #logo {
        max-width: 50%; /* responsiveness */
        width: auto; /* override global width of 100% */
    }

    #line {
        height: clamp(10px, 10vw, 80px); /* responsiveness */
        width: auto; /* override global width of 100% */
    }

    .resamvi {
        font-size: clamp(20px, 5px + 5vw, 64px); /* responsiveness */
    }

    .julien {
        font-size: clamp(10px, 2vw, 16px); /* responsiveness */
    }
</style>
