
// // Empece esta seccion desde cero para poder ir ordenando mi codigo anterior y para resolver problemas que tuve en el camino (como por ejemplo no se dibujaba en el canvas)

// //interactuando con el DOM
// const canvas = document.getElementById("canvas');
// const ctx = canvas.getContext('2d');

// // canvas.widht = innerWidth;
// // canvas.height = innerHeight;



// //construyo el jugadors
// class Player {
//     constructor() {
//         this.position = {
//             x: canvas.width / 2 - 50,
//             // cambiar más adelante
//             y: canvas.height - 150
//         }
        
//         this.velocity = {
//             x: 0,
//         }

//         this.width = 100;
//         this.height = 100;
//     }

// // lo dibujo en el canvas
//     draw() {
//         ctx.fillStyle = "blue"
//         ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
//     }   

//     movement (){
//         this.draw()
//         this.position.x += this.velocity.x
//     }
// }


// const player = new Player()
// player.draw()

// // monitor de teclas
// const keya = {
//     a: {
//         pressed: false
//     },
//     d: {
//         pressed: false
//     }
// }


// // uso esta funcion para poder dibujar el fondo y para que se pueda volver a dibujar el personaje por arriba
// function animate() {
//     requestAnimationFrame(animate)
//     ctx.fillStyle = "red"
//     ctx.fillRect(0, 0, canvas.width, canvas.height)
//     player.movement()

//     if (keya.a.pressed && player.position.x >= 0){
//         player.velocity.x = -10
//     } else if (keya.d.pressed && player.position.x <= canvas.width - player.width) {
//         player.velocity.x =  10
//     }
//     else {
//         player.velocity.x = 0
//     }
// }

// animate()

// //EVENTOS

// let keyAlert = document.querySelector(".avisoTecla")

// window.addEventListener("keydown", function (event) {
//     console.log(event)
//     keyAlert.innerHTML = event.key + " - " +event.keyCode;
// },false);


// // Agrego un nuevo event listener para el movimiento del personaje + arrow function
// addEventListener("keydown", ({key}) => {
//     // console.log(key + " test fase 1")
//     // verifico que se pueda mover ya sea con mayusculas, minusculas o flechas (si, dependia del block mayus, casi rompo todo)
//     switch (key) {
//         case "a":
//         case "ArrowLeft":
//         case "A":        
//             console.log("funciona a");
//             keya.a.pressed = true;
//             break;
//         case "d":
//         case "ArrowRight":
//         case "D":
//             console.log("funciona d");
//             keya.d.pressed = true;
//         break;
//     }
// });

// addEventListener("keyup", ({key}) => {
//     // console.log(key + " test fase 2")
//     switch (key) {
//         case "a":
//         case "ArrowLeft":
//         case "A":        
//             console.log("funciona a");
//             keya.a.pressed = false;
//             break;
//         case "d":
//         case "ArrowRight":
//         case "D":
//         console.log("funciona d");
//         keya.d.pressed = false;
//         break;
//     }
// });


// //se que los colores estan horribles pero es para poder guiarme



////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////
// let gameSettings = {
//     playerSpeed: 200
// }

// //Comienzo a declarar las variables en esta parte porque si no se rompe todo
// let DistLaser1;

// let naveRosa;
// let startGame = true;

// let cursors;
// let keyA;
// let keyD;
// let keyShoot;
// let space;
// let playerLaser;
// let enemy1;
// let bullet;
// var lastFired = 0;
// //grupo de fisicas
// let player;
// let enemies;
// let playerShots;
// let explotion;
// let cursorKeys;


// let config = {
//     type: Phaser.AUTO,
//     width: 1000,
//     height: 1000,
//     // Para hacer el canvas transparente
//     // transparent: true,

//     physics:{
//         default: "arcade",
//         arcade: {
//             gravity: {y:0},
//             debug: true,


//         }
//     },
//     scene: [scene11],
//     //     scale: {
// //         // mode: Phaser.Scale.RESIZE, 
// //         // nota para despues Modificar escala => Phaser.Scale.ScaleModeType: RESIZE | FIT | ENVELOP ...
// //         autoCenter: Phaser.Scale.CENTER_HORIZONTALLY ,
// //     },
// };



// //Creo la variable uego para poder iniciar las otras funciones de Phaser3 
// let game = new Phaser.Game(config);

// enemyInfo = {
//     widht: 40,
//     height: 20,
//     count: {
//         row: 4,
//         col: 9,
//     },
//     offset:
//     {top: 100,
//     left: 60
// },
// padding: 5
// }

//         // bullets = this.add.group({
//         //     classType: Bullet,
//         //     maxSize: 10,
//         //     runChildUpdate: true
//         // });





// IMPORTAR LA PRIMERA ESCENA
import intro from './scenes/intro.js'
import firstScene from './scenes/firstScene.js'
// import Score from './scenes/Score.js'

let keyA;
let keyD;
let keyPause;
let scoreFormated;
let none;


const config = {

    // OPCIONALES
    title: 'ELJUEGASO',
    url: "www.googl.com",
    version: '0.0.1',

    // OPCIONAL
    pixelArt: true, // REMARCAR LOS PIXELES DE LAS IMAGENES

    // OBLIGATORIO
    type: Phaser.AUTO, // WEBGL O CANVAS O AUTOMATICO
    backgroundColor: '#34495E', // FONDO DEL CANVAS
    scale: {
        width: 600, // TAMAÑO DEL CANVAS
        height: 600,
        parent: 'container', // ID DEL CONTENEDOR
        // mode: Phaser.Scale.RESIZE, 
        //// nota para despues Modificar escala => Phaser.Scale.ScaleModeType: RESIZE | FIT | ENVELOP ...
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },

    // INFORMACIÓN DE LA CONSOLA
    banner: {
        hidePhaser: false, // OCULTAR TEXTO DE PHASER EN CONSOLA
        text: '#FFF', // CAMBIAR COLOR DEL TEXTO DEL TITULO DEL JUEGO EN CONSOLA
         // PALETA DE COLORES DE ADORNO EN CONSOLA
        background: [
            'blue',
            'white',
            'red',
            'transparent'
        ]
    
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },

    //ESCENAS DEL JUEGO
    scene: [
        intro,
        firstScene,
        // Score
        ]

};


// CREAR LA INSTANCIA DEL JUEGO
const game = new Phaser.Game(config);


