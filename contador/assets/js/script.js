var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
// Eventos

var botaoMaior = document.getElementById('maior');
var botaoMenor= document.getElementById('menor');

botaoMaior.addEventListener('click', increment);
botaoMenor.addEventListener('click', decrement);
// Fim dos Eventos

function increment(){

    if(currentNumber < -1) {
        currentNumberWrapper.style.color= 'red';
    } else {
        currentNumberWrapper.style.color= 'blue'
    }

    if(currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        currentNumber = currentNumber;
    }
}

function decrement(){
    if (currentNumber <=0) {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style,color = 'blue'
    }
    
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
