const tucBoard = document.querySelector("#tucboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 21

const startPieces = [
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, '',
    '', greenHole, '', '', '', '', '', '', '', '', redHole, '', '', '', '', '', '', '', '', redHole, '',
    '', greenHole, '', '', '', '', '', '', '', '', redHole, '', '', '', '', '', '', '', '', redHole, '',
    '', greenHole, '', '', '', '', '', '', '', '', redHole, '', '', '', '', '', '', '', '', redHole, '',
    '', greenHole, '', '', '', greenPin, '', '', '', '', redHole, '', redPin, redPin, redPin, redPin, '', '', '', redHole, '',
    '', greenHole, '', '', '', greenPin, '', '', '', '', '', '', '', '', '', '', '', '', '', redHole, '',
    '', greenHole, '', '', '', greenPin, '', '', '', '', '', '', '', '', '', '', '', '', '', redHole, '',
    '', greenHole, '', '', '', greenPin, '', '', '', '', '', '', '', '', '', '', '', '', '', redHole, '',
    '', greenHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', redHole, '',
    '', greenHole, greenHole, greenHole, greenHole, greenHole, '', '', '', '', '', '', '', '', '', yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, '',
    '', blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', yellowHole, '',
    '', blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', yellowPin, '', '', '', yellowHole, '',
    '', blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', yellowPin, '', '', '', yellowHole, '',
    '', blueHole, '', '', '', '', '', '', '', '', '', '', '', '', '', yellowPin, '', '', '', yellowHole, '',
    '', blueHole, '', '', '', bluePin, bluePin, bluePin, bluePin, '', blueHole, '', '', '', '', yellowPin, '', '', '', yellowHole, '',
    '', blueHole, '', '', '', '', '', '', '', '', blueHole, '', '', '', '', '', '', '', '', yellowHole, '',
    '', blueHole, '', '', '', '', '', '', '', '', blueHole, '', '', '', '', '', '', '', '', yellowHole, '',
    '', blueHole, '', '', '', '', '', '', '', '', blueHole, '', '', '', '', '', '', '', '', yellowHole, '',
    '', blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',


]

//YT 15:51
function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece
        // drag and drop functionality chapter 15 24:10
        square.firstChild && square.firstChild.setAttribute('draggable', true)
        square.setAttribute('square-id', i)
        square.classList.add('beige')
        tucBoard.append(square)

    })
}

createBoard()

const allSquares = document.querySelectorAll("#tucboard .square")

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let startPostitionId
let draggedElement

function dragStart(e) {
    startPostitionId = e.target.parentNode.getAttribute('square-id')
    draggedElement = e.target
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    e.stopPropagation()
    e.target.append(draggedElement)
}