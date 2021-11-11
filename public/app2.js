// Mängija 1 ja tema omadused
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
};
// Mängija 2 ja tema omadused
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
};

// Resetnupp ja select valikud
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

// Algne seis ja mäng pole läbi
let winningScore = 3;
let isGameOver = false;

// Mängija andmete uuendamine s.h. vastasmängija
function updateScores(player, opponent) {
    if(!isGameOver) { //Kui mäng ei ole läbi    
        player.score += 1; //Liida üks juurde  
        if(player.score === winningScore) {
            isGameOver = true; // Mäng on läbi
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }  
        player.display.textContent = player.score; //Muuda lehel mängija 1 numbrit
    }  
}

// Mängija 1 nupu funktsionaalsus
p1.button.addEventListener("click", function() {
    updateScores(p1, p2);
});

//Mängija 2 nupu funktsionaalsus
p2.button.addEventListener("click", function() {
    updateScores(p2, p1);
});

// Reset nupu funktsionaalsus
resetButton.addEventListener("click", reset);

// Kui valitakse (reaalselt number muutub)
winningScoreSelect.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
});
/** Taastab mängu algseisu */
function reset() {
    isGameOver = false;
    for(let player of [p1, p2]) { // Mõlema mängija andmed tühistatakse
        player.score = 0; // Algseis nulliks
        player.display.textContent = 0; // Skoori näitamine h1 span
        player.display.classList.remove("has-text-success", "has-text-danger"); // Stiilide eemaldamine
        player.button.disabled = false; // Nuppu saab jälle klikkida
    }
}