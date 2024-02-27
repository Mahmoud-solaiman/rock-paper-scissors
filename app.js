//Model
const rulesBtn = document.querySelector('.rules-btn');
const rulesContainer = document.querySelector('.rules-container');
const cancelBtn = document.querySelector('.cancel-btn');
//View

//Controller
rulesBtn.addEventListener('pointerup', ()=>{
    rulesContainer.classList.add('show-rules');
});

cancelBtn.addEventListener('pointerup', ()=>{
    rulesContainer.classList.remove('show-rules');
});