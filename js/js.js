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

    if (dayDif > 0) {
        document.querySelector("#timer").innerHTML = `${dayDif}:${hourDif}:${minuteDif}:${secondDif}`;
    }
    else if (hourDif > 0) {
        document.querySelector("#timer").innerHTML = `${hourDif}:${minuteDif}:${secondDif}`;
    }
    else if (minuteDif > 0) {
        document.querySelector("#timer").innerHTML = `${minuteDif}:${secondDif}`;
    }
    else {
        document.querySelector("#timer").innerHTML = `${secondDif}s`;
    }
    
    document.querySelector("#clock").style.setProperty('background',`conic-gradient(#0f0 ${timeDif%86400000/1000/3600/24*360}deg, black 0deg)`);
    
}, 1000);