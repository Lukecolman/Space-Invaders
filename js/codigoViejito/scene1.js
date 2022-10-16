class Bullet extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene, x, y)
    {
        super(scene, x, y, 'bullet');
    }

    fire (x, y)
    {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocityY(-300);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.y <= -32)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (scene)
    {
        super(scene.physics.world, scene);
        this.bullets;
        this.nave;
        this.createMultiple({
            frameQuantity: 5,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        });
    }

    fireBullet (x, y)
    {
        let bullet = this.getFirstDead(false);

        if (bullet)
        {
            bullet.fire(x, y);
        }
    }
}

// class LaserGroup extends Phaser.Physics.Arcade.Group
// {
// 	constructor(scene) {
// 		// Call the super constructor, passing in a world and a scene
// 		super(scene.physics.world, scene);
// 		this.laserGroup;
// 		// Initialize the group
// 		this.createMultiple({
// 			classType: Laser, // This is the class we create just below
// 			frameQuantity: 30, // Create 30 instances in the pool
// 			active: false,
// 			visible: false,
// 			key: 'laser'
// 		})
// 	}

// }

// class Laser extends Phaser.Physics.Arcade.Sprite {
// 	constructor(scene, x, y) {
// 		super(scene, x, y, 'laser');
// 	}
// }



class scene1 extends Phaser.Scene {
    constructor(){
        super("selectScreen");

    }

    preload(){
        this.load.image("naveRosa", "../assets/ship3.png")
        this.load.image("bullet", "../assets/laser.png")
        this.load.image("nave", "../assets/ship2.png")


        
    }



    create() {


        // this.scene.start("playGame")
        // this.add.text(20, 20, "puerco dasdasdasd", {fill: "yellow"});

        this.naveRosa = this.add.image(config.width/2, config.height/2, "naveRosa");
        this.naveRosa.flipY = true;
        this.naveRosa.setScale(3);
    

        this.add.text(20, 20, "aca jugando", {font: "25px Arial", fill:"yellow"});
        // player = this.add.image( 400, 400, "nave").setOrigin(0.5, 1);        
        // player = this.physics.add.sprite(
        //     config.width/2, // x position
        //     config.width/1.06, // y position
            
        //     'nave', // key of image for the sprite
            
        // );
        // player.displayWidth = 100;
        // player.scaleY = player.scaleX;
        // player.flipY = true;

        this.player = this.physics.add.sprite(
              config.width/2, // x position
            config.width/1.06, // y position
            
            'nave', // key of image for the sprite
            
        );
        this.player.setBounce(0.1); // our player will bounce from items
        this.player.setCollideWorldBounds(true); // don't go out of the map
        this.player.displayWidth = 100;
        this.player.scaleY = this.player.scaleX;

//////////////
//LASERRR
////////////////////////////////////

var Bullet = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Bullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');

        this.speed = Phaser.Math.GetSpeed(400, 1);
    },

    fire: function (x, y)
    {
        this.setPosition(x, y - 50);

        this.setActive(true);
        this.setVisible(true);
    },

    update: function (time, delta)
    {
        this.y -= this.speed * delta;

        if (this.y < -50)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }

});

////////////////////////////////////////
///////////////////////////////////

this.bullets = new Bullets(this);

this.input.on('pointerdown', (pointer) => {

    this.bullets.fireBullet(this.nave.y);

});





/////////////////////////////////

// for (var i = 0; i < 20; i++)
// {
//     var b = bullets.create(0, 0, 'bullet');
//     b.name = 'bullet' + i;
//     b.exists = false;
//     b.visible = false;
//     b.checkWorldBounds = true;
//     b.events.onOutOfBounds.add(resetBullet, this);
// }


        //createCursorKeys es basicamene el addEventListener pero en phaser, lo que me permite asignar teclas
        cursors = this.input.keyboard.createCursorKeys();
        // addKey para asignar teclas especificas (A - D)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        keyShoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)


        // this.laserGroup = new LaserGroup(this);


            /////////////////////
            ///////////////////////


    };

    addEvents(){
        // ...
        if(keyShoot.isDown) {
        console.log ("piumba") 
        }else {
        }


        
        

    //     this.input.on('space', pointer => {
    //         // this.shootLaser();
    //         console.log("pium pium")
    //     });
    // }
    // shootLaser() {
    //     this.laserGroup.fireLaser(this.nave.x, this.nave.y - 20);
    }
    



    update() {
        this.addEvents();
        //movimiento
        //Permito que al presionar la tecla especifica se reste o sume "velocity" del objeto Player y si no se presiona ninguna tecla la velocidad sea 0
        if(cursors.left.isDown || keyA.isDown) {
            this.player.body.setVelocityX(-420);
            // player.anims.play('left', true);
        } else if(cursors.right.isDown || keyD.isDown){
            this.player.body.setVelocityX(420);
            // player.anims.play('right', true);
        } else {
            this.player.body.setVelocityX(0);
            // player.anims.play('turn');
        }
        if(cursors.up.isDown && player.body.touching.down){
            player.body.setVelocityY(-330);
        }

        // if (cursors.left.isDown) {
        //     player.body.setVelocityX(-350);
        //   } else if (cursors.right.isDown) {
        //     player.body.setVelocityX(350);
        //   }

        if (cursors.up.isDown && time > lastFired)
        {
            var bullet = bullets.get();
    
            if (bullet)
            {
                bullet.fire(nave.y);
    
                lastFired = time + 50;
            }
        }
    }

}










// let keya = {
//     a: {
//         pressed: false
//     },
//     d: {
//         pressed: false
//     }
// }

// function movePlayer() {
//     if (keya.a.pressed){
//         console.log("ESTO ANDA?")

//         // this.naveRosa.setVelocityX(-gameSettings.playerSpeed)
//     } 
//         // else if (keya.d.pressed && naveRosa.position.x <= canvas.width - naveRosa.width) {
//     //     naveRosa.velocity.x =  10
//     // }
//     else {
//         // this.naveRosa.velocity.x = 0
//         console.log("nimadres")
//     }
// }

// movePlayer()



// movement = addEventListener("keydown", ({key}) => {
//     // console.log(key + " test de movimento")
//     switch (key) {
//         case "a":
//         case "ArrowLeft":
//         case "A":        
//             keya.a.pressed = true;
//             console.log("funciona a");
//             break;
//         case "d":
//         case "ArrowRight":
//         case "D":
//             // console.log("funciona d");
//             keya.d.pressed = true;
//         break;
//     }
// })