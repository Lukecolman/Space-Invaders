

let txt0;


class intro extends Phaser.Scene {
    constructor() {
        super("intro");
    }

    init() {
        console.log("intro");  

    }

    preload() {


    }

    create() {
        // this.logo = this.add.image(this.sys.game.canvas.width /2 , 250, "panicLogo")
        // .setScale(2.7);




//ESTRELLAS ANIMADAS

        // const starAnimation = this.anims.create({
        //     key: 'starAnimation',
        //     frames: this.anims.generateFrameNumbers('starAnimation'),
        //     frameRate: 16,
        //     repeatDelay: 400
        // });


        // // PANIC STARS
        // let panicStar1 = this.add.sprite(this.logo.y - 85 , this.logo.height - 106, "starAnimation")
        //     .setScale(2.7)
        //     .play({ key: 'starAnimation', repeat: -1 });

        // let panicStar2 = this.add.sprite(this.logo.y + 175 , this.logo.height - 105, "starAnimation")
        //     .setScale(2.7)
        //     .play({ key: 'starAnimation', repeat: -1, delay: 200});


        // // // SPACE STARS
        // let spaceStar1 = this.add.sprite(this.logo.y - 170 , this.logo.height + 136, "starAnimation")
        //     .setScale(2.7)
        //     .play({ key: 'starAnimation', repeat: -1, delay: 350 });
            
        // let spaceStar2 = this.add.sprite(this.logo.y + 69 , this.logo.height + 51, "starAnimation")
        //     .setScale(2.7)
        //     .play({ key: 'starAnimation', repeat: -1, delay: 200});

        // let spaceStar3 = this.add.sprite(this.logo.y + 260 , this.logo.height + 138, "starAnimation")
        //     .setScale(2.7)
        //     .play({ key: 'starAnimation', repeat: -1 });
            



//TEXTOS
        this.introText = this.add.text(this.sys.game.canvas.width /2 ,this.sys.game.canvas.height / 2 + 240,"PRESS 'SPACE' TO START", { 
            fontSize: "35px", 
            fontFamily: "upheaval_tt_brkregular",
            fill: "white" })
            .setOrigin(0.5);


        this.extraText = this.add.text(this.sys.game.canvas.width /2,this.sys.game.canvas.height - 40,"v0.2 made with x-files technology." , { 
            fontSize: "12px", 
            fontFamily: "silkscreen",
            fill: "white",
        })
        .setOrigin(0.5);


    
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


