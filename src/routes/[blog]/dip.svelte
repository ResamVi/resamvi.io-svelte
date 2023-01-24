<svelte:head>
    <title>DIP - ResamVi</title>
</svelte:head>

<script>
    import Entry from './_entry.svelte';
    let code = "";
</script>

<Entry>
    <span slot="date">24. Januar 2023</span>
    <a href="/dip" slot="title">Bundestags API</a>
    <div slot="content">
        <p>
            Oder besser bezeichnet als "Dokumentations- und Informationssystem für Parlamentsmaterialien" gibt einem die Möglichkeit
            Plenarprotokolle, politischen Vorgänge undAktivitäten programmatisch abzufragen.
        </p>

        <p>
            Ein Query sieht so aus
        </p>

        <pre><code style="font-family:Roboto">
        GET https://search.dip.bundestag.de/api/v1/plenarprotokoll/5449?apikey=GmEPb1B.bfqJLIhcGAsH9fTJevTglhFpCoZyAAAdhp
        </code></pre>

        Und gibt folgendes Ergebnis
        <pre><code style="font-family:Roboto">
        {'{'}
           "id":"5449",
           "dokumentart":"Plenarprotokoll",
           "typ":"Dokument",
           "vorgangsbezug_anzahl":26,
           "dokumentnummer":"20/9",
           "wahlperiode":20,
           "herausgeber":"BT",
           "datum":"2021-12-16",
           "titel":"Protokoll der 9. Sitzung des 20. Deutschen Bundestages",
           "fundstelle":{'{'}
              "pdf_url":"https://dserver.bundestag.de/btp/20/20009.pdf",
              "id":"5449",
              "dokumentnummer":"20/9",
              "datum":"2021-12-16",
              "verteildatum":"2021-12-17",
              "dokumentart":"Plenarprotokoll",
              "herausgeber":"BT",
              "urheber":[
                 
              ]
           {'}'},
           "vorgangsbezug":[
              {'{'}
                 "id":"282848",
                 "titel":"Gesetz zur Fristverlängerung für den beschleunigten Infrastrukturausbau in der Ganztagsbetreuung für Grundschulkinder",
                 "vorgangstyp":"Gesetzgebung"
              },
              {'{'}
                 "id":"282698",
                 "titel":"Planungssicherheit für Familien und Kommunen - Frist für den beschleunigten Infrastrukturausbau in der Ganztagsbetreuung verlängern",
                 "vorgangstyp":"Antrag"
              },
              {'{'}
                 "id":"282596",
                 "titel":"Gesetz zum Vorschlag für eine Verordnung des Rates zur Änderung der Verordnung (EG) Nr. 168/2007 zur Errichtung einer Agentur der Europäischen Union für Grundrechte und zur Inbetriebnahme der elektronischen Urkundensammlung",
                 "vorgangstyp":"Gesetzgebung"
              }
           ],
           "aktualisiert":"2021-12-17T08:32:04+01:00"
        {'}'}
        </code></pre>


        <h1>Teig</h1>
        Test 123
        <img src="/008_apfelkuchen/apfelkuchen.jpg" alt="apfelkuchen" class="img-responsive">
    </div>
</Entry>
