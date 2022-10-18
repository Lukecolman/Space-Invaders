import meteorum from "../clases/meteorum.js";
import player from "../clases/player.js";
import invader from "../clases/invader.js";
import bullet from "../clases/bullet.js";
// import powerUp from "../clases/powerUp.js";

let coli;
class firstScene extends Phaser.Scene {

    constructor() {
        super("firstScene");
    }

    init() {
        console.log("First Scene");
        this.respawn = 0;
        this.respawnInterval = 1000;
        this.scoreText = "";
        this.score = 0;
        this.lifesCounter = 3;
        this.lifesText = "";
        this.newLife = 2000; // Nueva Vida cada X puntuación
        this.enemiesGlobalCounter = 0;
        this.invincible = false;
        this.powerupCounter = 0;

    }


    preload() {

        this.load.path = "./assets/";

        // CARGA DE IMAGENES
        this.load.image("background", "../../assets/backgrounds/background.png-")
            .image("bullet", "../../assets/sprites/laser.png")
            .image("invader", "../../assets/sprites/invader.png") 
            .image("meteorum", "../../assets/sprites/meteorum.png") 
            .image("life", "../../assets/sprites/life.png")
            // .image("spaceShip", "../../assets/sprites/btNave.png",
            //     { frameWidth: 60, frameHeight: 66 }
            // );
        this.load.spritesheet("explosion", "../../assets/sprites/explosion.png", { frameWidth: 47, frameHeight: 47.2});
        this.load.spritesheet("spaceShip", "../../assets/sprites/btNaveSprite.png", { frameWidth: 38, frameHeight: 43});


        // CARGA DE AUDIOS
        this.load.audio("laser", ["../../assets/sounds/laser.wav"])
            .audio("playerExplosion", ["../../assets/sounds/playerexplosion.wav"])
            .audio("enemyExplosion", ["../../assets/sounds/enemyexplosion.wav"])
            .audio("spaceMusic", ["../../assets/sounds/spaceMusic.wav"])
            .audio("lifeUp", ["../../assets/sounds/life.wav"])

        //     .audio("spaceMusic", ["sounds/spaceMusic.mp3"]);


    }

    
    create() {

        // UI
        this.scoreText = this.add.text(this.sys.game.canvas.width / 2 - 65, 10, "SCORE: " + this.score, { fontSize: "19px", fontFamily: "upheaval_tt_brkregular", fill: "white" });
        this.scoreText.setDepth(1);
        this.lifesText = this.add.text(50, 10, "X " + this.lifesCounter, {align: "right", fontSize: "24px", fontFamily: "upheaval_tt_brkregular", fill: "white" });
        this.lifesText.setDepth(1);



        // AUDIOS
        this.enemySound = this.sound.add("enemyExplosion");
        this.laserSound = this.sound.add("laser");
        this.playerExplosionSound = this.sound.add("playerExplosion");
        this.lifeUpSound = this.sound.add("lifeUp");

        // // MUSICA DE FONDO
        this.backgroundMusic = this.sound.add("spaceMusic");
        this.backgroundMusic.loop = true;
        this.backgroundMusic.play({volume: 0.25});


        // CONTROLES
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyPause = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);


        // SPRITES
        this.background = this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, "background");
        this.lifeSprite = this.add.image(30, 18, "life").setDepth(1);
        this.explosion = this.add.sprite(-100, -100, "explosion")
        .setScale(2);
        // this.explosion.setVisible(false);

        // ESTO TIENE QUE ANDAR X FAVOR DIOSITO
        this.anims.create({
            frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 6}),
            key: "explosion",
            hideOnComplete: true,
            visible: false,
            frameRate: 24,
            repeat: 0

        })
        



        // JUGADOR
        this.player = new player(this, this.sys.game.canvas.width / 2, this.sys.game.canvas.height - 80, "spaceShip");


        // GRUPOS

        this.invaderGroup = new invader(this.physics.world, this);
        this.meteorumGroup = new meteorum(this.physics.world, this);
        this.bulletsGroup = new bullet(this.physics.world, this);
        // this.powerupGroup = new powerUp(this.physics.world, this);


        // COLISIONES ENTRE SPRITES       
        let coli = this.physics.add.overlap(this.player, [this.invaderGroup, this.meteorumGroup, this.powerupGroup], this.hitPlayer, null, this);
        this.physics.add.collider(this.bulletsGroup, [this.invaderGroup, this.meteorumGroup], this.hitEnemies, null, this);
        this.physics.add.collider(this.bulletsGroup,  this.powerupGroup, this.hitPowerup, null, this);



///

// Pausa para más adelante // TESTING
// let pause = false;
// this.input.on("pointerdown", () => {
//     if(!pause) {
//             // setTimeout( _ => Firstscene.loop.sleep(), 50);
//             // pause = true;
//             Firstscene.sleep( Firstscene);
//         }
//         else {
//             Firstscene.loop.wake();
//             pause = false;
//         }
//        })



    }

    update(time, delta) {




        //  ENEMIES RESPAWN
        if (time > this.respawnInterval && this.respawn == 0) {
            this.respawn = Math.trunc(time);
        }


        if (time > this.respawn) {

            // // POWER UP
            // if (this.enemiesGlobalCounter % 15 == 0 && this.enemiesGlobalCounter != 0) {
            //     this.powerupGroup.newItem();
            // }

            if (this.enemiesGlobalCounter % 5 == 0 && this.enemiesGlobalCounter != 0) {

                if (this.respawnInterval > 600) {
                    this.respawnInterval -= 100;
                }

                this.addEnemy(0);
            }
            else {
                this.addEnemy(1);
            }
            this.respawn += this.respawnInterval;    

        }

        // CONTROLES
        if (this.input.keyboard.checkDown(this.cursors.space, 250)) {
            this.bulletsGroup.newItem();
            this.laserSound.play({volume: 0.07});

                // console.log("pium pium")¨

        }
        else if (this.cursors.left.isDown || this.input.keyboard.checkDown(this.keyA)) {
            this.player.setVelocityX(-360)
            //cargar proximo sprite
                .anims.play("left", false);
        }
        else if (this.cursors.right.isDown || this.input.keyboard.checkDown(this.keyD)) {
            this.player.setVelocityX(360)
            this.player.anims.play("right", false); 
            this.player.anims.play("right2", false);    //cargar proximo sprite

        }
        else {
            this.player.setVelocityX(0)
                .anims.play("top");
        }

        // // //pausa TESTING
        // if (this.input.keyboard.checkDown(this.keyPause)) {
        //         console.log("pausita");
        //  }



    }


    // FUNCIONES


    hitPlayer(player, enemy) {

        if (!this.invincible) {
            this.invincible = true;
            this.lifesCounter--;
            this.lifesText.setText("X " + this.lifesCounter);
            enemy.destroy();

            // Audios

            this.playerExplosionSound.play({volume: 0.17});


            // Animacion
            this.explosion.setX(enemy.x).setY(enemy.y).setVisible(true);
            this.explosion.anims.play("explosion",true);

            // cambia el color del jugador
            player.setTint(0xbc1a3a);

            //    // TITILAR, TESTING
            // this.tweens.add({
            //     targets: this.player,
            //     alpha: 0.1,
            //     yoyo: true,
            //     repeat: 1,
            //     ease: "Sine.easeInOut",
            //     duration: 350

            // });

            this.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.invincible = false;
                    player.clearTint();

                }


            });

            if (this.lifesCounter < 0) {
                
                this.invaderGroup.clear(true, true); // clear( [removeFromScene] [, destroyChild])
                this.meteorumGroup.clear(true, true);
                this.bulletsGroup.clear(true, true);
                localStorage.setItem("this.score", JSON.stringify(this.score));
                
                //IMPRIMO EL SCORE
                console.log(this.score);

                // this.scene.restart();
                this.scene.start("intro");
                // this.scene.start("Score");


            }

        }
    }



    hitEnemies(bullet, enemy) {
        bullet.setVisible(false);
        bullet.setActive(false);
        bullet.destroy();

        enemy.hitsToKill--;

        if (enemy.hitsToKill == 0) {
            enemy.destroy();

            //AUDIO 
            this.enemySound.play({volume: 0.08});


            //ANIMACION
            // ESTE ES EL QUE SIRVE
            this.explosion.setX(enemy.x).setY(enemy.y).setVisible(true);
            this.explosion.anims.play("explosion");
            this.explosion.setVisible(true);


            this.score += 100;
            ////
            this.scoreText.setText("SCORE: " + this.score);
            if (this.score % this.newLife == 0) {
                this.lifesCounter++;

                //AUDIO
                this.lifeUpSound.play({volume: 0.08});


                this.lifesText.setText("X " + this.lifesCounter);
            }
        }
    }


    // POWER UP TESTING
    // hitPowerup(bullet, dualShot){
    //     this.hitEnemies(bullet,DualShot);
    //     this.powerupCounter = 30;
    // }



    addEnemy(type) {
        this.enemiesGlobalCounter++;

        switch (type) {
            case 0:
                this.meteorumGroup.newItem();
                break;
            default:
                this.invaderGroup.newItem();
        }

        
    }


}

export default firstScene;


