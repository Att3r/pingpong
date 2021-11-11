//alert("Ma töötan");
const p1Button = document.querySelector("#p1Button");
const p1Display = document.querySelector("#p1Display");
const p2Button = document.querySelector("#p2Button");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

/**
 * Muutujate defineerimine ja väärtuste omistamine
 */
let p1Score = 0; // Mängija 1 skoor
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", function() {
    //alert("Kes klikkis?");
    if(!isGameOver) { //Kui mäng ei ole läbi    
        p1Score += 1; //Liida üks juurde  
        if(p1Score === winningScore) {
            isGameOver = true; // Mäng on läbi
            p1Display.classList.add("has-text-success");
            p2Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }  
        p1Display.textContent = p1Score; //Muuda lehel mängija 1 numbrit
    }   
});

p2Button.addEventListener("click", function() {
    //alert("Kes klikkis?");
    if(!isGameOver) { //Kui mäng ei ole läbi    
        p2Score += 1; //Liida üks juurde  
        if(p2Score === winningScore) {
            isGameOver = true; // Mäng on läbi
            p1Display.classList.add("has-text-danger");
            p2Display.classList.add("has-text-success");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }  
        p2Display.textContent = p2Score; //Muuda lehel mängija 1 numbrit
    }   
});

resetButton.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    //console.log(winningScore);
    reset();
});

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0; // Näitamise osa
    p2Display.textContent = 0;
    p1Display.classList.remove("has-text-success", "has-text-danger"); // Eemaldab klassi winner või loser
    p2Display.classList.remove("has-text-success", "has-text-danger");
    p1Button.disabled = false;
    p2Button.disabled = false;
}