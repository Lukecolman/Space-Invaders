// IMPORTAR LA PRIMERA ESCENA
import intro from "./scenes/intro.js"
import firstScene from "./scenes/firstScene.js"
// import credits from "./scenes/credits.js"
// import Score from "./scenes/Score.js"

let keyA;
let keyD;
let keyPause;
let scoreFormated;


const config = {

    // OPCIONALES
    title: "ELJUEGASO",
    url: "https://www.linkedin.com/in/lukecolman/",
    version: "0.0.4",

    // OPCIONAL
    pixelArt: true, // REMARCAR LOS PIXELES DE LAS IMAGENES

    // OBLIGATORIO
    type: Phaser.AUTO, // WEBGL O CANVAS O AUTOMATICO
    backgroundColor: "#34495E", // FONDO DEL CANVAS
    scale: {
        width: 600, // TAMAÑO DEL CANVAS
        height: 800,
        parent: "container", // ID DEL CONTENEDOR
        mode: Phaser.Scale.FIT, 
        //// nota para despues Modificar escala => Phaser.Scale.ScaleModeType: RESIZE | FIT | ENVELOP ...
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },

    // INFORMACIÓN DE LA CONSOLA
    banner: {
        hidePhaser: false, // OCULTAR TEXTO DE PHASER EN CONSOLA
        text: "#FFF", // CAMBIAR COLOR DEL TEXTO DEL TITULO DEL JUEGO EN CONSOLA
         // PALETA DE COLORES DE ADORNO EN CONSOLA
        background: [
            "blue",
            "white",
            "red",
            "transparent"
        ]
    
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    //ESCENAS DEL JUEGO
    scene: [
        intro,
        firstScene,
        // credits
        ]

};


// CREAR LA INSTANCIA DEL JUEGO
const game = new Phaser.Game(config);


