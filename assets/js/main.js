// VARIABLES

let snakeField = document.getElementById("snakeField");
var randomColor = Math.floor(Math.random()*16777215).toString(16);

// GOAL 1: Erstelle 100 Divs mit Hilfe von Javascript (Loop). 

for (let i = 0; i <= 99; i++) {
    let div = document.createElement('div');
    div.className = 'item';
    snakeField.appendChild(div)
};

// GOAL 2: Erzeuge eine zufällige RGB Farbe.

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// GOAL 3: Die Farbe jedes Elements sollte in eine andere geändert werden und so für eine halbe Sekunde bleiben, wenn das Element mit dem Mauszeiger getroffen wird.

runSnake = () =>{
    snakeField.childNodes.forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#" + randomColor;
        backToBasic = () =>{
            item.style.backgroundColor = "";
        }
        setTimeout(backToBasic, 500)
      })
    });
}

runSnake()
