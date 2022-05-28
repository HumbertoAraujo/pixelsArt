createBoard('5');
function createInputSizeBoard(){
    let fatherButtons = document.getElementsByTagName('section')[0];
    let inputSizeBoard = document.createElement('input');
    inputSizeBoard.id = 'board-size';
    inputSizeBoard.type = 'number';
    inputSizeBoard.name = 'number';
    inputSizeBoard.min = '1';
    inputSizeBoard.max = '50';    
    inputSizeBoard.placeholder = '5 Até 50';
    fatherButtons.appendChild(inputSizeBoard);    
}

createInputSizeBoard();

function createButtonSizeBoard(){
    
    let fatherButtons = document.getElementsByTagName('section')[0];
    let buttonSizeBoard = document.createElement('button');
    buttonSizeBoard.id = 'generate-board';
    buttonSizeBoard.innerText = 'VQV';
    buttonSizeBoard.classList.add('buttons');
    fatherButtons.appendChild(buttonSizeBoard);
    buttonSizeBoard.addEventListener('click', setSizeBoard );
    function setSizeBoard(){         
        let inputSize = document.querySelector('#board-size');
        let valueInput = inputSize.value;
        if (valueInput === ''){
            window.alert('Board inválido!');            
        } else if (valueInput === undefined) {
            boardSize = '5';
        }
        boardSize = valueInput;               
        createBoard(boardSize);        
    }     
}
createButtonSizeBoard();

function removeOldBoard(){      
    let allPixels = document.querySelectorAll('.pixel');
    for (index = allPixels.length -1; index >= 0; index -= 1){
        allPixels[index].remove();
    }
    let allLinePixels = document.querySelectorAll('.linhaPixel');
    for (index2 = allLinePixels.length -1; index2 >= 0; index2 -= 1){
        allLinePixels[index2].remove();
    }
}

function createBoard(boardSize){   
    removeOldBoard();
        if (boardSize < 5 && boardSize > 0 ){            
            window.alert('Tamanho mínimo é 5');
            boardSize = 5;
        } else if (boardSize > 50 ){
            window.alert('Tamanho máximo é 50');
            boardSize = 50;
        } 
        let fatherBoard = document.getElementById('pixel-board');
    for (let row = 0; row < boardSize; row += 1){
        let newRow = document.createElement('div');
        newRow.classList.add('linhaPixel')
        fatherBoard.appendChild(newRow);
        for (let column = 0; column < boardSize; column += 1){
            let newColumn = document.createElement('div');
            newColumn.classList.add('pixel');
            newRow.appendChild(newColumn);
            
        }
    }
}

function newRandomPaletteColor(){
    let stringHexa = '0123456789ABCDEF';
    let newColor = '#';
    for (index = 0; index < 6; index += 1){
        newColor += stringHexa[Math.floor(Math.random() * 16)];
    } 
    return newColor
}

function paintPalette(){
    document.querySelectorAll('.color')[1].style.backgroundColor = newRandomPaletteColor();
    document.querySelectorAll('.color')[2].style.backgroundColor = newRandomPaletteColor();
    document.querySelectorAll('.color')[3].style.backgroundColor = newRandomPaletteColor();
}

paintPalette();

function newColorSelected(){
    let paletaCores = document.querySelector('#color-palette');
    let colorsPalette = document.querySelectorAll('.color');
    paletaCores.addEventListener('click', function(event){
        for (index = 0; index < colorsPalette.length; index += 1){
            colorsPalette[index].classList.remove('selected');
        }
        event.target.classList.add('selected');
})
}

newColorSelected();

function paintPixel(){
    let boardPixels = document.getElementById('pixel-board');
    let selectedColor = document.querySelector('.selected');
    boardPixels.addEventListener('click', function(event){
    let selectedPixel = event.target;
    let selectedColor = document.querySelector('.selected');
    selectedPixel.style.backgroundColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
    console.log(selectedPixel);
    })
}
paintPixel();
function newButtonCleanup(){
    let paiBotao = document.getElementsByTagName('section')[0];
    let botaoCleanUp = document.createElement('button');
    botaoCleanUp.innerText = 'Limpar';
    botaoCleanUp.id = 'clear-board';
    botaoCleanUp.classList.add('buttons');
    paiBotao.appendChild(botaoCleanUp);    
}

newButtonCleanup();
function cleanUpBox(){
    let botaoCleanUp = document.getElementById('clear-board');
    botaoCleanUp.addEventListener('click', cleanUp);
    function cleanUp (){
        let pixelsCleanup = document.querySelectorAll('.pixel');
        for (index = 0; index < pixelsCleanup.length; index += 1){
            pixelsCleanup[index].style.backgroundColor = 'white';
        }             
    }
}

cleanUpBox();