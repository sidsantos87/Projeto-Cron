let number = 0;
let cron = null;
let h1 = document.querySelector('h1');

function formatCron(seconds){
    const hora = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const min = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const seg = String(seconds % 60).padStart(2, "0");
    return `${hora}:${min}:${seg}`;
}

function viewDisplay(){
    h1.innerHTML = formatCron(number);
}

function start(){
    if (cron === null){
        cron = setInterval(() => {
            number++;
            viewDisplay();
        },1000);
    }
}

function stop(){
    if (cron !== null){
        cron = clearInterval(cron);
        cron = null;
    }
}

function clearAll(){
    stop();
    number = 0;
    viewDisplay();
}


