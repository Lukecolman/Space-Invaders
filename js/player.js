//interactuando con el DOM
const canvas = document.getElementById("canvas");
const layout = canvas.getContext("2d");

canvas.width = 1200;
canvas.height = 800;

//cargo una imagen provisoria para probar el canvas
const background = new Image();
background.src = "../images/spaceSpiderMan.jpg"

function game() {
    layout.drawImage(background, 0, 0, canvas.width, canvas.height);
}

//el setInterval me permite visualizar la imagen del canvas
setInterval(game, 1000 / 60);



//construyo el jugador
class Player {
    constructor() {
        this.position = {
            x: 200, 
            y: 200
        }

        this.velocity = {
            x: 0
            
        }
        //this.img = 
        this.width = 800;
        this.height = 800;
    }

    dibujo() {
        layout.fillStyle = 'red';
        layout.fillRect (this.position.x, this.position.y, this.with, this.height);
    }   

}
console.log("averga")



const player = new Player()
player.dibujo()



//EVENTOS

let pizarra = document.querySelector(".avisoTecla")

window.addEventListener("keydown", function (event) {console.log(event)
    pizarra.innerHTML = event.key + " - " +event.keyCode;
},false);
