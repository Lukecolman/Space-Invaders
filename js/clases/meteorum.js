export default class meteorum extends Phaser.Physics.Arcade.Group {
    constructor(physicsWorld, scene) {
        super(physicsWorld, scene);
    

    
    }

    newItem(){
        this.create(
                    Phaser.Math.Between(0, this.scene.scale.width - 100), -200, 'meteorum')
                    .setActive(true)
                    .setVisible(true)
                    .setGravityY(0)
                    .setCollideWorldBounds(false)
                    .setDepth(2)
                    .setScale(2)
                    .setBounce(0, 0)
                    .setCircle(9,8,17,1)
                    .setVelocityY((Phaser.Math.Between(0, 0) ? 0 : 380))
                    .setAngle((-45))
                    .hitsToKill = 1;
                    
    }

    // preUpdate (time, delta)
    // {
    //     super.preUpdate(time, delta);
    // }

}