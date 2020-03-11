const calculateBtn = document.querySelector("#calculate");
const countBtn = document.querySelector("#player-count-btn");
const resetBtn = document.querySelector("#reset-btn");
const winnerBox = document.querySelector("#winner");

let playerCount = document.querySelector("#player-select");
let playerNames = [];
let finalPoints = {};
let winner; 

const playerPoints = [
    [], [], [], [], []
]

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


function resetCount(e){
    let allHidden = document.querySelectorAll(".d-none");
    let allInputs = document.querySelectorAll("input");

    allHidden.forEach(function(element){
        element.classList.remove("d-none")
    });

    allInputs.forEach(input =>
        input.value = "");

    winnerBox.innerHTML = ``;
    e.preventDefault();
}

function calculatePoints() {
    currentPlayers = parseInt(playerCount.value);
    currentNames = document.querySelectorAll(".pName");
    playerTotal = [];
    
    for(let i = 0; i < currentPlayers; i++) {
        document.querySelectorAll(`input[type="number"].p${i+1}`).forEach(function(score){
            if (score.value !== "") {
            playerPoints[i].push(parseInt(score.value));
            }
        });
        // Sum total on each row and add it to new Array (Total Score): 
        playerTotal.push(playerPoints[i].reduce((a, b) => a + b, 0));
    }

    currentNames.forEach(function(name){
        playerNames.push(name.value)
    })

    playerNames.forEach(function(name, i){
        finalPoints[name] = playerTotal[i];
    });
    
    let sortable = [];
        for (const name in finalPoints) {
            sortable.push([name, finalPoints[name]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    winner = sortable[0]

    winnerBox.innerHTML = `
    
    <h1><img src="/img/swan.svg"> <span class="remark">${winner[0]}</span> is the winner, with <span class="remark">${winner[1]}</span> points! <img src="/img/duck.svg"><h1>
    
    `
    
};


calculateBtn.addEventListener("click", calculatePoints);
countBtn.addEventListener("click", setPlayers)
resetBtn.addEventListener("click", resetCount)
