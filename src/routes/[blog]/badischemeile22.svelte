<svelte:head>
    <title>Badische Meile (2022) - ResamVi</title>
</svelte:head>

<script>
    import Entry from './_entry.svelte';
</script>

<Entry>
    <span slot="date">8. Mai, 2022</span>
    <a href="/badischemeile22" slot="title">Badische Meile 2022</a>
    <div slot="content">
        <p>
            Nach 2 Jahren Corona konnte wieder die Badische Meile stattfinden. <br/>
            Ab geht's früh los bevor die 4000 Teilnehmer kommen die üblicherweise daran Teilnehmen
        </p>

        <p>Die Strecke</p>
        <img src="/018_badischemeile22/strecke.png" loading="lazy" alt="thumbnail" />

        <table>
            <caption>Weit abseits vom Start am Europabad hatte ich mein Warmup</caption>
            <tr>
                <td>8:00</td>
                <td>9:30</td>
            </tr>
            <tr>
                <td> <img src="/018_badischemeile22/a_leer.jpg" loading="lazy" alt="leerer platz" /> </td>
                <td> <img src="/018_badischemeile22/a_voll.jpg" loading="lazy" alt="voller platz" /> </td>
            </tr>
        </table>

        <table>
            <caption>Blick auf Mount Klotz</caption>
            <tr>
                <td>8:00</td>
                <td>8:00</td>
            </tr>
            <tr>
                <td> <img src="/018_badischemeile22/b_leer.jpg" loading="lazy" alt="anderer leerer platz"/> </td>
                <td> <img src="/018_badischemeile22/b_voll.jpg" loading="lazy" alt="anderer voller platz"/> </td>
            </tr>
        </table>

        <p class="center">Und die Krönung</p>

        <p class="center">8:00</p>
        <video controls loop muted>
            <source src="/018_badischemeile22/ziel_davor.mp4" type="video/webm" /> Your browser does not support the video tag.
        </video>

        <p class="center">Nach dem Rennen</p>
        <video controls loop muted>
            <source src="/018_badischemeile22/ziel_danach.mp4" type="video/webm" /> Your browser does not support the video tag.
        </video>

        <p>Aber zurück zum Anfang: Erstmal Startnummern holen</p>
        <img src="/018_badischemeile22/startnummer_holen.jpg" loading="lazy" alt="thumbnail" />

        <p>Hier meine. Ein T-Shirt gibts auch dazu. Wahl war zwischen Violett, Gelb, Rot und Grün.</p>
        <img src="/018_badischemeile22/startnummer.jpg" loading="lazy" alt="thumbnail" />

        <p>Es wird auch schon immer voller. T minus 40 bis Startschuss</p>
        <img src="/018_badischemeile22/voller.jpg" loading="lazy" alt="thumbnail" />

        <p>
            Start in zwei Gruppen. Ich war in der zweiten Gruppe und hier ist die Aufnahme vom ersten Start:
        </p>
        <video controls loop muted>
            <source src="/018_badischemeile22/erster_start.mp4" type="video/webm" /> Your browser does not support the video tag.
        </video>

        <p>
            Der Startschuss kommt und man steht erstmal noch für weitere 3min lol
        </p>

        <p>
            Zum Lauf: Ich stand beim Start halt ziemlich weit hinten und war eigentlich permanent beschäftigt Leute zu überholen<br/>
            Ist also schwierig einen konstanten Pace zu halten. Guckt euch das an LOL:
        </p>
        <img src="/018_badischemeile22/bm_pace.png" loading="lazy" alt="thumbnail" />

        <p>Und jetzt im Vergleich zu etwas Normalem (Schlossparklauf 2018)</p>
        <img src="/014_schlossparklauf18/graph.png" loading="lazy" alt="thumbnail" />

        <p>Welcher Platz? 551. von 2290 unter Männern</p>
    </div>
</Entry>

<style>
    caption {
        margin: 20px;
    }

    td {
        text-align: center;
    }

    video {
        width: 100%;
    }
</style>
