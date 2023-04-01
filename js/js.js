import { fetchData } from "./data.js";

const data = await fetchData();
const bk_time = new Date(data.ano, data.mes-1, data.dia, data.hora, data.minuto, data.segundo)

setInterval(() => {
    const now = new Date();
    const timeDif = now.getTime() - bk_time.getTime();

    const dayDif = parseInt(timeDif/1000/3600/24);
    const hourDif = parseInt(timeDif/1000/3600%24);
    const minuteDif = parseInt(timeDif/1000/60%60);
    const secondDif = parseInt(timeDif/1000%60);

    document.querySelector("#timer").innerHTML = `${dayDif}:${hourDif}:${minuteDif}:${secondDif}`;
}, 1000);