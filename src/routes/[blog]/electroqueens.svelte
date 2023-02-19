<svelte:head>
    <title>The Electro Queens - ResamVi</title>
</svelte:head>

<script>
    import Entry from './_entry.svelte';

    let code = `
n = 0;
if (numKeys > 0) &#123;
    n = nearestKey(time).index;
    if (key(n).time > time) &#123;
    n--;
    &#125;
&#125;
if (n == 0) &#123;
    t = 0;
    &#125; else &#123;
    t = time - key(n).time;
&#125;
if (n > 0) &#123;
    v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
    amp = .1;
    freq =3.1;
    decay = 7;
    value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);
&#125; else &#123;
    value;
&#125;
`
</script>

<Entry>
    <span slot="date">16. Mai, 2021</span>
    <a href="/electroqueens" slot="title">Neues Video: The Electro Queens</a>
    <div slot="content">
        <img src="/017_electroqueens/thumbnail.png" alt="thumbnail" />

        <h1>Ich hatte Motivation für'n neues Video</h1>
        <p>
            Was mich dazu getrieben hat? <br />
            Ein House-Track von Underground Charisma:
            <a href="https://www.youtube.com/watch?v=cRcrGGl-o0c">Chromonicci - Toomuch</a>
        </p>
        <p>
            Von <a href="https://youtu.be/cRcrGGl-o0c?t=63">1:03</a> des Tracks war
            ich geflasht. Mit 14 wollte ich mal ein Video mit Glitch-Elemente
            bringen. <br />
            Ich hatte nie die Skills oder die passende Musik. Jetzt habe ich
            zumindest die passende Musik.
        </p>
        <p>
            Also: After Effects installiert. Plugins geladen. Youtube-Kanal
            abgestaubt.
        </p>
        <p>
            Aber was ist jetzt das Source Material? Mit Teeworlds habe ich
            aufgehört. In meinem letzten Video verabschiedete ich mich von der
            Community. Spreche davon wie es keine Teeworlds Videos mehr gibt. Biete
            hier allen die Möglichkeit meinen Kanal zu deabonnieren. Was passiert?
        </p>

        <h1>22 neue Abos.</h1>
        <img src="/017_electroqueens/22aboswtf.png" alt="22 abos bekommen" />

        <p>
            Hahaha. Naja, aber die Chancen auf 'ne Rückkehr sind dennoch gering.
            Also was ist der Ersatz?
        </p>
        <em>Genshin Impact</em>

        <p>
            Genauer: Die Charaktere Keqing, Fischl, Beidou und Lisa. Alle Badass.
            Alle Electro.
        </p>

        <h1>Source Material</h1>
        <p>
            Mein PC ist so schlecht, ich spiele Genshin Impact auf niedrigster
            Qualität und dann nicht mal auf Vollbild.<br />
            Jetzt auch noch mit Fraps eine Aufnahme machen? No way - ich nehme als
            Footage jeden Trailer von Mihoyo und einige Cut Scenes aus Let's Plays
            mit besserer Graphik:
        </p>
        <table>
            <tr>
                <th>Charakter</th>
                <th>Source Material</th>
            </tr>
            <tr>
                <td>Keqing</td>
                <td class="flexible">
                    <img src="/017_electroqueens/keqing_demo.jpg" alt="keqing demo" />
                    <img src="/017_electroqueens/keqing_collectedmiscellany.jpg" alt="keqing collected miscellany" class="flexible" />
                </td>
            </tr>
            <tr>
                <td>Fischl</td>
                <td class="flexible">
                    <img src="/017_electroqueens/fischl_demo.jpg" alt="fischl demo" />
                    <img src="/017_electroqueens/fischl_teaser.jpg" alt="fischl teaser" />
                </td>
            </tr>
            <tr>
                <td>Lisa</td>
                <td class="flexible">
                    <img src="/017_electroqueens/lisa_comic.png" alt="lisa comic" />
                </td>
            </tr>
            <tr>
                <td>Beidou</td>
                <td class="flexible">
                    <img src="/017_electroqueens/beidou_teaser.jpg" alt="beidou teaser" />
                </td>
            </tr>
        </table>

        <p>
            Ich habe in der Reihenfolge Keqing -> Fischl -> Beidou -> Lisa editiert.
            Und von der Schwierigkeit <br />
            her, die Charaktere gut genug zu inszenieren, war Fischl am leichtesten
            und dann: Fischl &lt; Keqing &lt; Beidou &lt; Lisa
        </p>

        <h1>Money Shots</h1>
        <p>
            "Money Shot" ist die Bezeichnung für Teile des Films, die
            überproportional teuer sind und essentiell sind für die Leistung des
            Films. Für mich hier sind es einfach nur die Sammlung der besten Frames
            aus dem Video.
        </p>

        <h1>Keqing's Burst</h1>
        <p>
            Die ersten Noten setzen die Erwartungen. Also lassen wir nicht viel Zeit
            für '3D, flashy, xXx ResamVi Productions pls subscribe' Intros sondern
            wir triggern am besten gleich die Photosensitivität des Zuschauers:
        </p>
        <img src="/017_electroqueens/moneyshot_keqing.gif" alt="keqing moneyshot" />
        <p>
            Hier war eigentlich die hauptsächliche Anwendung der Glitches. Und so
            wie ich das gelernt habe, reicht es einzelne stark verzerrte Frames
            einzufügen, welche dennoch (fast unterbewusst), wahrgenommen werden.<br />
            Keqing's Burst ist für sich schon sehr effektgeladen, also enstand ein
            richtiges Feuerwerk :^)
        </p>
        <img src="/017_electroqueens/glitch_timeline.png" alt="keqing moneyshot" />

        <div class="overflow">
            <table>
                <tr class="center">
                    <td>keqing ult</td>
                    <td>+</td>
                    <td>glitch1</td>
                    <td>+</td>
                    <td>glitch2</td>
                    <td>+</td>
                    <td>glitch3</td>
                    <td>+</td>
                    <td>outline</td>
                    <td>=</td>
                    <td>Ergebnis</td>
                </tr>
                <tr class="center">
                    <td> <img src="/017_electroqueens/glitch_clean.gif" alt="ohne effekte" /> </td>
                    <td></td>
                    <td> <img src="/017_electroqueens/glitch_glitch1.png" alt="effekt 1" /> </td>
                    <td></td>
                    <td> <img src="/017_electroqueens/glitch_glitch2.png" alt="effekte 2" /> </td>
                    <td></td>
                    <td> <img src="/017_electroqueens/glitch_glitch3.png" alt="effekt 3" /> </td>
                    <td></td>
                    <td> <img src="/017_electroqueens/glitch_outline.gif" alt="outline effekt" /> </td>
                    <td></td>
                    <td> <img src="/017_electroqueens/moneyshot_keqing.gif" alt="ergebnis" /> </td>
                </tr>
            </table>
        </div>

        <h1>Keqing's Schrift</h1>
        <p>
            Credit where it's due: Das habe ich mir direkt von den LEC Trailers
            abgeschaut. Deren Editoren sind absolute Smurfs.
        </p>
        <table>
            <td> <img src="/017_electroqueens/keqing_schrift.gif" alt="keqing schrift" /> </td>
            <td> <img src="/017_electroqueens/inspiration.gif" alt="lec schrift" /> </td>
        </table>

        <h1>Fischl's Hintergrundtext</h1>
        <p>Hier habe ich eine neue Technik eingesetzt: das Roto-Brush Tool.</p>
        <img src="/017_electroqueens/fischl_hintergrund.gif" alt="fischl hintergrund" />
        <p>
            Zuerst muss Fischl maskiert werden. Maskieren ist aufwändige Arbeit aber
            dank noch mehr KI kann sich das mit dem Roto-Brush Tool echt
            verschnellern. Man macht die Maske für den ersten Frame und dann wird
            daraus die Maske der nächsten Frame interpoliert (mit einigen Fehlern,
            wo man nachjustieren muss):
        </p>
        <img src="/017_electroqueens/rotobrush_setup.gif" alt="fischl hintergrund" />
        <p>
            Wenn Fischl maskiert ist, dann können wir den Text hinter die Maske
            setzen und hinter den Text einfach die originale Footage. Zuletzt wird
            dann noch ein Shake-Effekt hinzugefügt
        </p>
        <img src="/017_electroqueens/fischl_rotobrush_expression.gif" alt="fischl hintergrund" />
        <p>
            Der Shake-Effekt ist ebenfalls eine neue Technik: Erzeugt mit
            Expressions<br />

            Auf einem Adjustment-Layer mit dem "Transform"-Effekt wird Alt-Click auf
            die Stoppuhr von z.B. "Position" gemacht, um das Keyframing zu starten
            und um folgenden Code- Schnippsel eingefügt werden und die Werte für
            amp, freq, und decay geändert werden. Wenn man auf dem Adjustment-Layer
            noch die Position animiert indem man zwei Keyframes hat - wobei der 1.
            Keyframe die maximale Amplitude und der zweite der Ruhezustand, dann
            wird zwischen den beiden Keyframes oszilliert.
        </p>
        <pre class="overflow"><code>{code}</code></pre>

        <h1>Beidou's Counter: Content-Aware Fill</h1>
        <p>
            Beim Tooling, um Videos aufzunehmen gibt uns Mihoyo rein gar nichts.
            Aufeinmal merkt man wie mächtig das Demo-System bei Teeworlds eigentlich
            ist.
        </p>

        <h1>Großes Problem: Die HUD muss weg.</h1>
        <p>
            Lösung: Content-Aware Fill. Man maskiert ungewünschte Elemente raus. Die
            KI interpolieren aus der Umgebung und aus vergangen Frames wie die Lücke
            zu füllen ist.
        </p>

        <p>Bei After Effects gibt es einen eigenen Reiter für Content-Aware Fill:</p>
        <img src="/017_electroqueens/fill_use.png" alt="content-aware fill" />

        <table class="no-border">
            <tr>
                <td><h4 class="center">Davor</h4></td>
                <td><h4 class="center">Maske</h4></td>
                <td><h4 class="center">Danach</h4></td>
            </tr>
            <tr>
                <td> <img src="/017_electroqueens/fill_ohne.png" alt="fill ohne"/> </td>
                <td> <img src="/017_electroqueens/fill_masked.png" alt="fill masked" /> </td>
                <td> <img src="/017_electroqueens/fill_result.png" alt="fill result" /> </td>
            </tr>
        </table>

        <p>Jedoch wenn man mal genauer hinschaut sieht man immer
            noch einige Makel.</p>

        <p>Vergleich:</p>
        <table>
            <tr>
                <td><h4 class="center">Bevor</h4></td>
                <td><h4 class="center">Danach</h4></td>
            </tr>
            <tr>
                <td> <img src="/017_electroqueens/fill_without.gif" alt="fill ohne" /> </td>
                <td> <img src="/017_electroqueens/beidou_cuts.gif" alt="beidou cuts" /> </td>
            </tr>
        </table>

        <p>
            Ein bisschen Color Correction, um es zu vertuschen und es ist immernoch
            besser als den Text und die Elemente überhaupt zu sehen. Und sind wir
            mal ehrlich. Wem sind die Makel schon aufgefallen? :P
        </p>

        <p>
            Vielleicht erwähnenswert: Von den Damage Zahlen beim Ruin Guard Konter,
            ist nur die "48622" echt :P. Die anderen habe ich eingefügt. Die
            Schriftart kann man sich aus
        </p>
        <code>
            C:\Program Files\Genshin Impact\Genshin Impact
            Game\GenshinImpact_Data\StreamingAssets\MiHoYoSDKRes\HttpServerResources\font
        </code>
        <p>
            ziehen. Damit es auch von den Effekten her passend ist, musste ich
            frame-by-frame die Farbe, Unschärfe, Skalierung, und Position anpassen.
        </p>
        <img src="/017_electroqueens/beidou_damage.gif" alt="beidou damage numbers" />

        <h1>Scrapped</h1>
        <p>Nach ein bisschen Feedback gab's einiges was nicht den final cut gemacht hat:</p>

        <p>Lisa am Zwinkern und Kuss, und beim Aufladen ihres Skills</p>
        <img src="/017_electroqueens/scrapped2.gif" alt="scrapped1" />

        <p></p>
        <img src="/017_electroqueens/scrapped1.gif" alt="scrapped1" class="img-responsive center-img" />

        <h1>Ergebnis</h1>

        <p>35 Stunden für ein 19 Sekunden Video. Worth.</p>
        <img src="/017_electroqueens/effortspent.png" alt="verbrachte Zeit" />

        <p>Renderzeit: 40min</p>
        <img src="/017_electroqueens/rendertime.png" alt="render time" />

        <p>Video:</p>
        <div class="video-container">
            <iframe
                    src="https://www.youtube-nocookie.com/embed/CINC638X29U"
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
            </iframe>
        </div>
    </div>
</Entry>

<style>
    /* when content is just too wide */
    .overflow {
        overflow: scroll;
    }

    .flexible {
        display: flex;
    }

    .flexible img {
        min-width: 0;
    }
</style>
