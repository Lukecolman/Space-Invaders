// Empece esta seccion desde cero para poder ir ordenando mi codigo anterior y para resolver problemas que tuve en el camino (como por ejemplo no se dibujaba en el canvas)

//interactuando con el DOM
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.widht = innerWidth;
// canvas.height = innerHeight;



//construyo el jugadors
class Player {
    constructor() {
        this.position = {
            x: canvas.width / 2 - 50,
            // cambiar más adelante
            y: canvas.height - 150
        }
        
        this.velocity = {
            x: 0,
        }

        this.width = 100;
        this.height = 100;
    }

// lo dibujo en el canvas
    draw() {
        ctx.fillStyle = "blue"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }   
}


const player = new Player()
player.draw()

// uso esta funcion para poder dibujar el fondo y para que se pueda volver a dibujar el personaje por arriba
function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = "red"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
}

animate()

//EVENTOS

let pizarra = document.querySelector(".avisoTecla")

window.addEventListener("keydown", function (event) {
    console.log(event)
    pizarra.innerHTML = event.key + " - " +event.keyCode;
},false);


// Agrego un nuevo event listener para el movimiento del personaje + arrow function
addEventListener("keydown", ({key}) => {
    // console.log(key + " test fase 1")
    switch (key) {
        case "a":
            console.log("funciona a");
            break;
        case "d":
            console.log("funciona d");
        break;
        case "ArrowLeft":
            console.log("funciona <-")
        break;
        case "ArrowRight":
            console.log("funciona ->")
        break;
    }
});


// se que los colores estan horribles pero es para poder guiarme