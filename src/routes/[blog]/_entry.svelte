<article>
    <header>
        <time class="serif">
            <slot name="date"></slot>
        </time>
        <h1 class="serif">
            <slot name="title"></slot>
        </h1>
    </header>
    <section class="sans">
        <slot name="content"></slot>
    </section>
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
