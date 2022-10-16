export default class invader extends Phaser.Physics.Arcade.Group {
    constructor(physicsWorld, scene) {
        super(physicsWorld, scene);
       

      
    }

    newItem(){
        this.create(
                    Phaser.Math.Between(3, this.scene.scale.width-100), 20, 'invader')
                    .setActive(true)
                    .setVisible(true)
                    .setScale(3)
                    .setGravityY(0)
                    // .setCollideWorldBounds(true)
                    .setDepth(2)
                    // .setCircle(15)
                    .setBounce(0, 0)
                    .setVelocityY((Phaser.Math.Between(0, 0) ? 0 : 280))
                    .setSize(25,30,1,1) // custom mask => setSize(width, height, XinSprite, YinSprite)
                    .hitsToKill = 1;



    }

    // preUpdate (time, delta)
    // {
    //     super.preUpdate(time, delta);
    // }



}


    // addEnemy() {
    //     const bounds = this.physics.world.bounds;
    //     const posX = Phaser.Math.Between (bounds.x, bounds.x + bounds.width);
    //     const enemy = this.physics.add.sprite(posX, bounds.y - 320, "invader");
    //     invader.add(enemy);
    //     this.physics.add.existing(enemy);
    //     enemy.depth = 1;
    //     enemy.body.debugBodyColor = 0xFFFF00,
    
    
    //     // tamaño de enemigo
    //     enemy.setScale(3);
    //     enemy.setActive(true);
    //     //movimiento de enemigos
    //     enemy.body.velocity.y= 250;
    
    //     // tween X
    //     enemy.body.velocity.x = -50;
    //     const tween = this.tweens.add({
    //         targets: enemy.body.velocity,
    //         x: 50,
    //         duration: 500,
    //         ease: "Cubic.easeInOut",
    //         repeat: -1,
    //         yoyo: true,
    //     })
    //     enemy.tween = tween;
    
    //     // respawn de enemigos
    //     this.time.addEvent({
    //         callback: () => this.addEnemy(),
    //         delay: 1300
    //     });
    
    // }