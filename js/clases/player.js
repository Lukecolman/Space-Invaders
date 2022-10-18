export default class player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite); 
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);

        this.init();
        this.animatePlayer();
    
    }

    // preUpdate (time, delta)
    // {
    //     super.preUpdate(time, delta);

    // }

    init(){
        this
        .setBounce(0)
        .setCollideWorldBounds(true)
        .setGravityY(0)
        .setScale(2)
        .setDepth(2)
        .body.setSize(25,30,25,0); // mascara personalizada => setSize(width, height, XinSprite, YinSprite)
    }

//animaciones del jugador


    animatePlayer() {
        this.anims.create({
            key: 'left',
            // frames: this.anims.generateFrameNumbers('spaceShip', { start: 0, end: 1 }),
            // frameRate: 0,
            frames: [{ key: 'spaceShip', frame: 1 }],

            repeat: -1
        });

        this.anims.create({
            key: 'top',
            frames: [{ key: 'spaceShip', frame: 2 }],
            frameRate: 20,
        });

        this.anims.create({
            key: 'right',
            // frames: this.anims.generateFrameNumbers('spaceShip', { start: 3, end: 4 }),
            frames: [{ key: 'spaceShip', frame: 3 }],
            repeat: -1,
            // delay: 1.1
        });


    }
}