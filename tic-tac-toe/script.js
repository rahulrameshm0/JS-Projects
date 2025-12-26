const cell = document.querySelectorAll('td');
let number = '0';
const input1 = document.querySelector('.input-1')
const input2 = document.querySelector('.input-2')

let score0 = 0;
let score1 = 0;
let gameOver = false;

input1.value = score0;
input2.value = score1;

const winPattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]


cell.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent !== '' || gameOver) return;
        button.textContent = number;
        
        if(checkWinner()){
            if (number === '0'){
                score0++;
                input1.value = score0;
            }else{
                score1++;
                input2.value = score1;
            }
            gameOver = true;
            setTimeout(resetBoard, 800);
            return
        };
        number = number === '0' ? 'x': '0';
    });

});

function checkWinner(){
    for (let pattern of winPattern){
        const [a,b,c] = pattern;

        if (
            cell[a].textContent !== '' &&
            cell[a].textContent === cell[b].textContent &&
            cell[a].textContent === cell[c].textContent
        ){
            return true
        }
    }
    return false
};

function resetBoard() {
    cell.forEach(box => box.textContent = '');
    number = '0';
    gameOver = false;
}