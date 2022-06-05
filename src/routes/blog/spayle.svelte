<svelte:head>
    <title>Spayle - ResamVi</title>
</svelte:head>

<script>
    import Entry from './_entry.svelte';
</script>

<Entry>
    <span slot="date">13. Oktober 2017</span>
    <span slot="title">SPAYLE - Alpha Release</span>
    <div slot="content">
        <div class="center">
            <p>Der Alpha-Release von meinem Game:</p>
            <img src="/011_spayle/title.png" alt="spayle logo">
            <p>Shoot 'em up game</p>

            <section>
                Your mission is to explore hostile outer space. However the engineers of your rocket ship decided it<br />
                was best to stick all the defensive measures on the BACK of your rocket. <br />
                Soooo... you're the pilot, tasked to lead this mission: Navigate and align your rocket ship JUUUST right
                and explode-fart their faces with all the means you got on board - <strong>sp</strong>ace flight with st<strong>yle</strong>!
            </section>
        </div>

        <img src="/011_spayle/animation1.gif" alt="animation 1">
        <img src="/011_spayle/animation2.gif" alt="animation 2">

        <div class="center">Written in</div>

        <div class="center">
            <img src="/011_spayle/phaser_logo.png" alt="phaser logo">
        </div>

        Features:
        <ol>
            <li>Kontrollierbares Raumschiff</li>
            <li>Ansatz für erste Gegner</li>
            <li>Turbo Modus (mit hoher Schubfrequenz erhöht sich Beschleunigung exponentiell)</li>
            <li>Menu</li>
            <li>Splash</li>
        </ol>

        <p>5,5 Wochen Entwicklungszeit</p>
        <p>Angefangen mit 0 Ahnung von Phaser und 0,1 Ahnung von Javascript</p>

        <img src="/011_spayle/contribs.png" alt="github contributions heatmap">

        <div class="flex">
            <img src="/011_spayle/code.png" alt="vscode logo">
            <p>
                Hauptsächliche Schwierigkeit war das aufstellen der Entwicklungsumgebung. Ich habe mich für Visual Studio Code
                entschieden.
            </p>
        </div>

        <div class="flex">
            <p>
                Da aber Games in Phaser eine Serverumgebung zum Laufen benötigen, musste ich erst einen minimalen Server in Node.js schreiben.<br>
                Weil Node.js noch in Javascript geschrieben ist und die Integration mit Visual Studio Code sehr ausgebaut ist, lässt sich der Server zusammen mit dem Spiel ganz leicht beim Debuggen ausführen und später um Multiplayer-Elemente mit Sockets.io erweitern.
            </p>
            <img src="/011_spayle/node.png" alt="nodejs logo">
        </div>

        <div class="flex">
            <img src="/011_spayle/browserify.png" alt="browserify">
            <p>Was ich dann mit wachsendem Code feststellen musste, ist dass langsam die Sache - in einer einzigen Datei zusammengequetscht - unübersichtlich wurde.<br>
                Also brauchte ich etwas um das ganze auf mehrere Datein zu verteilen und zu Modularisieren.<br>
                "Hey, es gibt in JS6 jetzt auch import", durfte ich ein paar Tage später feststellen. Naja, zu spät.</p>
        </div>

        <div class="flex">
            <p>Und zum Schluss kann mit Phaser einem Framework in Javascript der Quelltext für das eigentliche Spiel geschrieben werden.
                Alle umständliche low-level Arbeit die mit WebGL/Canvas werden wegabstrahiert.<br>
                Was übrig bleibt ist alles was es eigentlich braucht. Texturen/Sprites, Physik und Kollisionssystem, Sound/Musikverarbeitung, Schnittstelle für Steuerung usw.</p>
            <img src="/011_spayle/phaser.png" alt="phaser logo">
        </div>

        <h1>Komplikationen</h1>
        <ol>
            <li>
                Schwierigstes Problem bleibt es die Parameter so zu wählen, dass es eine balancierte Steuerung hat aber das Feeling und den Flow nicht beeinträchtigen.<br>
                Heißt z.B. das Schiff soll schnell genug sein damit es zur Atmosphäre und Stimmung passt, aber der Spieler soll trotzdem früh genug auf Gefahren reagieren können.<br>
                Das Schiff soll wendig sein und man sollte schnell lenken können. Trotzdem soll die Präzision behalten werden um genaustens auf Gegner zielen zu können
            </li>
            <li>
                Trigonometrie. Die ganze Zeit.<br>
                Das ist auch eigentlich überhaupt kein Problem in zweidimensionalen Raum. Problem ist nur in Phaser werden (verständlicherweise) Rotationen bei Physik und Graphiken getrennt betrachtet. Jedoch sind bei mir immer Abweichungen von &pi; oder &pi;/2 welches den Code sehr unansehlich aufbläht.
            </li>
            <li>
                Ich habe schon eine Grenze der Phaser API gefunden: Der Sound lässt sich zwar abspielen, einblenden, ausblenden, verstärken, zeitlich manipulieren undsoweiter. Aber der Pitch oder auch die Schnelligkeit lässt sich nicht manipulieren.
                Muss wohl noch eine weitere library herhalten müssen, nur für etwas pitch shifting.
            </li>
            <li>
                Letzendlich ist das Schwierigste, dass ich nur mit Objektorientierter Programmierung vertraut bin. Während Javascript mit JS6 den syntaktischen Zucker anbietet Klassen zu machen, versuche ich es trotzdem erstmal mittels Modulen, Prototypisierungen und Konstruktoren. Aber erst gestern musste ich einsehen, dass langsam der Code Spaghetti wird. <i>Zeit für mehr refactoring...</i>
            </li>
        </ol>

    </div>
</Entry>

<style>
    .flex {
        display: flex;
        align-items: center;
    }
</style>