let player1 = prompt("Player1 ?");
let player2 = prompt("Player2 ?");

let player1sum = 0;
let player2sum = 0;
let round = 0;

let wrapp = document.getElementById('wrapp');
let player = document.querySelector('player');
let ply1 = document.querySelector('.player1');
let ply2 = document.querySelector('.player2');

ply1.innerHTML = "<h3>First player is " + "'" + player1 + "'" + "</h3></br>";
ply2.innerHTML = "<h3>Second player is " + "'" + player2 + "'" + "</h3></br>";

let x = setInterval(throwlingDice, 1000);

function throwlingDice() {
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    player1sum = player1sum + dice1;
    player2sum = player2sum + dice2;

    round++;
    ply1.innerHTML += "** Round " + round + " **" + "<br>";
    ply2.innerHTML += "** Round " + round + " **" + "<br>";
    ply1.innerHTML += player1 + " " + dice1 + " Equal:  " + player1sum + "<br>";
    ply2.innerHTML += player2 + " " + dice2 + " Equal:  " + player2sum + "<br>";
    if (round == 10) {
        clearInterval(x);
        checkWinner();
    }
}

function checkWinner() {
    if (player1sum > player2sum) {
        ply1.style.backgroundColor = 'yellow';
        ply1.style.color = 'red';
        wrapp.innerHTML += "<h3>The winner is " + "'" + player1 + "'" + "! ! !" + "</h3>";
    } else if (player1sum < player2sum) {
        ply2.style.backgroundColor = 'red';
        ply2.style.color = 'white';
        wrapp.innerHTML += "<h3>The winner is " + "'" + player2 + "'" + "! ! !" + "</h3>";
    } else {
        wrapp.innerHTML += "<h3>No winner!!!</h3>";
    }
}	
