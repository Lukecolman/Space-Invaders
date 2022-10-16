let coso;

class scene11 extends Phaser.Scene {
    constructor(){
        super("selectScreen");

    }
    

    preload(){
        this.load.image("naveRosa", "../assets/ship3.png")
        this.load.image("bullet", "../assets/laser.png")
        this.load.image("nave", "../assets/ship2.png")
        this.load.image("greenGoblin", "../assets/greenGoblin.png")
        this.load.image("explosion", "../assets/colors.png")



        
    }
 

    create() {
        //grupo de fisicas
        player = this.physics.add.group({ CollideWorldBounds: true });
        enemies = this.physics.add.group({ CollideWorldBounds: true });
        playerShots = this.physics.add.group({ CollideWorldBounds: true });
        // this.scene.start("playGame")
        // this.add.text(20, 20, "puerco dasdasdasd", {fill: "yellow"});

        //colisiones


        

        ////////////////////
        this.naveRosa = this.physics.add.sprite(config.width/2, config.height/2, "naveRosa");
        this.naveRosa.flipY = true;
        this.naveRosa.setScale(3);
        this.naveRosa.setCollideWorldBounds(true);
    
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
            
            'greenGoblin', // key of image for the sprite
            
        );
        this.player.setBounce(0.1); // our player will bounce from items
        this.player.setCollideWorldBounds(true); // don't go out of the map
        this.player.displayWidth = 100;
        this.player.scaleY = this.player.scaleX;
        this.player.body.onWorldBounds = true;
        this.player.depth = 1;
        this.player.body.debugBodyColor = 0x50FFFF;
        this.player.setCircle(50, 0 - 25, 0-25);
        // this.player.setBounce(1, 1)


//////////////
//LASERRR
////////////////////////////////////
// this.bullets = this.physics.add.group({
//     defaultKey: 'bullet',
//     maxSize: 1,
//     onWorldBounds: true,
//     depth: 1,

// });

////////////////////////////////////////
// enemies
// this.enemies = this.physics.add.group({
//     defaultKey: 'enemies',
//     depth: 1,

// });            
this.spawnEnemy();

///////////////////////////////////

/////////////////////////////////
// CONTROLES

        //createCursorKeys es basicamene el addEventListener pero en phaser, lo que me permite asignar teclas
        // si no vuelvo a defirnirlo con el this adelante no me permite llamarlo luego
        cursors = this.input.keyboard.createCursorKeys();
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // // addKey para asignar teclas especificas (A - D)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        // keyShoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

   





        // var text = this.add.text(10, 10, 'Clicks: 5', { font: '16px Courier', fill: '#00ff00' });

        // var i = 5;
    
        // this.input.on('pointerdown', function ClickNuke () {
        
        //     i--;
    
        //     text.setText('Clicks: ' + i);
    
        //     if (i === 0)
        //     {
        //         enemies.kill();
    
        //         this.input.off('pointerdown', ClickNuke);
        //     }
        //     else
        //     {
        //     }
        
        // }, this);


            // ADD COLIDERS BETWEEN SPRITES
            // this.physics.add.overlap(
            //     this.player,
            //     [this.enemies, this.bullets],
            //     this.hitPlayer,
            //     null,
            //     this
            //   );
            //   this.physics.add.collider(
            //     this.bulletsGroup,
            //     [this.enemies, this.bullets],
            //     this.hitEnemies,
            //     null,
            //     this
            //   );

    };

    hitPlayer(player, enemy) {
        this.scene.pause();
    }
    
    hitEnemy(bullets, enemy) {
        console.log("semamo")

        enemy.kill();
        bullet.kill();
        bullet.setVisible(false);
        bullet.setActive(false);

    }


    fire(object) {
        var bullet = this.bullets.get(object.x, object.y-60);
        if (bullet) {
        
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.body.velocity.y = -600;
            bullet.setScale(0.5)
            bullet.depth = 1;
            bullet.body.onWorldBounds = true;
            bullet.setCollideWorldBounds = true;
            // console.log("tiraco")
            bullet.body.debugBodyColor = 0xFFFF00;

            }
        this.physics.add.existing(bullet);

        // playerShots.add(fire);
        // bullet.body.world.on('worldbounds', function(body) {
        //     // Check if the body's game object is the sprite you are listening for
        //     if (body.gameObject === this) {
        //     // Stop physics and render updates for this object
        //     this.setActive(false);
        //     this.setVisible(false);
            
        //     }
        // }, bullet);
    }


spawnExplosion(x, y){
    x = Math.floor(x);
    y = Math.floor(y);

    const exp = this.add.sprite(x, y, "explosion");
    exp.depth = 1;
    exp.play("explosion")

}

spawnEnemy() {
    const bounds = this.physics.world.bounds;
    const posX = Phaser.Math.Between (bounds.x, bounds.x + bounds.width);
    const enemy = this.physics.add.sprite(posX, bounds.y - 320, "naveRosa");
    enemies.add(enemy);
    this.physics.add.existing(enemy);
    enemy.depth = 1;
    enemy.body.debugBodyColor = 0xFFFF00,


    // tamaño de enemigo
    enemy.setScale(3);
    enemy.setActive(true);
    //movimiento de enemigos
    enemy.body.velocity.y= 250;

    // tween X
    enemy.body.velocity.x = -50;
    const tween = this.tweens.add({
        targets: enemy.body.velocity,
        x: 50,
        duration: 500,
        ease: "Cubic.easeInOut",
        repeat: -1,
        yoyo: true,
    })
    enemy.tween = tween;

    // respawn de enemigos
    this.time.addEvent({
        callback: () => this.spawnEnemy(),
        delay: 1300
    });

}

onShotEnemyCollide(space, enemy){
    this.spawnExplosion(enemy.x, enemy.y);
    space.kill();
    enemy.kill();
}




    update(time, delta) {



        this.bullets = this.physics.add.group({
            defaultKey: 'bullet',
            // maxSize: 10
            onWorldBounds: true,
        })
        if(startGame = true){
        // this.physics.add.overlap(this.player, [this.virusGroup, this.bacteriumGroup, this.powerupGroup], this.hitPlayer, null, this);

            this.physics.add.collider(this.bullets, [this.enemy, this.player], this.hitEnemy, null, this);
            // this.physics.add.collider(this.bullets, this.enemies);
            this.physics.add.collider(this.bullet, this.enemies, this.hitEnemy, null, this);
            console.log("por favor diosito")
        }
        
        player = this.physics.add.group({ CollideWorldBounds: true });
        enemies = this.physics.add.group({ CollideWorldBounds: true });
        playerShots = this.physics.add.group({ CollideWorldBounds: true });
        this.physics.add.collider(player, this.enemies, this.hitPlayer);

        // this.addEvents();
        //movimiento
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


        if(this.input.keyboard.checkDown(this.cursors.space,250)){
            // this.player.setVelocity(0, 0);
            this.fire(this.player);
        }
        

        

        
// aparecen enemigos


//bot para mover el personaje - testing
// if(this.player.x > config.width - 100 ) {
//     cursors.left.isDown = keyA;
//     }
// if (this.player.x < config.width - 100) {
//     cursors.right.isDown = keyD;
// };


    }

    // config.width/2, // x position
    // config.width/1.06,


    hitPlayer(player, enemy) {
        this.scene.pause();
    }
    
    hitEnemy(bullet, enemy) {
        enemy.kill();
        bullet.kill();
        bullet.setVisible(false);
        bullet.setActive(false);
    }

    killBot(bullet){
        bullet.kill();
    }
    killBot(bullets){
        bullets.kill();
    }

    kill()
    {
        this.setActive(false);
        this.setVisible(false);
        this.body.stop();
        this.scene.launchEnemy();
    }


}




