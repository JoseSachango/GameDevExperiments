//var Phaser = require("phaser") -> we used a cdn to connect the phaser library to our project, so we don't need to require anything here

// create a new scene
let gameScene = new Phaser.Scene("Game"); //-> gameScene is just a javascript object

//load assets
gameScene.preload = function(){
    this.load.image("background","assets/background.png")  //*this.* refers to the gameScene object
    this.load.image("player","assets/player.png")
    this.load.image("bullet","assets/bullet2.png")
};

// called once after preload ends
gameScene.create = function(){
    // create bg sprite

    bg = this.add.sprite(0,0,"background")
    bg.setPosition(320,180)
    //bg.setOrigin(0,0)

    this.player = this.physics.add.sprite(50,180,"player",0)// placing player in the scene context so you can access it from different methods
    this.player2 = this.physics.add.sprite(300,180,"player",0)
    //this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
    //this.bullet.visible = false
    // this.player = this.add.sprite(50,this.sys.game.config.height / 2,"player")// -> uses the game configurations height property to access instead of manually entering one

    console.log("This is the *this.player* object: ")
    console.log(this.player)


    this.player.angle = 180

    //players current angle
    console.log("This is the players current angle: ")
    console.log(this.player2.angle)

    this.cursors = this.input.keyboard.createCursorKeys();

    console.log("This is the *this.cursors* object: ")
    console.log(this.cursors)
    //player.setAngle(45);
    //player.rotation = Math.PI/4;
    //player.setRotation(Math.PI/4);

    console.log("This is the *this.cursors.space* object: ")
    console.log(this.cursors.space);

    this.player.body.setCollideWorldBounds(true);
    this.player2.body.setCollideWorldBounds(true);

    this.physics.add.collider(this.player,this.player2)

    this.player.body.bounce.set(1)
    this.player2.body.bounce.set(1)

    console.log("Logging this.player: ")
    console.log(this.player)

    this.velocity = 60

    this.acceleration = 60

    this.count = 0

    this.downFlag = false;


}


gameScene.update = function(){
    /*
    this.player.x += .1;
    this.player2.x += -.1;
    */

   // this.player.setVelocityX(0)
   //  this.player2.setVelocityX(0)


    

    //console.log("This is the current value of the downFlag: ")
    //console.log(downFlag)
   

    //this.player.angle += 1;
    if(this.input.activePointer.isDown){

        /*
        if(this.velocity<70){

            this.velocity += 1
        }*/


       

        /*
        console.log("This is the current velocity: ");
        console.log(this.velocity)*/

        
        
        /*
        this.player.setVelocityX(this.velocity)
        this.player.setVelocityY(this.velocity)*/


      


        //this.player.setAccelerationX(-20)
        //this.player.velocityFromAngle(this.player.angle,100,this.player.velocity)
        //this.player.x += 1
        //this.player.angle += 1

        /*
        if(this.player.x = 1){
            return;
        }*/
         

       
    }

    if(this.cursors.space.isDown){

       //if the space bar is down for longer than 2 seconds start spinning else fire bullet
       

        //start rotating
        //if count greater than __ change the angle and then reset the count
        this.count += 1

        console.log("This is the current value of this.count: ")
        console.log(this.count)

        if(this.count > 12){
            this.player.angle += 2

            
        }
        
        

        
        console.log("this.cursors.space: ")
        console.log(this.cursors.space)

        

         //this.player.setAccelerationX(20) 


        this.downFlag = true
    }else{

       

        if(this.downFlag){

            //reset this.count
            this.count = 0
            //if the spacebar is clicked once fire bullets
            // the durations of 1 click is approximately 133 miliseconds
            if(this.cursors.space.duration<135){
                this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                this.bullet.angle = this.player.angle
                this.physics.add.collider(this.bullet,this.player2)

                this.bullet.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*500)
                this.bullet.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*500)

            }

            console.log("This is the x coordinate of the player after the button is clicked: ")
            console.log(this.player.x)

            console.log("This is the y coordinate of the player after the button is clicked: ")
            console.log(this.player.y)
            
            
            //check how long the spacebar was held down
            console.log("This is how long the spacebar was held down: ")
            console.log(this.cursors.space.duration)
            
            //players current angle
            console.log("This is the players current angle when key is up: ")
            console.log(this.player.angle)

            
            if(this.velocity<80){

                this.velocity += 1
            }

            /*
            if(this.acceleration<70){

                this.acceleration += 1
            }*/

            
            console.log("This is the current velocity: ");
            console.log(this.velocity)

            /*
            console.log("This is the current acceleration: ");
            console.log(this.acceleration)*/

            //this.player.setVelocityX(Math.cos(((Math.PI/180)*this.player.angle)*500))
          //  this.player.setVelocityX(this.velocity)
          //  this.player.setVelocityY(-this.velocity)
            //this.player.setVelocityY(Math.sin(((Math.PI/180)*this.player.angle)*500))

            console.log("This is is the angle the player is facing in radians: ")
            console.log((Math.PI/180)*this.player.angle)

            console.log("This is is Pi: ")
            console.log(Math.PI)

            console.log("This is cosine of the angle in radians: ")
            console.log(Math.cos((Math.PI/180)*this.player.angle))


            console.log("This is the x component of the velocity vector: ")
            console.log(Math.cos((Math.PI/180)*this.player.angle)*60)

            console.log("This is the y component of the velocity vector: ")
            console.log(Math.sin((Math.PI/180)*this.player.angle)*60)

            
            this.player.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*60)
            this.player.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*60)

            /*
            this.player.setAccelerationX(Math.cos((Math.PI/180)*this.player.angle)*60)
            this.player.setAccelerationY(Math.sin((Math.PI/180)*this.player.angle)*60)*/

            //change the velocity or acceleration a little


            //Release a spiral explosion that expands outward and appear somewhere else on the map randomly

            
            this.downFlag = false;
        }

    }



    //overlap check
    /*
    let playerRect = this.player.getBounds();
    let enemyRect = this.enemy.getBounds();

    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect,enemyRect)){

        //restart the scene
        this.scene.restart();
        return; //return so we exit the method if more code is added below

    }
    */


};


//game configuration
var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y:0
            }
        }
    }
};


//create a new game, pass the configuration (config)
var game = new Phaser.Game(config);


