

class scene2 extends Phaser.Scene {
    constructor(){
        super("playGame");

    }

    preload(){
        this.load.image("naveRosa", "../assets/ship3.png")

        this.load.image("nave", "../assets/ship2.png")


        
    }

    create() {
        this.add.text(20, 20, "puerco dasdasdasd", {fill: "yellow"});
        // this.scene.start("playGame")
        this.naveRosa = this.add.image(config.width/2, config.height/2, "naveRosa");
        this.naveRosa.flipY = true;
        this.naveRosa.setScale(3);


        this.add.text(20, 20, "aca jugando", {font: "25px Arial", fill:"yellow"});
        
        obj_player = this.add.image( 400, 400, "nave").setOrigin(0.5, 1);
        console.log("LA CONCHA DE TU MADRE")

    };

    update() {


}

};




