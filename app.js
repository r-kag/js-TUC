const tucBoard = document.querySelector("#tucboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 21

const startPieces = [
    greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole,
    greenHole, '', '', '', '', '', '', '', '', '', '', redHole, '', '', '', '', '', '', '', '', redHole,
    greenHole, '', '', '', '', '', '', '', '', '', '', redHole, '', '', '', '', '', '', '', '', redHole,
    greenHole, '', '', '', '', '', '', '', '', '', '', redHole, '', '', '', '', '', '', '', '', redHole,
    greenHole, '', '', '', greenPin, '', '', '', '', '', '', redHole, '', redPin, redPin, redPin, redPin, '', '', '', redHole,
    greenHole, '', '', '', greenPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', redHole,
    greenHole, '', '', '', greenPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', redHole,
    greenHole, '', '', '', greenPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', redHole,
    greenHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', redHole,
    greenHole, greenHole, greenHole, greenHole, greenHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', redHole,
    blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', redHole,
    blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', yellowHole, yellowHole, yellowHole, yellowHole, yellowHole,
    blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', yellowHole,
    blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', yellowPin, '', '', '', yellowHole,
    blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', yellowPin, '', '', '', yellowHole,
    blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', yellowPin, '', '', '', yellowHole,
    blueHole, '', '', '', bluePin, bluePin, bluePin, bluePin, '', blueHole, '', '', '', '', '', '', yellowPin, '', '', '', yellowHole,
    blueHole, '', '', '', '', '', '', '', '', blueHole, '', '', '', '', '', '', '', '', '', '', yellowHole,
    blueHole, '', '', '', '', '', '', '', '', blueHole, '', '', '', '', '', '', '', '', '', '', yellowHole,
    blueHole, '', '', '', '', '', '', '', '', blueHole, '', '', '', '', '', '', '', '', '', '', yellowHole,
    blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole,


]


function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece
        square.setAttribute('square-id', i)
        square.classList.add('beige')
        tucBoard.append(square)

    })
}

createBoard()

//document.write(5 + 6)