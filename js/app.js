// TODO Implement player count

const calculateBtn = document.querySelector("#calculate");
const countBtn = document.querySelector("#player-count-btn");


let playerCount = document.querySelector("#player-select");


const playerPoints = {
    p1: [],
    p2: [],
    p3: [],
    p4: [],
    p5: []
};

function setPlayers(e) {
    currentPlayers = parseInt(playerCount.value)
    for (let i = 0; i < currentPlayers; i++) {
        const element = array[i];
        
    }
    e.preventDefault();
}

 

console.log(playerPoints.p1)



function calculatePoints() {
    p1.forEach(function(score){
        playerPoints.p1.push(parseInt(score.value));
    })
    console.log(playerPoints.p1);
};

// btn.addEventListener("click", () => {
//     calculatePoints()
// });

calculateBtn.addEventListener("click", calculatePoints);
countBtn.addEventListener("click", setPlayers)

