const tucBoard = document.querySelector("#tucboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 21

const startPieces = [
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', redPin, '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', redPin, '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', redPin, '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', greenPin, '', '', '', '', redPin, '', redPin, redPin, redPin, redPin, '', '', '', '', '',
    '', '', '', '', '', greenPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', greenPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', greenPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', greenPin, greenPin, greenPin, greenPin, '', '', '', '', '', '', '', '', '', yellowPin, yellowPin, yellowPin, yellowPin, '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', yellowPin, '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', yellowPin, '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', yellowPin, '', '', '', '', '',
    '', '', '', '', '', bluePin, bluePin, bluePin, bluePin, '', bluePin, '', '', '', '', yellowPin, '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', bluePin, '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', bluePin, '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', bluePin, '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',


]


function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('square-id', i)
        square.classList.add('beige')
        tucBoard.append(square)

    })
}

createBoard()