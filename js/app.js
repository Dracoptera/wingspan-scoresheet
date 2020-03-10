// TODO Implement player count

const calculateBtn = document.querySelector("#calculate");
const countBtn = document.querySelector("#player-count-btn");
const resetBtn = document.querySelector("#reset-btn");

// let playerNumber;

let playerCount = document.querySelector("#player-select");

// let p1 = document.querySelectorAll(".p1");
// let p2 = document.querySelectorAll(".p2");
// let p3 = document.querySelectorAll(".p3");
// let p4 = document.querySelectorAll(".p4");
// let p5 = document.querySelectorAll(".p5");

// let playerColumn = document.querySelectorAll(`.p${playerNumber}`);



const playerPoints = {
    p1: [],
    p2: [],
    p3: [],
    p4: [],
    p5: []
};

function deletePlayer(player) {
    
    let playerColumn = document.querySelectorAll(`.p${player}`);
    playerColumn.forEach(function(score){
        score.classList.add("d-none")
        // console.log(playerColumn)
    })
}

function setPlayers(e) {
    
    currentPlayers = parseInt(playerCount.value);
    // DELETE ROW FUNCTION
    for (let i = 5; i > currentPlayers; i--) {
            deletePlayer(`${i}`);
        }
    e.preventDefault();
}


function resetCount(){
    let allHidden = document.querySelectorAll(".d-none");
    allHidden.forEach(function(element){
        element.classList.remove("d-none")
    })
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
resetBtn.addEventListener("click", resetCount)
