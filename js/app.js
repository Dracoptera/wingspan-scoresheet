// TODO Implement player count

const calculateBtn = document.querySelector("#calculate");
const countBtn = document.querySelector("#player-count-btn");

let playerCount = document.querySelector("#player-select");

let p1 = document.querySelectorAll(".p1");
let p2 = document.querySelectorAll(".p2");
let p3 = document.querySelectorAll(".p3");
let p4 = document.querySelectorAll(".p4");
let p5 = document.querySelectorAll(".p5");

let allColumns = document.querySelectorAll("tr");

const playerPoints = {
    p1: [],
    p2: [],
    p3: [],
    p4: [],
    p5: []
};

function deletePlayer(player) {
    player.forEach(function(score){
        score.classList.add("hidden")
    })
}

function setPlayers(e) {
    currentPlayers = parseInt(playerCount.value);
    let toDelete;
    // DELETE ROW FUNCTION
    if (currentPlayers === 4){
        deletePlayer(p5);
    } else if (currentPlayers === 3){
        deletePlayer(p4)
        deletePlayer(p5)
    } else if (currentPlayers === 2){
        deletePlayer(p3)
        deletePlayer(p4)
        deletePlayer(p5)
       
    }

    // p1.forEach(function(score){
    //     score.classList.add("hidden")
    // })
    e.preventDefault();
}

 

console.log(playerPoints.p1)



function calculatePoints() {
    
    p1.forEach(function(score){
        if (score.value !== "") {
        playerPoints.p1.push(parseInt(score.value));
        }
    });
    console.log(playerPoints.p1)
    p1Total = playerPoints.p1.reduce((a, b) => a + b, 0);
    console.log(p1Total)
};

// btn.addEventListener("click", () => {
//     calculatePoints()
// });

calculateBtn.addEventListener("click", calculatePoints);
countBtn.addEventListener("click", setPlayers)

