<script>
    import Chart from "chart.js/auto"
    import { de } from 'date-fns/locale';
    import 'chartjs-adapter-date-fns';

    import Chartkick from "chartkick";

    import Entry from './_entry.svelte';
    import { onMount } from 'svelte';

    import { Highlight, LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import a11yLight from "svelte-highlight/styles/a11y-light";

    Chartkick.use(Chart)

    const vorbereitungcode = 
`let data = [
    {"date":"2024-05-25 11:00:26","count":58},
    {"date":"2024-05-25 11:05:27","count":57},
    {"date":"2024-05-25 11:10:28","count":59},
    {"date":"2024-05-25 11:15:29","count":60},
    ...
];

// chartjs, apexcharts
let chartjsData = data.map(row => {
    return { 'x': row.date, 'y': row.count };
});

// chartkick
let chartkickData = data.map(row => {
    return [row.date, row.count];
});

// frappecharts
const frappechartsData = {
    labels: data.map(row => row.date),
    datasets: [
        {
            name: "Some Data", type: "bar",
            values: data.map(row => row.count)
        },
    ]
};

// echarts
let echartsData = [['date', 'count']];
for(let row of data) {
    echartsData.push([Date.parse(row.date), row.count])
}

// chartist
let chartistData = data.map(row => { return { x: Date.parse(row.date), y: row.count }});
`

    const htmlcode = 
`<!doctype html>
<html lang="en">
    <head>
        <title>Diagramme<\/title>

        <!-- Code welches Diagramm konfiguriert (siehe nächste Abschnitte) -->
        <script type="module" src="./index.js"><\/script>
    <\/head>
    <body>
        <canvas id="chartjs"><\/canvas>
        <!-- oder... -->
        <div id="chartkick/apexcharts/etc."></div>
    <\/body>
<\/html>`

    const chartjscode = 
`import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

new Chart(document.getElementById('chartjs'),
    {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Anzahl im Gym',
                data: chartjsData,
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'hour',
                        displayFormats: {
                            hour: 'EEEE, kk:mm'
                        }
                    },
                    grid: {
                        color: (ctx) => {
                            if(ctx.tick !== undefined && ctx.tick.label.includes('24:00')) {
                                return '#a7a7a7';
                            }
                            return '#dadada';
                        },
                    },
                },
                y: {
                    ticks: {
                        stepSize: 10,
                    }
                }
            }
        }
    }
);`

        const chartkickcode = 
`import Chartkick from "chartkick";
import "chartkick/chart.js";

new Chartkick.ColumnChart("chart", chartkickData, { });`

        const apexchartscode =
`let verticalLines = ['2024-05-25 12:00', '2024-05-25 15:00', '2024-05-25 18:00'].map(row => { // Vertical lines hack
    let obj = {
        x: new Date(row).getTime(),
        borderColor: '#775DD0',
        label: {
            style: {
                color: '#000',
            },
            text: row,
        }
    }
    return obj;
});

var options = {
    chart: {
        type: 'line',
    },
    series: [{
        name: 'gym',
        data: chartjsData, // same data structure as Chart.js
    }],
    xaxis: {
        type: "datetime",
        axisBorder: {
            show: true,
            color: '#000000',
        },
        tickAmount: 20,
        labels: {
            rotateAlways: true,
            formatter: function (value, timestamp) {
                let d = new Date(timestamp);
                let dayName = d.toLocaleDateString('de-De', { weekday: 'long' });
                let hour = d.getHours().toString().padStart(2, "0");
                let minute = d.getMinutes().toString().padStart(2, "0");

                return  dayName + ", " + hour + ":" + minute;
            }
        }
    },
    yaxis: {
        axisBorder: {
            show: true,
            color: '#000000',
        },
    },
    grid: {
        borderColor: '#aaaaaa',
        strokeDashArray: 7,
        xaxis: {
            lines: {
                show: false,
            }
        },
        yaxis: {
            lines: {
                show: true,
            }
        },
    },
    annotations: {
        xaxis: verticalLines,
    }
}

var chart = new ApexCharts(document.querySelector("#apexcharts"), options);
chart.render();`

        const frappechartscode =
`new Chart("#frappecharts", {
    data: frappechartsData,
    type: 'line', 
    height: 550,
    yMarkers: [
        {
            label: "Threshold",
            value: 230,
            options: { labelPos: 'left' } // default: 'right'
        }
    ],
    yRegions: [
        {
            label: "Optimum Value",
            start: 10,
            end: 50,
            options: { labelPos: 'right' }
        }
    ],
    lineOptions: {
        hideDots: 1,
    },
    axisOptions: {
        xIsSeries: true // default: false
    },
});`;

    const echartscode =
`var myChart = echarts.init(document.getElementById('echarts'));

        myChart.setOption({
            title: {
                text: 'Venice Beach'
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                type: 'time',
                axisLabel: {
                    formatter: function (value) {
                        let d = new Date(value);
                        let dayName = d.toLocaleDateString('de-De', { weekday: 'long' });
                        let hour = d.getHours().toString().padStart(2, "0");
                        let minute = d.getMinutes().toString().padStart(2, "0");

                        return  dayName + ", " + hour + ":" + minute;
                    }
                },
                axisLine: {
                    show: true,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#dadada',
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: true,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#dadada',
                    }
                }
            },
            dataset: {
                source: echartsData,
            },
            series: [
                { 
                    type: 'line',
                    markArea: {
                        itemStyle: {
                            color: 'rgba(255, 173, 177, 0.4)'
                        },
                        data: [
                            [
                                {
                                    name: 'Example',
                                    xAxis: '2024-05-27 01:15:23'
                                },
                                {
                                    xAxis: '2024-05-27 03:50:59'
                                }
                            ]
                        ]
                    }
                }
            ]
        });`;

    const chartistcode =
`new Chartist.Line('#chartist', {
    series: [
        {
            name: 'series-1',
            data: chartistData,
        }
    ]
},
    {
        axisX: {
            type: Chartist.FixedScaleAxis,
            divisor: 5,
            labelInterpolationFnc: value =>
                new Date(value).toLocaleString(undefined, {
                    month: 'short',
                    day: 'numeric'
                })
        }
    }
);`;

    onMount(() => {
        let data = [
            {"date":"2024-05-25 11:00:26","count":58},
            {"date":"2024-05-25 11:05:27","count":57},
            {"date":"2024-05-25 11:10:28","count":59},
            {"date":"2024-05-25 11:15:29","count":60},
            {"date":"2024-05-25 11:20:30","count":61},
            {"date":"2024-05-25 11:25:31","count":62},
            {"date":"2024-05-25 11:30:34","count":62},
            {"date":"2024-05-25 11:35:35","count":63},
            {"date":"2024-05-25 11:40:36","count":65},
            {"date":"2024-05-25 11:45:37","count":67},
            {"date":"2024-05-25 11:50:38","count":66},
            {"date":"2024-05-25 11:55:39","count":67},
            {"date":"2024-05-25 12:00:42","count":70},
            {"date":"2024-05-25 12:05:43","count":69},
            {"date":"2024-05-25 12:10:44","count":72},
            {"date":"2024-05-25 12:15:45","count":69},
            {"date":"2024-05-25 12:20:46","count":67},
            {"date":"2024-05-25 12:25:47","count":67},
            {"date":"2024-05-25 12:30:50","count":65},
            {"date":"2024-05-25 12:35:51","count":66},
            {"date":"2024-05-25 12:40:52","count":70},
            {"date":"2024-05-25 12:45:53","count":72},
            {"date":"2024-05-25 12:50:54","count":70},
            {"date":"2024-05-25 12:55:55","count":69},
            {"date":"2024-05-25 13:00:59","count":68},
            {"date":"2024-05-25 13:06:00","count":69},
            {"date":"2024-05-25 13:11:01","count":68},
            {"date":"2024-05-25 13:16:02","count":68},
            {"date":"2024-05-25 13:21:03","count":65},
            {"date":"2024-05-25 13:26:04","count":66},
            {"date":"2024-05-25 13:31:07","count":66},
            {"date":"2024-05-25 13:36:08","count":76},
            {"date":"2024-05-25 13:41:09","count":77},
            {"date":"2024-05-25 13:46:10","count":79},
            {"date":"2024-05-25 13:51:10","count":77},
            {"date":"2024-05-25 13:56:12","count":79},
            {"date":"2024-05-25 14:01:15","count":81},
            {"date":"2024-05-25 14:06:16","count":80},
            {"date":"2024-05-25 14:11:17","count":82},
            {"date":"2024-05-25 14:16:18","count":77},
            {"date":"2024-05-25 14:21:19","count":83},
            {"date":"2024-05-25 14:26:20","count":79},
            {"date":"2024-05-25 14:31:23","count":85},
            {"date":"2024-05-25 14:36:24","count":86},
            {"date":"2024-05-25 14:41:25","count":82},
            {"date":"2024-05-25 14:46:25","count":80},
            {"date":"2024-05-25 14:51:26","count":81},
            {"date":"2024-05-25 14:56:28","count":84},
            {"date":"2024-05-25 15:01:31","count":90},
            {"date":"2024-05-25 15:06:32","count":84},
            {"date":"2024-05-25 15:11:33","count":81},
            {"date":"2024-05-25 15:16:34","count":74},
            {"date":"2024-05-25 15:21:35","count":75},
            {"date":"2024-05-25 15:26:36","count":73},
            {"date":"2024-05-25 15:31:39","count":78},
            {"date":"2024-05-25 15:36:40","count":73},
            {"date":"2024-05-25 15:41:41","count":70},
            {"date":"2024-05-25 15:46:41","count":68},
            {"date":"2024-05-25 15:51:42","count":66},
            {"date":"2024-05-25 15:56:44","count":66},
            {"date":"2024-05-25 16:01:47","count":66},
            {"date":"2024-05-25 16:06:48","count":65},
            {"date":"2024-05-25 16:11:49","count":62},
            {"date":"2024-05-25 16:16:50","count":59},
            {"date":"2024-05-25 16:21:51","count":57},
            {"date":"2024-05-25 16:26:52","count":57},
            {"date":"2024-05-25 16:31:55","count":55},
            {"date":"2024-05-25 16:36:56","count":56},
            {"date":"2024-05-25 16:41:57","count":51},
            {"date":"2024-05-25 16:46:58","count":51},
            {"date":"2024-05-25 16:51:59","count":51},
            {"date":"2024-05-25 16:57:00","count":49},
            {"date":"2024-05-25 17:02:04","count":50},
            {"date":"2024-05-25 17:07:05","count":53},
            {"date":"2024-05-25 17:12:06","count":52},
            {"date":"2024-05-25 17:17:07","count":55},
            {"date":"2024-05-25 17:22:08","count":53},
            {"date":"2024-05-25 17:27:09","count":52},
            {"date":"2024-05-25 17:32:13","count":51},
            {"date":"2024-05-25 17:37:14","count":50},
            {"date":"2024-05-25 17:42:15","count":49},
            {"date":"2024-05-25 17:47:16","count":49},
            {"date":"2024-05-25 17:52:17","count":51},
            {"date":"2024-05-25 17:57:18","count":49},
            {"date":"2024-05-25 18:02:21","count":54},
            {"date":"2024-05-25 18:07:22","count":53},
            {"date":"2024-05-25 18:12:23","count":52},
            {"date":"2024-05-25 18:17:25","count":53},
            {"date":"2024-05-25 18:22:26","count":50},
            {"date":"2024-05-25 18:27:27","count":49},
            {"date":"2024-05-25 18:32:30","count":47},
            {"date":"2024-05-25 18:37:31","count":52},
            {"date":"2024-05-25 18:42:32","count":55},
            {"date":"2024-05-25 18:47:33","count":59},
            {"date":"2024-05-25 18:52:34","count":60},
            {"date":"2024-05-25 18:57:35","count":63},
            {"date":"2024-05-25 19:02:38","count":62},
            {"date":"2024-05-25 19:07:39","count":57},
            {"date":"2024-05-25 19:12:40","count":55},
            {"date":"2024-05-25 19:17:41","count":58},
            {"date":"2024-05-25 19:22:41","count":57},
            {"date":"2024-05-25 19:27:42","count":56},
            {"date":"2024-05-25 19:32:46","count":52},
            {"date":"2024-05-25 19:37:46","count":49},
            {"date":"2024-05-25 19:42:47","count":45},
            {"date":"2024-05-25 19:47:48","count":48},
            {"date":"2024-05-25 19:52:49","count":50},
            {"date":"2024-05-25 19:57:50","count":46},
            {"date":"2024-05-25 20:02:53","count":43},
            {"date":"2024-05-25 20:07:54","count":45},
            {"date":"2024-05-25 20:12:55","count":41},
            {"date":"2024-05-25 20:17:56","count":40},
        ];

        // chartjs, apexcharts
        let chartjsData = data.map(row => {
            return { 'x': row.date, 'y': row.count };
        });

        // chartkick
        let chartkickData = data.map(row => {
            return [row.date, row.count];
        });

        // frappecharts
        const frappechartsData = {
            labels: data.map(row => row.date),
            datasets: [
                {
                    name: "Some Data", type: "bar",
                    values: data.map(row => row.count)
                },
            ]
        };

        // echarts
        let echartsData = [['date', 'count']];
        for(let row of data) {
            echartsData.push([Date.parse(row.date), row.count])
        }

        // chartist
        let chartistData = data.map(row => { return { x: Date.parse(row.date), y: row.count }});

        // Chart.js
        new Chart(
            document.getElementById('chartjs'),
            {
                type: 'bar',
                data: {
                    datasets: [{
                        label: 'Anzahl im Gym',
                        data: chartjsData,
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'hour',
                                displayFormats: {
                                    hour: 'EEEE, kk:mm'
                                }
                            },
                            grid: {
                                color: (ctx) => {
                                    if(ctx.tick !== undefined && ctx.tick.label.includes('24:00')) {
                                        return '#a7a7a7';
                                    }
                                    return '#dadada';
                                },
                            },
                        },
                        y: {
                            ticks: {
                                stepSize: 10,
                            }
                        }
                    }
                }
            }
        );

        // Chartkick
        new Chartkick.ColumnChart("chartkick", chartkickData, { });

        // ApexCharts
        let verticalLines = ['2024-05-25 12:00', '2024-05-25 15:00', '2024-05-25 18:00'].map(row => { // Vertical lines hack
            let obj = {
                x: new Date(row).getTime(),
                borderColor: '#775DD0',
                label: {
                    style: {
                        color: '#000',
                    },
                    text: row,
                }
            }
            return obj;
        });

        var options = {
            chart: {
                type: 'line',
            },
            series: [{
                name: 'gym',
                data: chartjsData,
            }],
            xaxis: {
                type: "datetime",
                axisBorder: {
                    show: true,
                    color: '#000000',
                },
                tickAmount: 20,
                labels: {
                    rotateAlways: true,
                    formatter: function (value, timestamp) {
                        let d = new Date(timestamp);
                        let dayName = d.toLocaleDateString('de-De', { weekday: 'long' });
                        let hour = d.getHours().toString().padStart(2, "0");
                        let minute = d.getMinutes().toString().padStart(2, "0");

                        return  dayName + ", " + hour + ":" + minute;
                    }
                }
            },
            yaxis: {
                axisBorder: {
                    show: true,
                    color: '#000000',
                },
            },
            grid: {
                borderColor: '#aaaaaa',
                strokeDashArray: 7,
                xaxis: {
                    lines: {
                        show: false,
                    }
                },
                yaxis: {
                    lines: {
                        show: true,
                    }
                },
            },
            annotations: {
                xaxis: verticalLines,
            }
        }

        var chart = new ApexCharts(document.querySelector("#apexcharts"), options);
        chart.render();

        // chartist
        new Chartist.Line('#chartist', {
            series: [
                {
                    name: 'series-1',
                    data: chartistData,
                }
            ]
        },
            {
                axisX: {
                    type: Chartist.FixedScaleAxis,
                    divisor: 5,
                    labelInterpolationFnc: value =>
                        new Date(value).toLocaleString(undefined, {
                            month: 'short',
                            day: 'numeric'
                        })
                }
            }
        );

    })
</script>

<svelte:head>
    <title>Charting Libraries - ResamVi</title>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
    <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
    {@html a11yLight}
</svelte:head>

<Entry>
    <span slot="date">6. Juni 2024</span>
    <a href="/charts" slot="title">Diagramme: ApexCharts, Chartist.js, Chart.js, Chartkick, eCharts, FrappeCharts - ein Vergleich</a>
    <div slot="content">

        <p>Für einen ersammelten Datensatz suchte ich nach einer Javascript Charting-Library zur Visualisierung. <br/> Also habe ich 6 Libraries ausprobiert und wie es aussieht hier ausformuliert.</p>

        <h2 class="serif">Von den Dingen die mir wichtig waren</h2>
        <ol>
            <li><strong>Beispiele</strong> - Copy-and-Paste, um was zum Laufen zu kriegen</li>
            <li><strong>Anschauliche Dokumentation</strong> - Konfigurationsoptionen werden verständlich (sogar anschaulich) vermittelt</li>
            <li><strong>Time Series Support</strong> - Leichter Umgang mit dem Datensatz von (Datum/Zeit + Integer)-Pärchen </li>
            <li><strong>Annotationen</strong> - Ergänzung von Text und farblichen Bereichen</li>
            <li><strong>Batteries Included</strong> - Der Konfigurationsaufwand ist gering</li>
            <li><strong>Doofste Sachen</strong> - Wenn die Nachteile übermäßig gestört haben</li>
        </ol>

        <!-- Vorbereitung -->
        <h2 class="serif">Vorbereitung</h2>
        <p>
            Die Daten sahen folgendermaßen aus und müssen für die Charting Library angepasst werden
        </p>
        <Highlight language={javascript} code={vorbereitungcode} let:highlighted>
              <LineNumbers {highlighted} />
        </Highlight>
        <p>
            HTML-Code welches von JavaScript aus referenziert wird
        </p>
        <Highlight language={xml} code={htmlcode} let:highlighted>
              <LineNumbers {highlighted} />
        </Highlight>


        <!-- Chart.js -->
        <h2 class="serif">Chart.js</h2>
        <p>
            Sehr detaillierte Library mit der man auch gut einsteigen kann.<br />
            Erlaubt die meisten Konfigurations-Extrawürste (Animationen, Hover-Text, Annotationen). <br />
        </p>
        <div><canvas id="chartjs"></canvas></div>

        <ol>
            <li><span style="color:green">(+) Beispiele</span> - Für einen ersten Graphen sind Basics da. </li>
            <li><span style="color:red">(-) Anschauliche Dokumentation</span> - Was man beabsichtigt zu konfigurieren in der Doku wiederzufinden ist etwas herausfordernd. </li>
            <li><span style="color:green">(+) Time Series Support</span> - Muss man sich mit einem Plugin und via einen Adapter konfigurieren. </li>
            <li><span style="color:green">(+) Annotationen</span> - Braucht auch wieder ein Plugin, aber ist prinzipiell vorhanden. </li>
            <li><span style="color:green">(++) Batteries Included</span> - Mouse Hover, Responsiveness, Legende, Verteilung der Achsen-Labels. </li>
            <li><span style="color:red">(-) Doofste Sachen</span> - Mir fehlt eine nützliche API Referenz neben der "erklärenden Dokumentation"</li>
        </ol>

        <Highlight language={javascript} code={chartjscode} let:highlighted>
              <LineNumbers {highlighted} />
        </Highlight>


        <!-- Chartkick -->
        <h2 class="serif">Chartkick</h2>

        <p>
            Mit keiner Library kriegt man schneller einen ersten schönen Graphen wie mit Chartkick. <br />
            Der Kandidat wenn man einfach Daten mal graphisch sehen  muss ohne weiter was konfigurieren zu wollen.
        </p>
        <div id="chartkick"></div>

        <ol>
            <li><span style="color:green">(++) Beispiele</span> - Gibt es und es sind alles Einzeiler. Einfacher geht's nicht. </li>
            <li><span style="color:green">(+) Anschauliche Dokumentation</span> - Library ist nicht sehr tiefgründig also ist nicht viel Dokumentation nötig. </li>
            <li><span style="color:red">(-) Time Series Support</span> - Muss man an den Daten selber anpassen. </li>
            <li><span style="color:red">(---) Annotationen</span> - Keine. </li>
            <li><span style="color:green">(+) Batteries Included</span> - Mouse Hover, Responsiveness. Refresh in Intervallen. </li>
            <li><span style="color:red">(-) Doofste Sachen</span> - Eingeschränkter Umfang für weitere Konfiguration. Im Hintergrund läuft Chart.js was man auch direkt benutzen könnte. </li>
        </ol>

        <Highlight language={javascript} code={chartkickcode} let:highlighted>
              <LineNumbers {highlighted} />
        </Highlight>

        <!-- ApexCharts -->
        <h2 class="serif">ApexCharts</h2>

        <p>
            Die Schönste Library unter Allen. Elegante API zum Konfigurieren und Dokumentation ist gut strukturiert. <br />
            Mein Kandidat für (von sich aus) gut aussehende Dashboards.
        </p>
        <div id="apexcharts"></div>

        <ol>
            <li><span style="color:green">(+++) Beispiele</span> - Einfache Beispiele und dann noch Beispiele mit Variationen. Live-Editierbar zum rumbasteln. </li>
            <li><span style="color:green">(+++) Anschauliche Dokumentation</span> - Konfigurationen sind meistens ergänzt mit Live-Beispielen. </li>
            <li><span style="color:green">(+++) Time Series Support</span> - Eingebauter Support. Zusätzlich konfigurierbar indem man den Formatter selber implementiert.</li>
            <li><span style="color:green">(+++) Annotationen</span> - Enthält farbige Bereiche, x- und y-Annotationen. </li>
            <li><span style="color:green">(+++) Batteries Included</span> - Mouse Hover, Schönes Design, Zoom, Responsiveness. Download als CSV/PNG/SVG. </li>
            <li><span style="color:red">(--) Doofste Sachen</span> - Langsam bei großen Datenmengen (Column Chart). Nicht einstellbar wo Ticks liegen ("bei 0:00 an jedem Tag"). Nur mit Workaround. </li>
        </ol>

        <Highlight language={javascript} code={apexchartscode} let:highlighted>
              <LineNumbers {highlighted} />
        </Highlight>

        <!-- FrappeCharts -->
        <h2 class="serif">FrappeCharts</h2>

        <p>
            Sieht auf dem ersten Blick poliert aus, aber für tiefgründigeres ist es doch sehr schlecht.
        </p>

        <img src="/020_charts/frappe.png" alt="Frappe Charts" class="img-responsive">

        <ol>
            <li><span style="color:red">(---) Beispiele</span> - Es gibt *EIN* Beispiel. Das wars. "Find den Rest selber raus aus unserer Doku." </li>
            <li><span style="color:red">(---) Anschauliche Dokumentation</span> - Vorschau von den Einstellungen die wir erklären? Ne, gibs nicht. Keine ganzheitliche technische Referenz für alle Konfigurationen. </li>
            <li><span style="color:red">(-) Time Series Support</span> - Muss man sich selber zusammenbasteln.</li>
            <li><span style="color:green">(+) Annotationen</span> - Es gibt zwar nur y-Annotationen aber es gibt sie. </li>
            <li><span style="color:red">(-) Batteries Included</span> - Seh' ich keine. </li>
            <li><span style="color:red">(--) Doofste Sachen</span> - Die Dokumentation ist hauptsächlich Text für ein Thema was hauptsächlich bildlich ist. Man weiß nichtmal was man erwarten soll, wenn man meint die richtige Konfiguration gefunden zu haben. </li>
        </ol>

        <Highlight language={javascript} code={frappechartscode} let:highlighted>
              <LineNumbers {highlighted} />
        </Highlight>

        <!-- Echarts -->
        <h2 class="serif">Apache Echarts</h2>

        <p>
            Kämpft in der Gewichtsklasse mit Chart.js und scheint der mächtigste Kandidat zu sein.
        </p>
        <img src="/020_charts/echarts.png" alt="Echarts " class="img-responsive">

        <ol>
            <li><span style="color:green">(++) Beispiele</span> - Für jeden Chart-Typ hat es ein simples Beispiel und weitere Variationen ebenfalls mit Veranschaulichung.</li>
            <li><span style="color:green">(++) Anschauliche Dokumentation</span> - Hat ganzes Sortiment an ausgefallenen Beispielen. Konfigurationen und Konzepte sind aber spärlich erklärt</li>
            <li><span style="color:green">(+++) Time Series Support</span> - Ist da und Formatierung lässt sich überschreiben</li>
            <li><span style="color:green">(+++) Annotationen</span> - X und Y-Ranges sind da und angenehm zu benutzen. </li>
            <li><span style="color:red">(-) Batteries Included</span> - Der Base-Chart ist minimal gehalten und enthält ohne Konfiguration das Minimum.</li>
            <li><span style="color:red">(-) Doofste Sachen</span> - Responsiveness ist kein Freebie und alles andere muss auch konfiguriert werden</li>
        </ol>

        <Highlight language={javascript} code={echartscode} let:highlighted>
              <LineNumbers {highlighted} />
        </Highlight>

        <!-- Chartist.js -->
        <h2 class="serif">Chartist.js</h2>
        <p>
            Kann drei Typen: Line Charts, Bar Charts, Pie Charts. Der Umfang ist sehr eingeschränkt dafür ist es elegant in dem was es kann.
        </p>

        <div id="chartist"></div>

        <ol>
            <li><span style="color:green">(++) Beispiele</span> - Beispiele zu alle Varianten und den Code dazu daneben an dem man rumdocktern kann. Doku für v1.x ist noch WIP.</li>
            <li><span style="color:green">(+++) Anschauliche Dokumentation</span> - Jede Konfiguration wird in einem Beispiel veranschaulicht</li>
            <li><span style="color:green">(+++) Time Series Support</span> - Eingebaut und sehr elegant</li>
            <li><span style="color:red">(---) Annotationen</span> - Keine</li>
            <li><span style="color:green">(+) Batteries Included</span> - SVG Support. Kleine Dependency</li>
            <li><span style="color:red">(-) Doofste Sachen</span> - Gibt keine Freebies (Legende, Mouse Hover, Zoom)</li>
        </ol>

        <Highlight language={javascript} code={chartistcode} let:highlighted>
              <LineNumbers {highlighted} />
        </Highlight>

        <!-- Zusammenfassung -->
        <h2 class="serif">Zusammengefasst</h2>

        <table class="center">
            <thead>
            <tr>
                <th>Name</th>
                <th>Sterne</th>
                <th>Beispiele</th>
                <th>Anschauliche Dokumentation</th>
                <th>Time Series Support</th>
                <th>Annotationen</th>
                <th>Batteries Included</th>
                <th>Doofe Sachen</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><a href="https://apexcharts.com/">ApexCharts</a></td>
                <td>14k</td>
                <td style="color:green;">(+++)</td> <!-- Beispiele -->
                <td style="color:green;">(+++)</td> <!-- Anschauliche Dokumentation -->
                <td style="color:green;">(+++)</td> <!-- Time Series -->
                <td style="color:green;">(+++)</td> <!-- Annotationen -->
                <td style="color:green;">(+++)</td> <!-- Batteries Included -->
                <td style="color:red;">(--)</td> <!-- Doofste Sachen -->
            </tr>
            <tr>
                <td><a href="https://echarts.apache.org/">Apache Echarts</a></td>
                <td>59.3k</td>
                <td style="color:green;">(++)</td> <!-- Beispiele -->
                <td style="color:green;">(++)</td> <!-- Anschauliche Dokumentation -->
                <td style="color:green;">(+++)</td> <!-- Time Series -->
                <td style="color:green;">(+++)</td> <!-- Annotationen -->
                <td style="color:red;">(-)</td> <!-- Batteries Included -->
                <td style="color:red;">(-)</td> <!-- Doofste Sachen -->
            </tr>
            <tr>
                <td><a href="https://www.chartjs.org/">Chart.js</a></td>
                <td>63.7k</td>
                <td style="color:green;">(+)</td> <!-- Beispiele -->
                <td style="color:red;">(-)</td> <!-- Anschauliche Dokumentation -->
                <td style="color:green;">(+)</td> <!-- Time Series -->
                <td style="color:green;">(+)</td> <!-- Annotationen -->
                <td style="color:green;">(++)</td> <!-- Batteries Included -->
                <td style="color:red;">(-)</td> <!-- Doofste Sachen -->
            </tr>
            <tr>
                <td><a href="https://chartkick.com/">Chartkick</a></td>
                <td>6.3k</td>
                <td style="color:green;">(++)</td> <!-- Beispiele -->
                <td style="color:green;">(+)</td> <!-- Anschauliche Dokumentation -->
                <td style="color:red;">(-)</td> <!-- Time Series -->
                <td style="color:red;">(---)</td> <!-- Annotationen -->
                <td style="color:green;">(+)</td> <!-- Batteries Included -->
                <td style="color:red;">(-)</td> <!-- Doofste Sachen -->
            </tr>
            <tr>
                <td><a href="https://gionkunz.github.io/chartist-js/index.html">Chartist.js</a></td>
                <td>69</td>
                <td style="color:green;">(++)</td> <!-- Beispiele -->
                <td style="color:green;">(+++)</td> <!-- Anschauliche Dokumentation -->
                <td style="color:green;">(+++)</td> <!-- Time Series -->
                <td style="color:red;">(---)</td> <!-- Annotationen -->
                <td style="color:green;">(+)</td> <!-- Batteries Included -->
                <td style="color:red;">(-)</td> <!-- Doofste Sachen -->
            </tr>
            <tr>
                <td><a href="https://frappe.io/charts/docs">FrappeCharts</a></td>
                <td>14.9k</td>
                <td style="color:red;">(---)</td> <!-- Beispiele -->
                <td style="color:red;">(---)</td> <!-- Anschauliche Dokumentation -->
                <td style="color:red;">(-)</td> <!-- Time Series -->
                <td style="color:green;">(+)</td> <!-- Annotationen -->
                <td style="color:red;">(-)</td> <!-- Batteries Included -->
                <td style="color:red;">(--)</td> <!-- Doofste Sachen -->
            </tr>
            </tbody>
        </table>
    </div>
</Entry>

<style>
ol li {
    margin-top: 0.3em;
    margin-bottom: 0.3em;
}

table {
    border-collapse: collapse;
}

table td, table th {
    padding: 15px;
}

table thead tr th {
    color: #636363;
    border: 1px solid #dddfe1;
}

table tbody td {
    color: #636363;
    border: 1px solid #dddfe1;
}
table tbody tr {
    background-color: #f9fafb;
}
table tbody tr:nth-child(odd) {
    background-color: #ffffff;
}
</style>
