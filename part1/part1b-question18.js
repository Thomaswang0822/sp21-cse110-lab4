function oneTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}

setInterval(oneTime, 1000);
