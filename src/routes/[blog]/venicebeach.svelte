<svelte:head>
    <title>Venice Beach - ResamVi</title>
</svelte:head>

<script>
    import Entry from './_entry.svelte';

    import { onMount } from 'svelte';

    import { Chart } from 'chart.js/auto';
    import { de } from 'date-fns/locale';

    import 'chartjs-adapter-date-fns';

    import data from '../data//w1_postgalerie.json';
    import data2 from '../data/w2_postgalerie.json';
    import data3 from '../data/w1_suedstadt.json';
    import data4 from '../data/w2_suedstadt.json';

    onMount(() => {
        let transformed = data.map(row => {
            return { 'x': row.date, 'y': row.count };
        })

        let transformed2 = data2.map(row => {
            return { 'x': row.date, 'y': row.count };
        })

        let transformed3 = data3.map(row => {
            return { 'x': row.date, 'y': row.count };
        })

        let transformed4 = data4.map(row => {
            return { 'x': row.date, 'y': row.count };
        })

        const postgalerie_w1 = {
            label: 'Postgalerie (Woche 1)',
            data: transformed,
        }

        const postgalerie_w2 = {
            label: 'Postgalerie (Woche 2)',
            data: transformed2,
        }

        const suedstadt_w1 = {
            label: 'Südstadt (Woche 1)',
            data: transformed3,
        }

        const suedstadt_w2 = {
            label: 'Südstadt (Woche 2)',
            data: transformed4,
        }

        setTimeout(() => {
            new Chart(
                document.getElementById('chart1'),
                {
                    type: 'line',
                    data: {
                        datasets: [
                            suedstadt_w1,
                            suedstadt_w2,
                        ]
                    },
                    options: {
                        animation: false,
                        scales: {
                            x: {
                                type: 'time',
                                adapters: {
                                    date: {
                                        locale: de
                                    },
                                },
                                time: {
                                    unit: 'hour',
                                    displayFormats: {
                                        hour: 'EEEE, kk:mm'
                                    }
                                },
                                border: {
                                    dash: [6, 6],
                                },
                                grid: {
                                    display: true,
                                    offset: false,
                                },
                            },
                            y: {
                                min: 0,
                                max: 250,
                                grid: {
                                    display: true,
                                    color: '#dadada',
                                },
                                border: {
                                    dash: [6, 6],
                                },

                            }
                        }
                    }
                }
            );
        }, 1000);

        setTimeout(() => {
            new Chart(
                document.getElementById('chart2'),
                {
                    type: 'line',
                    data: {
                        datasets: [
                            postgalerie_w1,
                            postgalerie_w2,
                        ]
                    },
                    options: {
                        animation: false,
                        scales: {
                            x: {
                                type: 'time',
                                adapters: {
                                    date: {
                                        locale: de
                                    },
                                },
                                time: {
                                    unit: 'hour',
                                    displayFormats: {
                                        hour: 'EEEE, kk:mm'
                                    }
                                },
                                border: {
                                    dash: [6, 6],
                                },
                                grid: {
                                    display: true,
                                    offset: false,
                                },
                            },
                            y: {
                                min: 0,
                                max: 250,
                                grid: {
                                    display: true,
                                    color: '#dadada',
                                    },
                                border: {
                                    dash: [6, 6],
                                },

                            }
                        }
                    }
                }
            );

        }, 1500);
    });
</script>

<Entry>
    <span slot="date">12. Juni 2024</span>
    <a href="/venicebeach" slot="title">Venice Beach Statistiken</a>
    <div slot="content">
        <div class="flex">
            <p>
                Mit dem Ziel mehr Krafttraining dieses Jahr zu machen <br /> habe ich mich an einem Fitness-Center registriert.
            </p>
            <img class="pad" src="/021_venicebeach/lift-weight.jpg" alt="lift weight">
        </div>

        <div class="flex">
            <img src="/021_venicebeach/currently.jpg" alt="android app" class="pad">
            <p>
                Letztendlich entschied ich mich für VeniceBeach. <br /><br /> Das interessante dabei ist, dass es eine App dazu gibt, 
                <br /> die dir unter anderem zeigt wie viele gerade im Gym schwitzen.
            </p>
        </div>



        <p><strong>Reverse-Engineering</strong></p>

        <p>
            Dazu schmeißen wir den Android Emulator an und installieren zwei Dinge: <br /> Die App selber und <a href="https://httptoolkit.com/">HTTP Toolkit</a>.
        </p>

        <div class="flex">
            <img class="img-responsive" src="/021_venicebeach/app.jpg" alt="android app">
            <img class="img-responsive" src="/021_venicebeach/httptoolkit.jpg" alt="httptoolkit app">
        </div>

        <p>
            Alle ausgehende HTTP-Anfragen von der App werden durch ein VPN von HTTP Toolkit geleitet. Als Man-in-the-Middle können dadurch auch die SSL-verschlüsselten
            Anfragen entziffert werden.
        </p>

        <p>Anfrage für Authentifizierung</p>
        <img class="img-responsive" src="/021_venicebeach/auth.jpg" alt="authentifizierung">

        <p>Und schließlich die Anfrage für die Daten die wir haben wollen</p>
        <img class="img-responsive" src="/021_venicebeach/data.jpg" alt="daten">

        <p>Schließlich schreiben wir das Programm, welches das alles automatisiert und das ist das Ergebnis der letzten zwei Wochen</p>

        <h1 class="center">Auslastung Venice Beach in der Südstadt</h1>
        <canvas id="chart1"></canvas>
        <h1 class="center">Auslastung Venice Beach in Postgalerie</h1>
        <canvas id="chart2"></canvas>

        <h1 class="center">Infografik</h1>
        <img src="/021_venicebeach/infografik.png" alt="infografik" class="img-responsive" loading="lazy">
    </div>
</Entry>

<style>
    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pad {
        margin-left: 2em;
        margin-right: 2em;
    }
</style>
