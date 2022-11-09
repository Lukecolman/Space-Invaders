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
        // this.load.spritesheet("starAnimation", "../../assets/sprites/starAnimation.png", { frameWidth: 21, frameHeight: 21});

    }

    create ()
    {


        this.introText = [
            this.add.text(this.sys.game.canvas.width /2 ,this.sys.game.canvas.height / 2 + 340,
        ["STAFF",
        "",
        "Desarrollo - Luke Colman",
        "",
        "Diseño - Luke Colman",
        "",
        "Dibujo - Luke Colman",
        "",
        "Sound FX - Luke Colman",
        "",
        "Animacion - Luke Colman",
        "",
        "Chistes varios - Luke Colman",
        "",
        "",
        "",
        "",
        "",
        "AGRADECIMIENTOS ESPECIALES",
        "",
        "Las voces en mi cabeza",
        "",
        "",
        "",
        "",
        "",
        "",
        "Gracias por jugar",
        ], { 
            fontSize: "28px", 
            fontFamily: "upheaval_tt_brkregular",
            // , 'Silkscreen'),
            fill: "white",
            align: "center",})  
            .setOrigin(0.5),
            ,

            //////////////////////

            // this.add.text(this.sys.game.canvas.width /2 ,this.sys.game.canvas.height / 2 + 540,
            // [
            // //     "STAFF",
            // // "",
            // "",
            // "",
            // "Desarrollo - Luke Colman",
            // "",
            // "Diseño - Luke Colman",
            // "",
            // "Dibujo - Luke Colman",
            // "",
            // "Sound FX - Luke Colman",
            // "",
            // "Animacion - Luke Colman",
            // "",
            // "Chistes varios - Luke Colman",
            // "",
            // "",
            // "",
            // "",
            // "",
            // "AGRADECIMIENTOS ESPECIALES",
            // "",
            // "Las voces en mi cabeza",
            // "",
            // "",
            // "",
            // "",
            // "",
            // "",
            // "Gracias por jugar",
            // ], { 
            //     fontSize: "28px", 
            //     fontFamily: "upheaval_tt_brkregular",
            //     // , 'Silkscreen'),
            //     fill: "white",
            //     align: "center",})  
            //     .setOrigin(0.5),


        ]

            // this.introText23 = this.add.text(this.sys.game.canvas.width /2 ,this.sys.game.canvas.height / 2 -380,
            //                 "press 'space' to reload", { 
            //     fontSize: "20px", 
            //     fontFamily: "upheaval_tt_brkregular",
            //     // , 'Silkscreen'),
            //     fill: "white" })
            //     .setOrigin(0.5);

            // tweens funciona para la interpolacion visible (parpadeos locos)
            this.tweens.add({
                targets: this.introText,
                // alpha: 0.1,
                // yoyo: true,
                            duration: 20000, //20000
                // repeat: -1, //-1 = infinito
                // ease: 'Sine.easeInOut',
                // duration: 350,
                y: -750,
            });

            this.introText2 = [this.add.text(this.sys.game.canvas.width /2 ,this.sys.game.canvas.height / 2 -380,
                            "press 'space' to reload", { 
                fontSize: "20px",
                fontFamily: "upheaval_tt_brkregular",
                // , 'Silkscreen'),
                fill: "white" })
                .setOrigin(0.5),
                ,
                // this.add.text(this.sys.game.canvas.width /2 ,this.sys.game.canvas.height / 2 + 280,
                // "press 'space' to reload", { 
                //     fontSize: "20px",
                //     fontFamily: "upheaval_tt_brkregular",
                //     // , 'Silkscreen'),
                //     fill: "white" })
                //     .setOrigin(0.5),
            ]


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




// ANIMACION ESTRELLA
        // const config = {
        //     key: 'starAnimation',
        //     frames: 'starAnimation',
        //     frameRate: 16,
        //     repeat: -1,
        //     repeatDelay: 3000,
        // };

        // this.anims.create(config);

        // for (let i = 0; i < 15; i++)
        // {
        //     let x = Phaser.Math.Between(this.sys.game.canvas.width, 0 );
        //     let y = Phaser.Math.Between(0, this.sys.game.canvas.height);

        //     let starAnimation = this.add.sprite(x, y, 'starAnimation', 23)
        //     .setScale(2);

        //     //  Each one can have a random start delay
        //     starAnimation.play({
        //         key: 'starAnimation',
        //         delay: Math.random() * 6000,

        //     });
        // }
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


