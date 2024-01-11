const start = Date.now();
var count = 0;
var gameTicks = 0;
var gameTime = Date.now() - start;
var timeSinceLastTick = 0;
var buildings = [
    {
        "amount": 1,
        "baseCPS": 1
    },
    {
        "amount": 0,
        "baseCPS": 5
    }
]

function clickBigCookie() {
    count++;
}

function buildingAddCookies(id, delay) {
    return (delay/1000) * buildings[id]["baseCPS"] * buildings[id]["amount"];

}

function updateTimer(){
    let heures = Math.floor((gameTime/1000)/3600);
    let minutes = Math.floor((gameTime/1000)/60)%60;
    let secondes = (gameTime/1000)%60;
    document.querySelector("#timer").innerHTML = `Timer : ${heures.toFixed(0)} heures ${minutes.toFixed(0)} minutes ${secondes.toFixed(0)} secondes`;
}

setInterval(() => {
    timeSinceLastTick = Date.now() - start - gameTime;
    count += buildingAddCookies(0, timeSinceLastTick);
    gameTime += timeSinceLastTick;
    if (gameTicks % 50 == 0) {
        updateTimer();
    }
    document.querySelector("#count").innerHTML = `Cookies : ${(count).toFixed(1)}`;
    gameTicks++;
}, 50);