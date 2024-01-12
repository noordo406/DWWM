class Building {
    constructor(name, perSec){
        this.name = name;
        this.perSec = perSec;
        this.amount = 0;
        this.multiplier = 1;
    };
}

const start = Date.now();
var count = 0;
var gameTicks = 0;
var gameTime = Date.now() - start;
var timeSinceLastTick = 0;
var totalPerSec;

var buildings = [
    waster = new Building("Waster", 0.25),
    racon = new Building("Racon", 1)
]

function addBuildingsToList(){
    for (let index in buildings) {
        var value = buildings[index];
        var container = document.createElement("button");

        var name = document.createElement("span");
        name.textContent = value.name + " : ";
        name.className = "name";

        var amount = document.createElement("span");
        amount.textContent = value.amount;
        amount.className = "amount";

        var ps = document.createElement("span");
        ps.textContent = " ("+value.perSec * value.multiplier+"/sec)";
        ps.className = "ps";

        container.appendChild(name);
        container.appendChild(amount);
        container.appendChild(ps);
        container.setAttribute("onclick", "clickBuilding(" + index + ")");
        container.id = "build"+index;
        document.querySelector("#buildingList").appendChild(container);
    }
}

function clickBuilding(id) {
    let build = buildings[id];
    let toAdd;
    if (event.shiftKey) toAdd = 10; else toAdd = 1;
    if (event.ctrlKey){
        if (build.amount-toAdd>=0) build.amount-=toAdd;
    } else {
        build.amount += toAdd;
    }
}

function clickBigButton() {
    count++;
}

function calcPS(){
    let res = 0;
    for (value of buildings) {
        res += value.perSec * value.amount * value.multiplier;
    }
    return res;
}

function updateTimer(){
    let heures = Math.floor((gameTime/1000)/3600);
    let minutes = Math.floor((gameTime/1000)/60)%60;
    let secondes = (gameTime/1000)%60;
    document.querySelector("#timer").innerHTML = `Timer : ${heures.toFixed(0)} heures ${minutes.toFixed(0)} minutes ${secondes.toFixed(0)} secondes`;
}

addBuildingsToList();
setInterval(() => {
    timeSinceLastTick = Date.now() - start - gameTime;
    totalPerSec = calcPS();
    count += totalPerSec * timeSinceLastTick/1000;
    gameTime += timeSinceLastTick;
    if (gameTicks % 50 == 0) {
        updateTimer();
    }
    document.querySelector("#count").innerHTML = `Points : ${(count).toFixed(1)} (${totalPerSec}/sec)`;
    for (let index in buildings) {
        document.querySelector("#build"+index).querySelector(".amount").textContent = buildings[index].amount;
    }
    gameTicks++;
}, 50);