import { fetchData } from "./data.js";

const data = await fetchData();
const bk_time = data;

const settingColor = (dayDif, timeDif) => {
    let color;

    if (dayDif < 2) {
        color = '#ff4e28';
    }
    else if (dayDif < 6) {
        color = '#8cff56'
    }
    else if (dayDif < 13) {
        color = '#ffd52a'
    }
    else if (dayDif < 21) {
        color = '#ff0000';
    }
    else if (dayDif < 30) {
        color = '#32ffe9'
    }
    else if (dayDif < 90){
        color = '#550fc1';
    }
    else {
        color = '#fff';
    }

    document.querySelector("#clock").style.setProperty('background',`conic-gradient(${color} ${timeDif%86400000/1000/3600/24*360}deg, black 0deg)`);
    document.querySelector("#timer").style.setProperty('color', color);
};

setInterval(() => {
    const now = new Date();
    const timeDif = now.getTime() - bk_time;

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
    
    settingColor(dayDif, timeDif);
    
}, 1000);