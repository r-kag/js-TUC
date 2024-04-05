const tucBoard = document.querySelector("#tucboard")
const tucPieces = document.querySelector("#tucpieces")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 21

const startPieces = [
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', greenPin, greenPin, greenPin, greenPin, '', '', '', '', '',
    '', '', '', '', redPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', redPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', redPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', redPin, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', bluePin, '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', bluePin, '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', bluePin, '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', bluePin, '', '', '', '',
    '', '', '', '', '', yellowPin, yellowPin, yellowPin, yellowPin, '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',


]

const startHoles = [
    redHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, redHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole, greenHole,
    redHole, '', '', '', '', '', '', '', '', '', greenHole, '', '', '', '', '', '', '', '', '', greenHole,
    redHole, '', '', '', '', '', '', '', '', '', greenHole, '', '', '', '', '', '', '', '', '', greenHole,
    redHole, '', '', '', '', '', '', '', '', '', greenHole, '', '', '', '', '', '', '', '', '', greenHole,
    redHole, '', '', '', '', '', '', '', '', '', greenHole, '', '', '', '', '', '', '', '', '', greenHole,
    redHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', greenHole,
    redHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', greenHole,
    redHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', greenHole,
    redHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', greenHole,
    redHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', greenHole,
    redHole, redHole, redHole, redHole, redHole, '', '', '', '', '', '', '', '', '', '', '', blueHole, blueHole, blueHole, blueHole, blueHole,
    yellowHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', blueHole,
    yellowHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', blueHole,
    yellowHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', blueHole,
    yellowHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', blueHole,
    yellowHole, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', blueHole,
    yellowHole, '', '', '', '', '', '', '', '', '', yellowHole, '', '', '', '', '', '', '', '', '', blueHole,
    yellowHole, '', '', '', '', '', '', '', '', '', yellowHole, '', '', '', '', '', '', '', '', '', blueHole,
    yellowHole, '', '', '', '', '', '', '', '', '', yellowHole, '', '', '', '', '', '', '', '', '', blueHole,
    yellowHole, '', '', '', '', '', '', '', '', '', yellowHole, '', '', '', '', '', '', '', '', '', blueHole,
    yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, yellowHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole, blueHole,]

//YT 15:51
function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece;
        //console.log(square)
        // drag and drop functionality chapter 15 24:10
        //square.firstChild && console.log(square.firstChild.getAttribute('IsAPin'))
        (square.firstChild && square.firstChild.getAttribute('IsAPin') == 'true') && square.firstChild.setAttribute('draggable', true)
        square.setAttribute('square-id', i)
        // square.classList.add('beige')
        tucPieces.append(square)

    })
    startHoles.forEach((startHole, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startHole;
        //console.log(square)
        // drag and drop functionality chapter 15 24:10
        //square.firstChild && console.log(square.firstChild.getAttribute('IsAPin'))
        // (square.firstChild && square.firstChild.getAttribute('IsAPin') == 'true') && square.firstChild.setAttribute('draggable', true)
        //square.setAttribute('square-id', i)
        square.classList.add('beige')
        tucBoard.append(square)

    })
}

createBoard()

const allSquares = document.querySelectorAll("#tucpieces .square")

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