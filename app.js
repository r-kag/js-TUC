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

const rPin = []
const gPin = []
const bPin = []
const yPin = []
const homespaces = [[], [], [], []]
//YT 15:51
function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece;
        switch (startPiece) {
            case yellowPin:
                yPin.push(square)
                break;
            case redPin:
                rPin.push(square)
                break;
            case bluePin:
                bPin.push(square)
                break;
            case greenPin:
                gPin.push(square)
                break;
        }
        switch (i) {
            //square id's for red home
            case 211:
            case 212:
            case 213:
            case 214:
                homespaces[0].push(square);
                break;
            //square id's for green home
            case 31:
            case 52:
            case 73:
            case 94:
                homespaces[1].push(square);
                break;
            //square id's for blue home
            case 226:
            case 227:
            case 228:
            case 229:
                homespaces[2].push(square);
                break;
            //square id's for yellow home
            case 346:
            case 367:
            case 388:
            case 409:
                homespaces[3].push(square);
                break;
        }
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
    console.log(e.target.classList[0])
    if (e.target.classList[0] == 'square') {
        e.stopPropagation()
        e.target.append(draggedElement)
    }
    var board = document.getElementById("Game-Winner");
    if (homespaces[0][0].firstChild &&
        homespaces[0][1].firstChild &&
        homespaces[0][2].firstChild &&
        homespaces[0][3].firstChild) {
        board.appendChild(document.createTextNode("Red Wins!"));
    } else if (
        homespaces[1][0].firstChild &&
        homespaces[1][1].firstChild &&
        homespaces[1][2].firstChild &&
        homespaces[1][3].firstChild) {
        board.appendChild(document.createTextNode("Green Wins!"));
    } else if (
        homespaces[2][0].firstChild &&
        homespaces[2][1].firstChild &&
        homespaces[2][2].firstChild &&
        homespaces[2][3].firstChild) {
        board.appendChild(document.createTextNode("Blue Wins!"));
    } else if (
        homespaces[3][0].firstChild &&
        homespaces[3][1].firstChild &&
        homespaces[3][2].firstChild &&
        homespaces[3][3].firstChild) {
        board.appendChild(document.createTextNode("Yellow Wins!"));
    }
}

