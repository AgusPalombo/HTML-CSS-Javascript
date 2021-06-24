const p1={
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1")
}

const p2={
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2")
}

/* const p1 = document.querySelector("#p1Button");
const p2 = document.querySelector("#p2Button");

const p1Display = document.querySelector("#p1");
const p2Display = document.querySelector("#p2");
 */

const wSelect = document.querySelector("#playto");
const reset = document.querySelector("#reset");
let winningScore = 3;
let gameOver = false;

function updateScores(player, opponent){
    if (!gameOver){
        player.score += 1;
        if(player.score === winningScore){
            gameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }   
        player.display.textContent = player.score;
    } 
}


p1.button.addEventListener("click", function() {
    updateScores(p1,p2);
})

p2.button.addEventListener("click", function() {
    updateScores(p2, p1);
})


wSelect.addEventListener("click", ()=>{
    winningScore = parseInt(wSelect.value);
    reseted();
})

reset.addEventListener("click", reseted)

function reseted(){
    gameOver = false;
    for (const p of [p1, p2]) {
        p.score= 0;
        p.display.textContent= 0;
        p.display.classList.remove("has-text-success","has-text-danger");
        p.button.disabled = false;
        }
        
    }
