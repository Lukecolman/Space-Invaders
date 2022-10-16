

let txt0;


class intro extends Phaser.Scene {
    constructor() {
        super("intro");
    }

    init() {
        console.log("intro");  

    }

    preload() {
        // @font-face {
        // font-family: 'upheaval_tt_brkregular';
        // src: url('./assets/fonts/upheavtt-webfont.woff2') format('woff2'),
        //     url('./assets/fonts/upheavtt-webfont.woff') format('woff');
        // font-weight: normal;
        // font-style: normal;
        // }

    }

    create() {

        this.introText = this.add.text(90 ,this.sys.game.canvas.height / 2 + 140,"PRESS 'SPACE' TO START", { 
            fontSize: "35px", 
            fontFamily: "upheaval_tt_brkregular",
            // , 'Silkscreen'),
            fill: "white" });

            // tweens funciona para la interpolacion visible (parpadeos locos)
            this.tweens.add({
                targets: this.introText,
                alpha: 0.1,
                yoyo: true,
                repeat: -1, //-1 = infinito
                ease: 'Sine.easeInOut',
                duration: 350
            });
    
        // INPUT DE TECLAS (un add event listener de Phaser)
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update(time, delta) {

        //Al apretar "espacio" cambio de escena
        if (this.input.keyboard.checkDown(this.cursors.space, 250)) {

            this.scene.start("firstScene");
            // this.scene.start("Score")
    
        }

    }


}



export default intro;


