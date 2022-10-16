import meteorum from "../clases/meteorum.js";
import player from "../clases/player.js";
import invader from "../clases/invader.js";
import bullet from "../clases/bullet.js";
import powerUp from "../clases/powerUp.js";

let coli;
class firstScene extends Phaser.Scene {

    constructor() {
        super('firstScene');
    }

    init() {
        console.log("First Scene");
        //this.scene.launch('Intro');
        this.respawn = 0;
        this.respawnInterval = 1500;
        this.scoreText = "";
        this.score = 0;
        this.lifesCounter = 3;
        this.lifesText = "";
        this.newLife = 2000; // Nueva Vida cada X puntuación
        this.enemiesGlobalCounter = 0;
        this.invincible = false;
        // this.ammo = 0;
        // this.ammoText = "";
        this.powerupCounter = 0;

    }


    preload() {

        this.load.path = './assets/';

        // LOAD IMAGES AND SPRITES
        this.load.image('background', '../../assets/backgrounds/background.png-')
            .image("bullet", "../../assets/sprites/laser.png")
            .image("invader", "../../assets/sprites/ship3.png") //enemigo verde
            // .image("meteorum", "sprites/meteorum.png") //enemigo amarillo
            .image('life', "../../assets/sprites/life.png")
            .image('soap', '../../assets/sprites/soap.png')
            .image('reload', '../../assets/sprites/reload.png')
            .image('powerup', '../../assets/sprites/powerup.png')
            .image('spaceShip', '../../assets/sprites/greenGoblin.png',
                { frameWidth: 60, frameHeight: 66 }
            );

        // // LOAD AUDIOS
        // this.load.audio('pop', ['sounds/pop.wav'])
        //     .audio('shot', ['sounds/shot.wav'])
        //     .audio('killed', ['sounds/killed.wav'])
        //     .audio('rebound', ['sounds/rebound.wav'])
        //     .audio('bgmusic', ['sounds/bgmusic.mp3']);


    }

    
    create() {

        // TEXTS
        this.scoreText = this.add.text(this.sys.game.canvas.width / 2 - 65, 10, 'SCORE: ' + this.score, { fontSize: '19px', fontFamily: "upheaval_tt_brkregular", fill: 'white' });
        this.scoreText.setDepth(1);
        this.lifesText = this.add.text(50, 10, 'X ' + this.lifesCounter, {align: 'right', fontSize: '24px', fontFamily: "upheaval_tt_brkregular", fill: 'white' });
        this.lifesText.setDepth(1);
        // this.ammoText = this.add.text(this.sys.game.canvas.width - 150, 10, 'AMMO: ' + this.ammo, { fontStyle: 'strong', align: 'right', font: '24px Arial', fill: 'beige' });
        // this.ammoText.setDepth(1);


        // // CREATE AUDIOS
        // this.popSound = this.sound.add('pop');
        // this.shotSound = this.sound.add('shot');
        // this.killedSound = this.sound.add('killed');
        // this.reboundSound = this.sound.add('rebound');

        // // BACKGROUND MUSIC
        // this.backgroundMusic = this.sound.add('bgmusic');
        // this.backgroundMusic.loop = true;
        // this.backgroundMusic.play();

        // CONTROLES
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyPause = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);


        // CREATE SPRITES
        this.background = this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, 'background');
        this.lifeSprite = this.add.image(30, 18, 'life').setDepth(1);
        // this.soapImage = this.physics.add.image(40, this.sys.game.canvas.height - 30, 'soap').setActive(true).setDepth(1).setVisible(false);
        // this.reloadImage = this.add.image(50, this.sys.game.canvas.height - 80, 'reload');
        // this.reloadImage.setVisible(false);

        // PLAYER
        this.player = new player(this, this.sys.game.canvas.width / 2, this.sys.game.canvas.height - 80, 'spaceShip');


        // GROUPS
        this.invaderGroup = new invader(this.physics.world, this);
        this.meteorumGroup = new meteorum(this.physics.world, this);
        this.bulletsGroup = new bullet(this.physics.world, this);
        this.powerupGroup = new powerUp(this.physics.world, this);


        // ADD COLIDERS BETWEEN SPRITES        
        let coli = this.physics.add.overlap(this.player, [this.invaderGroup, this.meteorumGroup, this.powerupGroup], this.hitPlayer, null, this);
        this.physics.add.collider(this.bulletsGroup, [this.invaderGroup, this.meteorumGroup], this.hitEnemies, null, this);
        this.physics.add.collider(this.bulletsGroup,  this.powerupGroup, this.hitPowerup, null, this);
        // this.physics.add.overlap(this.player, this.soapImage, this.reloadAmmo, null, this);


///

// Pausa para más adelante
// let pause = false;
// this.input.on('pointerdown', () => {
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




        //  ENEMIES RESPAWN CONTROL AFTER GAME OVER
        if (time > this.respawnInterval && this.respawn == 0) {
            this.respawn = Math.trunc(time);
        }


        if (time > this.respawn) {

            // // POWERUP
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
            // this.player.setVelocity(0, 0)
                // .anims.play('turn');
                this.bulletsGroup.newItem();
                // console.log("pium pium")


        }
        else if (this.cursors.left.isDown || this.input.keyboard.checkDown(this.keyA)) {
            this.player.setVelocityX(-160)
            //cargar proximo sprite
                // .anims.play('left', true);
        }
        else if (this.cursors.right.isDown || this.input.keyboard.checkDown(this.keyD)) {
            this.player.setVelocityX(160)
            //cargar proximo sprite

                // .anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0)
                .anims.play('turn');
        }

        // // //pausa
        // if (this.input.keyboard.checkDown(this.keyPause)) {
        //         console.log("pausita");
        //  }



    }


    // CUSTOM FUNCTIONS


    // reloadAmmo() {

    //     if (this.ammo === 0) {
    //         this.ammo = 30;
    //         var randomX = Phaser.Math.Between(40, this.sys.game.canvas.width - 50);
    //         this.reloadImage.setX(randomX).setActive(false).setVisible(false);
    //         this.soapImage.setX(randomX).setActive(false).setVisible(false);
    //         this.ammoText.setText('AMMO: ' + this.ammo);
    //     }

    // }

    hitPlayer(player, enemy) {

        if (!this.invincible) {
            this.invincible = true;
            // this.killedSound.play();
            this.lifesCounter--;
            this.lifesText.setText('X ' + this.lifesCounter);
            enemy.destroy();
            // cambia el color del jugador
            player.setTint(0x1abc9c);

            
            this.tweens.add({
                targets: this.player,
                alpha: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'Sine.easeInOut',
                duration: 350

            });

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
                localStorage.setItem('this.score', JSON.stringify(this.score));
                
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
            // this.popSound.play();
            this.score += 100;
            //////


            //
            this.scoreText.setText('SCORE: ' + this.score);
            if (this.score % this.newLife == 0) {
                this.lifesCounter++;
                this.lifesText.setText('X ' + this.lifesCounter);
            }
        }
    }

    // hitPowerup(bullet, bubble){
    //     this.hitEnemies(bullet,bubble);
    //     this.powerupCounter = 10;
    // }



    addEnemy(type) {
        // this.reboundSound.play();
        this.enemiesGlobalCounter++;

        switch (type) {
            case 0:
                this.meteorumGroup.newItem();
                break;
            default:
                this.invaderGroup.newItem();
        }

        
    }





    // fire() {
    //     if (this.ammo !== 1 && this.powerupCounter === 0) {
    //         this.bulletsGroup.newItem();
    //         // this.shotSound.play();
    //         // this.ammo--;
    //         // this.ammoText.setText('AMMO: ' + this.ammo);
    //     }

    //     if (this.ammo == 0 && this.powerupCounter === 0) {
    //         this.reloadImage.setVisible(true).setActive(true);
    //         this.soapImage.setVisible(true).setActive(true);
    //     }

    //     if (this.powerupCounter > 0){
    //         this.bulletsGroup.newDoubleItem();
    //         this.shotSound.play();
    //         this.powerupCounter--;
    //     }


    // }


}

export default firstScene;


