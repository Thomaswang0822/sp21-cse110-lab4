let stats = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars:5,
    blackCars:40,
    rareCars:2
};

for (property in stats) {
    if (property[0]=='r' || stats[property]%2 == 1){
        console.log(stats[property]);
    }
}