//Model
const rulesBtn = document.querySelector('.rules-btn');
const rulesContainer = document.querySelector('.rules-container');
const cancelBtn = document.querySelector('.cancel-btn');
const moves = document.querySelectorAll('.move');
const computerMoves = ['rock', 'paper', 'scissors'];
//View
function pickMove(move){
    const movesContainer = document.querySelector('.moves-container');
    movesContainer.classList.add('game-result');
    movesContainer.style.backgroundImage = 'none';
    movesContainer.innerHTML = `
        <div class="your-pick">
            <h3>YOU PICKED</h3>
            <div class="${move.classList[0]} move">
                <img src="./images/icon-${move.classList[0]}.svg" alt="${move.classList[0]} move">
            </div>
        </div>
        <div class="result-container">
            <h3 class="result">YOU WIN</h3>
            <button class="play-again">PLAY AGAIN</button>
        </div>
        <div class="computer-pick">
            <h3>THE HOUSE PICKED</h3>
            <div class="paper move">
                <img class="computer-move" src="./images/icon-paper.svg" alt="scissors move">
            </div>
        </div>
    `;
    const computerMove = document.querySelector('.computer-move');
}

//Controller
rulesBtn.addEventListener('pointerup', ()=>{
    rulesContainer.classList.add('show-rules');
});

cancelBtn.addEventListener('pointerup', ()=>{
    rulesContainer.classList.remove('show-rules');
});

moves.forEach(move=>{
    move.addEventListener('pointerup', pickMove.bind(null, move));
});