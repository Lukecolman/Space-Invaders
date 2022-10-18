export default class invader extends Phaser.Physics.Arcade.Group {
    constructor(physicsWorld, scene) {
        super(physicsWorld, scene);
       

      
    }

    newItem(){
        this.create(
                    Phaser.Math.Between(3, this.scene.scale.width-100), 20, 'invader')
                    .setActive(true)
                    .setVisible(true)
                    .setScale(2.3)
                    .setGravityY(0)
                    .setDepth(2)
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

