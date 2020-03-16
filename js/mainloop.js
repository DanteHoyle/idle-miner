// Animations
"use strict";
var nextId = 0;
var miner_list = [];
var userGold = 0;

function Miner(id) {
    this.stats = {
        strength: randomNum(1, 100),
        dexterity: randomNum(1, 100),
        luck: randomNum(1, 100)
    };

    // Destroys the div
    this.ddestroy = function() {
        this.div.remove();
        console.log("Goodbye Mine!");
    }

    // Animation Function
    this.setProgressTimer = function(seconds) {
        this.progressInner.style.animation = "progress "+seconds+"s infinite";
    }

    this.id = id;
    this.currentTask = "mining";
    this.mine_time = Math.floor(Math.random() * 10 + 1);

    // Create Parent Div
    this.div = document.createElement("tr");
    this.div.id = this.id;
    this.div.style.width = "100%";
    this.div.style.height = "30px";
    // Sets parent div in miner table
    document.getElementById("miner-table").appendChild(this.div);
    // Put Name on Div
    this.name_div = document.createElement("td");
    this.name_div.innerHTML = this.id;
    this.div.appendChild(this.name_div);
    // Put Strength on Div
    this.str_div = document.createElement("td");
    this.str_div.innerHTML = this.stats.strength;
    this.div.appendChild(this.str_div);
    // Put Strength on Div
    this.dex_div = document.createElement("td");
    this.dex_div.innerHTML = this.stats.dexterity;
    this.div.appendChild(this.dex_div);
    // Put Luck on Div
    this.luck_div = document.createElement("td");
    this.luck_div.innerHTML = this.stats.luck;
    this.div.appendChild(this.luck_div);
    // Display Current Task
    this.currentTask_div = document.createElement("td");
    this.currentTask_div.innerHTML = this.currentTask;
    this.div.appendChild(this.currentTask_div);
    
    // DisplayProgress Bar
    this.progressOuter = document.createElement("div");
    this.progressInner = document.createElement("div");
    this.progressOuter.appendChild(this.progressInner);
    this.progressOuter.classList.add("progressbar-parent");
    this.progressInner.classList.add("progressbar");

    // Animate Bar
    this.setProgressTimer(this.mine_time);
    this.div.appendChild(this.progressOuter);
    // this.ddestroy();

    // If this prints to console, everything probably went well I guess
    console.log("Hello Mine!");
    console.log(this.mine_time + "s")
    // setTimeout(() => {this.ddestroy()}, this.mine_time * 1000);
}

function createMiner() {
    miner_list.push(new Miner("miner" + nextId));
    nextId += 1;
}

function loop() {
    // Update Gold Text
    document.getElementById("gold-counter").innerHTML = userGold;
    userGold += 1;
}

function randomNum (min=1, max) {
    return Math.floor((Math.random() * (max - min)) + min)
}

// Runs loop 60 times per seconds
setInterval(()=>{loop()}, 16.67);

// class Miner {
//     constructor(id) {
//         // Basic Info
//         this.stats = {
//             strength: 10,
//             dexterity: 11,
//             luck: 12
//         };

//         this.id = id;
//         this.currentTask = "mining";

//         this.div = document.createElement("tr");
//         this.div.id = this.id;
//         this.div.style.width = "100%";
//         this.div.style.height = "30px";

//         document.getElementById("miner-table").appendChild(this.div);

//         // Put Name on Div
//         this.name_div = document.createElement("td");
//         this.name_div.innerHTML = this.id;
//         this.div.appendChild(this.name_div);

//         // Put Strength on Div
//         this.str_div = document.createElement("td");
//         this.str_div.innerHTML = this.stats.strength;
//         this.div.appendChild(this.str_div);
//         // Put Strength on Div
//         this.dex_div = document.createElement("td");
//         this.dex_div.innerHTML = this.stats.dexterity;
//         this.div.appendChild(this.dex_div);
//         // Put Luck on Div
//         this.luck_div = document.createElement("td");
//         this.luck_div.innerHTML = this.stats.luck;
//         this.div.appendChild(this.luck_div);

//         // Display Current Task
//         this.currentTask_div = document.createElement("td");
//         this.currentTask_div.innerHTML = this.currentTask;
//         this.div.appendChild(this.currentTask_div);
        
//         // DisplayProgress Bar
//         this.progressOuter = document.createElement("div");
//         this.progressInner = document.createElement("div");

//         this.progressOuter.appendChild(this.progressInner);
//         this.progressOuter.classList.add("progressbar-parent");
//         this.progressInner.classList.add("progressbar");
//         this.div.appendChild(this.progressOuter);   

//         // If this prints to console, everything probably went well I guess
//         console.log("Hello Mine!");

//         setTimeout(this.ddestroy, 1000);
//     }

//     ddestroy() {
//         this.div.remove();
//         console.log("Goodbye Mine!");
//     }
// }

// function swing_pick_axe() {
//     if (swinging == false) {
//         swinging = true;
//         start_animation("pickaxe", "swing", 1000);
//     }
// }

// function start_animation(id, animation_name, duration) {
//     var object = document.getElementById(id);
//     object.classList.add(animation_name);
//     setTimeout(() => {end_animation(object, animation_name);}, duration);
// }

// function end_animation(object, animation_name) {
//     object.classList.remove(animation_name);
//     console.log("Yo!")

// }