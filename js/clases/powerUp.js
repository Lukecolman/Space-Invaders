export default class powerUp extends Phaser.Physics.Arcade.Group {
    constructor(physicsWorld, scene) {
        super(physicsWorld, scene);
    
    }

    newItem(){
        this.create(
                    Phaser.Math.Between(0, this.scene.scale.width), 20, 'powerup')
                    .setCollideWorldBounds(false)
                    .setActive(true)
                    .setVisible(true)
                    .setGravityY(0)
                    .setDepth(2)
                    .setCircle(0)
                    .setBounce(0, 0)
                    .setVelocityX((Phaser.Math.Between(0, 0) ? 0 : 0))
                    .hitsToKill = 1;
    }

    // preUpdate (time, delta)
    // {
    //     super.preUpdate(time, delta);
    // }

}