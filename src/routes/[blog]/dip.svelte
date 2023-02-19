<script>
    import Entry from './_entry.svelte';

    import { Highlight } from "svelte-highlight";
    import bash from "svelte-highlight/languages/bash";
    import json from "svelte-highlight/languages/json";
    import atomOneLight from "svelte-highlight/styles/monokai";

    const codeGetPlenarprotokoll = `GET https://search.dip.bundestag.de/api/v1/plenarprotokoll/5449?apikey=GmEPb1B.bfqJLIhcGAsH9fTJevTglhFpCoZyAAAdhp`;
    const codeGetResponse = `
{
   "id":"5449",
   "dokumentart":"Plenarprotokoll",
   "typ":"Dokument",
   "vorgangsbezug_anzahl":26,
   "dokumentnummer":"20/9",
   "wahlperiode":20,
   "herausgeber":"BT",
   "datum":"2021-12-16",
   "titel":"Protokoll der 9. Sitzung des 20. Deutschen Bundestages",
   "fundstelle":{
      "pdf_url":"https://dserver.bundestag.de/btp/20/20009.pdf",
      "id":"5449",
      "dokumentnummer":"20/9",
      "datum":"2021-12-16",
      "verteildatum":"2021-12-17",
      "dokumentart":"Plenarprotokoll",
      "herausgeber":"BT",
      "urheber":[
         
      ]
   },
   "vorgangsbezug":[
      {
         "id":"282848",
         "titel":"Gesetz zur Fristverlängerung für den beschleunigten Infrastrukturausbau in der Ganztagsbetreuung für Grundschulkinder",
         "vorgangstyp":"Gesetzgebung"
      },
      {
         "id":"282698",
         "titel":"Planungssicherheit für Familien und Kommunen - Frist für den beschleunigten Infrastrukturausbau in der Ganztagsbetreuung verlängern",
         "vorgangstyp":"Antrag"
      },
      {
         "id":"282596",
         "titel":"Gesetz zum Vorschlag für eine Verordnung des Rates zur Änderung der Verordnung (EG) Nr. 168/2007 zur Errichtung einer Agentur der Europäischen Union für Grundrechte und zur Inbetriebnahme der elektronischen Urkundensammlung",
         "vorgangstyp":"Gesetzgebung"
      }
   ],
   "aktualisiert":"2021-12-17T08:32:04+01:00"
}`;

    const codeGetText = `GET https://search.dip.bundestag.de/api/v1/plenarprotokoll-text/5449?apikey=GmEPb1B.bfqJLIhcGAsH9fTJevTglhFpCoZyAAAdhp`;
    const codeGetTextResponse = `
{
"id": "5449",
"dokumentart": "Plenarprotokoll",
"typ": "Dokument",
"vorgangsbezug_anzahl": 26,
"dokumentnummer": "20/9",
"wahlperiode": 20,
"herausgeber": "BT",
"datum": "2021-12-16",
"titel": "Protokoll der 9. Sitzung des 20. Deutschen Bundestages",
"text": "Deutscher Bundestag\nStenografischer Bericht\n9. Sitzung\nBerlin, Donnerstag, den 16. Dezember 2021\nI n h a l t :\nWahl der Abgeordneten Daniela Ludwig als \nordentliches Mitglied des Wahlprüfungsaus-\nschusses . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 383 A\nZur Geschäftsordnung . . . . .
...
`
</script>

<svelte:head>
    <title>DIP - ResamVi</title>
    {@html atomOneLight}
</svelte:head>

<Entry>
    <span slot="date">24. Januar 2023</span>
    <a href="/dip" slot="title">Bundestags API</a>
    <div slot="content">
        <p>
            Oder besser bezeichnet als "Dokumentations- und Informationssystem für Parlamentsmaterialien" gibt einem die Möglichkeit
            Plenarprotokolle, politischen Vorgänge und Aktivitäten programmatisch abzufragen.
        </p>

        <p>Ein Query sieht so aus:</p>
        <Highlight language={bash} code={codeGetPlenarprotokoll} />

        <p>Und gibt folgendes Ergebnis:</p>
        <Highlight language={json} code={codeGetResponse} />

        <p>Man kann sich auch den kompletten Plenarprotokolltext ausgeben lassen.</p>

        <p>Der Query:</p>
        <Highlight language={bash} code={codeGetText} />

        <p>Das Ergebnis:</p>
        <Highlight language={json} code={codeGetTextResponse} />

        <p class="center">Wie die PDF aussieht</p>
        <div style="display: flex; justify-content: center;">
            <img src="/019_dip/pdf.png" alt="pdf" class="img-responsive" style="border: 1px solid grey;">
        </div>

        <p>Bild von PDF</p>
        <img src="/008_apfelkuchen/apfelkuchen.jpg" alt="apfelkuchen" class="img-responsive">

        Wäre doch irgendwo geil
    </div>
</Entry>

<style>
</style>
