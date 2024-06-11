import BadischeMeile22 from './[blog]/badischemeile22.svelte';
import Electroqueens from './[blog]/electroqueens.svelte';
import Infclass from './[blog]/infclass.svelte';
import Schlossparklauf from './[blog]/schlossparklauf18.svelte';
import YTPMV from './[blog]/ytpmv.svelte';
import Pastmemories from './[blog]/pastmemories.svelte';
import Spayle from './[blog]/spayle.svelte';
import Jubilaeum from './[blog]/jubilaeum.svelte';
import Rheinuferlauf from './[blog]/rheinuferlauf17.svelte';
import Apfelkuchen from './[blog]/apfelkuchen.svelte';
import Kaesekuchen from './[blog]/kaesekuchen.svelte';
import Charityrun from './[blog]/charityrun17.svelte';
import Screenbounce from './[blog]/screenbounce.svelte';
import Bouncingball from './[blog]/bouncingball.svelte';
import Chocolatechips from './[blog]/chocolatechipcookies.svelte';
import Start from './[blog]/start.svelte';
import Dip from './[blog]/dip.svelte';
import Charts from './[blog]/charts.svelte';
import VeniceBeach from './[blog]/venicebeach.svelte';

const entries = [
    { component: VeniceBeach, url: "venicebeach", released: true },
    { component: Dip, url: "dip", released: false },
    { component: Charts, url: "charts", released: true },
    { component: BadischeMeile22, url: "badischemeile22", released: true },
    { component: Electroqueens, url: "electroqueens", released: true },
    { component: Infclass, url: "infclass", released: true },
    { component: Schlossparklauf, url: "schlossparklauf", released: true },
    { component: YTPMV, url: "ytpmv", released: true },
    { component: Pastmemories, url: "pastmemories", released: true },
    { component: Spayle, url: "spayle", released: true },
    { component: Jubilaeum, url: "jubilaeum", released: true },
    { component: Rheinuferlauf, url: "rheinuferlauf17", released: true },
    { component: Apfelkuchen, url: "apfelkuchen", released: true },
    { component: Kaesekuchen, url: "kaesekuchen", released: true },
    { component: Charityrun, url: "charityrun17", released: true },
    { component: Screenbounce, url: "screenbounce", released: true },
    { component: Bouncingball, url: "bouncingball", released: true },
    { component: Chocolatechips, url: "chocolatechips", released: true },
    { component: Start, url: "start", released: true },
];

const released = entries.filter(element => element.released);

export { released,  entries };
