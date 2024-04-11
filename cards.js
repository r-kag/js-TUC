const Deck = [
    ['A', "♠", false], ['A', "♣", false], ['A', "♥", false], ['A', "♦", false], ['2', "♠", false], ['2', "♣", false], ['2', "♥", false], ['2', "♦", false],
    ['3', "♠", false], ['3', "♣", false], ['3', "♥", false], ['3', "♦", false], ['4', "♠", false], ['4', "♣", false], ['4', "♥", false], ['4', "♦", false],
    ['5', "♠", false], ['5', "♣", false], ['5', "♥", false], ['5', "♦", false], ['6', "♠", false], ['6', "♣", false], ['6', "♥", false], ['6', "♦", false],
    ['7', "♠", false], ['7', "♣", false], ['7', "♥", false], ['7', "♦", false], ['8', "♠", false], ['8', "♣", false], ['8', "♥", false], ['8', "♦", false],
    ['9', "♠", false], ['9', "♣", false], ['9', "♥", false], ['9', "♦", false], ['10', "♠", false], ['10', "♣", false], ['10', "♥", false], ['10', "♦", false],
    ['J', "♠", false], ['J', "♣", false], ['J', "♥", false], ['J', "♦", false], ['Q', "♠", false], ['Q', "♣", false], ['Q', "♥", false], ['Q', "♦", false],
    ['K', "♠", false], ['K', "♣", false], ['K', "♥", false], ['K', "♦", false], ['JKR', "♠", false], ['JKR', "♦", false]]

function resetDeck() {
    for (c in Deck) {
        Deck[c][2] = false;
    }
}
resetDeck();

const Hands = [[], [], [], []]


var roundCounter = 0;

function getRandomCard() {
    r = Math.floor(Math.random() * 50) % 54;
    safety = 0;
    while (Deck[r % 54][2] && safety < 54) {
        r++;
        safety++;
    }
    Deck[r % 54][2] = true;
    return Deck[r % 54]
}

function shuffleCards() {
    for (i in Hands) {
        Hands[i] = [];
    }

    currentDealer = (Math.floor(roundCounter / 3) % 4);
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            Hands[i].push(getRandomCard())
        }
    }

    //TODO: check if it's the first round then deal 1 more card to each player
    if (roundCounter % 3 == 0) {
        for (i = 0; i < 4; i++) {
            Hands[i].push(getRandomCard())
        }
    }

    //TODO: check if last(third) round then deal 2 more to dealer
    if (roundCounter % 3 == 2) {
        for (i = 0; i < 2; i++) {
            Hands[currentDealer].push(getRandomCard())
        }
    }

    if (roundCounter % 3 == 2)
        resetDeck()

}


function showHand(player) {
    var display = null;
    var temp = null;
    display = document.getElementById("card-display")
    display.replaceChildren()
    var whichHand = null;
    switch (player) {
        case "red":
            whichHand = 0;
            break;
        case "green":
            whichHand = 1;
            break;
        case "blue":
            whichHand = 2;
            break;
        case "yellow":
            whichHand = 3;
            break;
    }
    display = document.getElementById("card-display");
    temp = document.getElementById("cardTemplate");
    for (x in Hands[whichHand]) {
        display.appendChild(temp.cloneNode(true));
        display.lastChild.appendChild(document.createElement("p"))
        display.lastChild.lastChild.appendChild(document.createTextNode(Hands[whichHand][x][0]))
        display.lastChild.lastChild.style.position = 'relative';
        display.lastChild.lastChild.style.top = '0';
        display.lastChild.lastChild.style.right = '0';
        display.lastChild.appendChild(document.createElement("p"))
        display.lastChild.lastChild.appendChild(document.createTextNode(Hands[whichHand][x][1]))
        display.lastChild.style.display = "inline-block";
        display.lastChild.addEventListener("click", function (e) {
            if (e.target.classList[0] != 'card')
                dropCard(e.target.parentNode, whichHand);
            else
                dropCard(e.target, whichHand);
        });
    }
}

function dropCard(e, h) {
    var suit = e.lastChild.textContent;
    var num = e.firstChild.textContent;
    document.getElementById("card-display").removeChild(e);
    for (c in Hands[h]) {
        if (Hands[h][c][0] == num && Hands[h][c][1] == suit) {
            Hands[h].splice(c, 1);
        }
    }
    roundChange()
}

function roundChange() {
    for (i = 0; i < 4; i++) {
        if (Hands[i].length > 0) {
            return;
        }
    }
    roundCounter++;
    shuffleCards();
}