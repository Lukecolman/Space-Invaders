export default class bullet extends Phaser.Physics.Arcade.Group {
    constructor(physicsWorld, scene) {
        super(physicsWorld, scene);

        this.scene = scene;
    }

    newItem(x = 0  , y = 50) {
        var item = this.create(this.scene.player.x + x, this.scene.player.y - y, 'bullet')
            .setActive(true)
            .setVisible(true)
            .setScale(0.5)

            .setDepth(2);
        item.body.velocity.y = -200;
        item.outOfBoundsKill = true;
    }


    newDoubleItem() {

        this.newItem(30,30);
        this.newItem(7,30);

    }



    // preUpdate (time, delta)
    // {
    //     super.preUpdate(time, delta);
    // }

}