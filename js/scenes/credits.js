var largeText = null;


class credits extends Phaser.Scene {
    constructor() {
        super("credits");
    }

    init() {
        console.log("creditos");  

    }
    preload ()
    {

    }

    create ()
    {


        this.introText = this.add.text(90 ,this.sys.game.canvas.height / 2 + 140,
        "PRESS 'SPACE' TO START", { 
            fontSize: "35px", 
            fontFamily: "upheaval_tt_brkregular",
            // , 'Silkscreen'),
            fill: "white" });

            // tweens funciona para la interpolacion visible (parpadeos locos)
            this.tweens.add({
                targets: this.introText,
                alpha: 0.1,
                // yoyo: true,
                            duration: 4000,

                // repeat: -1, //-1 = infinito
                // ease: 'Sine.easeInOut',
                // duration: 350,
                y: -15*4,
            });

            this.introText2 = this.add.text(90 ,this.sys.game.canvas.height / 2 + 140,
            "PRESS 'SPACE' TO START2", { 
                fontSize: "35px", 
                fontFamily: "upheaval_tt_brkregular",
                // , 'Silkscreen'),
                fill: "white" });
    
                // tweens funciona para la interpolacion visible (parpadeos locos)
                this.tweens.add({
                    targets: [this.introText2, this.introText],
                    alpha: 0.1,
                    // yoyo: true,
                                duration: 4000,
    
                    // repeat: -1, //-1 = infinito
                    // ease: 'Sine.easeInOut',
                    // duration: 350,
                    y: -15*4,
                });
    
        // INPUT DE TECLAS (un add event listener de Phaser)
        this.cursors = this.input.keyboard.createCursorKeys();




    }


    update (time, delta)
    {


        //Al apretar "espacio" cambio de escena
        if (this.input.keyboard.checkDown(this.cursors.space, 250)) {

        this.scene.start("intro");

        }
    }



}


export default credits;


