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


        this.introText = this.add.text(70 ,this.sys.game.canvas.height / 2 + 140,
        ["Staff",
        "",
        "desarrollo - Luke Colman",
        "",
        "Diseño - Luke Colman",
        "",
        "dibujo - Luke Colman",
        "",
        "sound fx - Luke Colman",
        "",
        "animacion - Luke Colman",
        "",
        "chistes varios - Luke Colman",
        "",
        "",
        "",
        "agradecimientos especiales",
        "",
        "las voces en mi cabeza",
        "",
        "",
        "",
        "Gracias por jugar",
        "",
        "",
        "",
        "press 'space' to reload",



        ], { 
            fontSize: "28px", 
            fontFamily: "upheaval_tt_brkregular",
            // , 'Silkscreen'),
            fill: "white",
        align: "center",});

            // tweens funciona para la interpolacion visible (parpadeos locos)
            this.tweens.add({
                targets: this.introText,
                alpha: 0.1,
                // yoyo: true,
                            duration: 20000,

                // repeat: -1, //-1 = infinito
                // ease: 'Sine.easeInOut',
                // duration: 350,
                y: -750,
            });

            this.introText2 = this.add.text(this.sys.game.canvas.height / 4.5 ,this.sys.game.canvas.height / 2 -380,
                            "press 'space' to reload", { 
                fontSize: "20px", 
                fontFamily: "upheaval_tt_brkregular",
                // , 'Silkscreen'),
                fill: "white" }); 
                this.tweens.add({
                    targets: this.introText2,
                    alpha: 0.1,
                    yoyo: true,    
                    repeat: -1, //-1 = infinito
                    ease: 'Sine.easeInOut',
                    duration: 350,
                });
            // this.introText2 = this.add.text(90 ,this.introText.setX - 140,
            // "PRESS 'SPACE' TO START2", { 
            //     fontSize: "35px", 
            //     fontFamily: "upheaval_tt_brkregular",
            //     // , 'Silkscreen'),
            //     fill: "white" });   
    
            //     // tweens funciona para la interpolacion visible (parpadeos locos)
            //     this.tweens.add({
            //         targets: [this.introText2, this.introText],
            //         alpha: 0.1,
            //         // yoyo: true,
            //                     duration: 4000,
    
            //         // repeat: -1, //-1 = infinito
            //         ease: 'Sine.easeInOut',
            //         // duration: 350,
            //         y: -350,
            //     });
    
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


