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

    movement (){
        this.draw()
        this.position.x += this.velocity.x
    }
}


const player = new Player()
player.draw()

// monitor de teclas
const keya = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}


// uso esta funcion para poder dibujar el fondo y para que se pueda volver a dibujar el personaje por arriba
function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = "red"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.movement()

    if (keya.a.pressed && player.position.x >= 0){
        player.velocity.x = -10
    } else if (keya.d.pressed && player.position.x <= canvas.width - player.width) {
        player.velocity.x =  10
    }
    else {
        player.velocity.x = 0
    }
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
        case "ArrowLeft":
        case "A":        
            console.log("funciona a");
            keya.a.pressed = true;
            break;
        case "d":
        case "ArrowRight":
        case "D":
            console.log("funciona d");
            keya.d.pressed = true;
        break;
    }
});

addEventListener("keyup", ({key}) => {
    // console.log(key + " test fase 1")
    switch (key) {
        case "a":
        case "ArrowLeft":
        case "A":        
            console.log("funciona a");
            keya.a.pressed = false;
            break;
        case "d":
        case "ArrowRight":
        case "D":
        console.log("funciona d");
        keya.d.pressed = false;
        break;
    }
});


// se que los colores estan horribles pero es para poder guiarme