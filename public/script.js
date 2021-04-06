//var Phaser = require("phaser") -> we used a cdn to connect the phaser library to our project, so we don't need to require anything here

//const API = require("./utils/API");

//import  {io}  from "socket.io-client";
//const {io}  = require("socket.io-client")

// create a new scene
let gameScene = new Phaser.Scene("Game"); //-> gameScene is just a javascript object
//game state object
let gameState = {}


gameScene.init = function(){
   
    gameState.socket = io()
    /*//A socket connection is established and a socket Id is made
    this.socket = this.sys.game.globals.socket


    //listen for the socketId to be returned from the server
    this.listForSocketEvents = function (){
        this.socket.on("new player has entered the game",function(socketId){
            console.log(`new player ${socketId} has joined`)
        })
        this.socket.on("newPlayer",function(){
            gameState.currentPlayer = this.physics.add.sprite(400,180,"player",0)
        })
    };;

    this.listForSocketEvents()
    //make and axios post request
    //gameState.currentPlayer =  this.physics.add.sprite(400,180,"player",0)*/

      //make and axios get request for all the other players that are active
      
}





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
   
        /*
      this.player2 = this.physics.add.sprite(430,340,"player",0)
      this.player2.body.setCollideWorldBounds(true);
      this.player2.body.bounce.set(1)
      this.player2.visible = false */

      gameState.socket.on("playerData", (message)=>{

        
        for(const i in message){
            console.log("This is message[i]: ",message[i].playerName)
            switch(message[i].playerName) {

                case "player 1":
                  this.player = this.physics.add.sprite(50,50,"player",0)// placing player in the scene context so you can access it from different methods
                  this.playerHealth = 100
                  this.player.visible = true
                    break;
                case "player 2":
                  this.player2 = this.physics.add.sprite(520,50,"player",0)// placing player in the scene context so you can access it from different methods
                  this.playerHealth2 = 100
                  this.player2.visible = true
                    break;
                case "player 3":
                  this.player3 = this.physics.add.sprite(50,330,"player",0)// placing player in the scene context so you can access it from different methods
                  this.playerHealth3 = 100
                  this.player3.visible = true
                    break;
                case "player 4":
                  this.player4 = this.physics.add.sprite(520,330,"player",0)// placing player in the scene context so you can access it from different methods
                  this.playerHealth4 = 100
                  this.player4.visible = true
                    break;
  
              default:
                  break;
            }

        }
      })
      
      gameState.socket.on("servermessage", (message)=>{
        //console.log("This is player data sent from there server: ", message)

        //this.player2 = this.physics.add.sprite(message.x,message.y,"player",0)

        /* ******************You Shouldn't create a new sprite every time the client recieves this "servermessage" you should only 
        create the player2 sprite once using some action */
        this.player2.visible = true



        //gameState.player2 =  this.physics.add.sprite(message.x,message.y,"player",0)
        //this.player2 = this.physics.add.sprite(message.x,message.y,"player",0)
        //this.player2.body.setCollideWorldBounds(true);
       
        gameState.angle = message.angle

        //this.player2.angle = message.angle
        //this.player2.x = message.x
        //this.player2.y = message.y
    } )

    /*
    gameState.socket.on("player rotation", (message)=>{
        
        this.player2.angle = message.angle
        //this.player2.setVelocityX(Math.cos((Math.PI/180)*message.angle)*this.velocity)
        //this.player2.setVelocityY(Math.cos((Math.PI/180)*message.angle)*this.velocity)

    }) */

    /*
    gameState.socket.on("player direction", (message)=>{
        console.log("This is the gameState.angle value: ", message)
        this.player2.setVelocityX(Math.cos((Math.PI/180)*message)*this.velocity)
        this.player2.setVelocityY(Math.sin((Math.PI/180)*message)*this.velocity)
    })*/

  
      //socket.emit("usermessage",playerData)
     /* socket.on("servermessage", (message)=>{
          console.log("This is player data sent from there server: ", message)

          //this.player2 = this.physics.add.sprite(message.x,message.y,"player",0)
         //this.player2.visible = true
          gameState.player2 =  this.physics.add.sprite(message.x,message.y,"player",0)
      } )*/


  

    //on connection make an axios post request to the database with the socketId and the coordinates of the players
    /*axios.post("/api/players",playerData).then(results=>{
        console.log("The post request was successful")
        socket.emit("newPlayer",playerData)
    }).catch(err=>{
        console.log("There was an error trying to post the player's data to the database:",err)
        console.log("This is the player data I was trying to post before the post failed",playerData)
    })*/
  
    
   /*
    
    this.player = this.physics.add.sprite(50,180,"player",0)// placing player in the scene context so you can access it from different methods
    this.playerHealth = 100
    this.player.visible = true

    */
    //this.player2 = gameState.newPlayer
    //console.log("This is the value of gameState.newPlayer: ",gameState.newPlayer)
    //--------------------------------------------------
    //this.player2 = this.physics.add.sprite(300,180,"player",0)
    //this.player2 = gameState.player2
    console.log("This is gameState.player2: ",gameState.player2)
    //-----------------------------------------------------
    this.player2Health = 100
   // gameState.player2 = this.physics.add.sprite(300,180,"player",0)
    //gameState.player2Health = 100
    //this.player3 = this.physics.add.sprite(500,180,"player",0)
    //this.count2 = 0
    //this.radius = 100

 

    /* Add this back
    this.bullet2 = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
    this.bullet2.visible = false
    this.bullet3 = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
    this.bullet3.visible = false
    this.bullet4 = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
    this.bullet4.visible = false
    this.bullet5 = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
    this.bullet5.visible = false
    this.bullet6 = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
    this.bullet6.visible = false

        */



    //gameState.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
    //gameState.bullet.visible = false


    /* add this back
    this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
    this.bullet.angle = this.player.angle + 90
    this.bullet.visible = false

    */


  
    /*
    this.bullet2s = this.add.group({
        key:"bullet2",
        repeat: 1,
        setXY:{
            x: this.player.x,
            y: this.player.y,
            stepX: (Math.cos((Math.PI/180)*(this.count2+30))*this.radius)+this.player.x,
            stepY: (Math.sin((Math.PI/180)*(this.count2+30))*this.radius)+this.player.y
        }

    });
    this.bullet2s.add(this.bullet2)
    Phaser.Actions.Call(this.bullet2s.getChildren(),function(bullet2){
                bullet2.visible = false

    },this);
    */
    //this.bullet2s.visible = false
    // this.player = this.add.sprite(50,this.sys.game.config.height / 2,"player")// -> uses the game configurations height property to access instead of manually entering one

   // console.log("This is the *this.player* object: ")
    //console.log(this.player)


    //random coordinates
   // this.randomX = Math.floor((Math.random()*315)+1)
   // this.randomY = Math.floor(((Math.random())*170)+1)

   /* add this back

    this.player.angle = 180
    this.player2.angle = 180

    */

    //players current angle
    //console.log("This is the players current angle: ")
    //console.log(this.player2.angle)

    this.cursors = this.input.keyboard.createCursorKeys();

    //console.log("This is the *this.cursors* object: ")
   // console.log(this.cursors)
    //player.setAngle(45);
    //player.rotation = Math.PI/4;
    //player.setRotation(Math.PI/4);

    //console.log("This is the *this.cursors.space* object: ")
    //console.log(this.cursors.space);

/* add this back

    this.player.body.setCollideWorldBounds(true);

*/

    /*
    //---------------------------------------
    this.player2.body.setCollideWorldBounds(true);
    //---------------------------------------------
    */
    
    //this.player3.body.setCollideWorldBounds(true);
    /*
    //------------------------------------------------
    this.physics.add.collider(this.player,this.player2)
    //---------------------------------------------
    */
   //this.physics.add.collider(this.bullet2,this.player2)
    //this.physics.add.collider(this.bullet2,this.player2)
    //this.physics.add.collider(this.player2,this.player3)
    //this.physics.add.collider(this.player,this.player3)

    /* add this back
    this.player.body.bounce.set(1)

    */
    /*
    //--------------------------------
    this.player2.body.bounce.set(1)
    //--------------------------------
    */

    //console.log("Logging this.player: ")
    //console.log(this.player)

    this.velocity = 60
    gameState.velocity = 60

    this.acceleration = 60

    this.count = 0

    this.count2 = 0
    this.radius = 2
    this.radius2 = 100
   

    this.downFlag = false;


}


gameScene.update = function(){

    

    gameState.socket.on("playerData",function(message){
        console.log("This is the current player: ",message)
    })

    /* add this back
    var playerData = {
     
        angle: this.player.angle
        
    } 

    gameState.socket.emit("create player",playerData)
    
    */
    

    
    /*
    //-----------------------------------------
    if(this.player2Health<=0){
        //alert("Player 2 killed this.player2Health<=0")
       
        this.player2Health = 100
        this.randomX = Math.floor((Math.random()*315)+1)
        this.randomY = Math.floor(((Math.random())*170)+1)

        //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
        
        console.log("This.player2Health<=0. this is player2's current health: ",this.player2Health);

        this.player2.x = this.randomX
        this.player2.y = this.randomY

    }
    //----------------------------------------------------
    */
       
    
    /*
    this.player.x += .1;
    this.player2.x += -.1;
    */

   // this.player.setVelocityX(0)
   //  this.player2.setVelocityX(0)

   //this.player3.x += //the result of a math equation

   //this.count2 is the angle that is constantly changing
   //((Math.cos((Math.PI/180)*this.count2)*this.radius)+this.player2.x)
   //((Math.sin((Math.PI/180)*this.count2)*this.radius)+this.player2.y)

   /*
   this.player3.x  =  ((Math.cos((Math.PI/180)*this.count2)*this.radius)+this.player2.x)
   this.player3.y =  ((Math.sin((Math.PI/180)*this.count2)*this.radius)+this.player2.y)


   this.count2 +=1 */
    

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

       

       // console.log("This is the current value of this.count: ")
        //console.log(this.count)

        //Conditional statement so the player doesnt turn every time it fires
        if(this.count > 12){
            this.player.angle += 5  

            var playerDataAngle = {
                angle: this.player.angle
            }
            gameState.angle = this.player.angle
            gameState.socket.emit("rotate player", playerDataAngle)         
        }

        //Conditional statement that causes a bullet to spin around the player 

        if(this.count>50&&this.count<120){

                
                
                    


                

                /*
                let bullet2s = this.bullet2s.getChildren();
                console.log("This is bullet2s children: ")
                console.log(bullet2s)
                let numBullet2s = bullet2s.length;

                for(let i=0;i<numBullet2s;i++){
                    console.log("These are all the sprites in the bullet2s array: ")
                    console.log(bullet2s[i])
                    bullet2s[i].visible = true
                    this.physics.add.collider(bullet2s[i],this.player2)
                    bullet2s[i].x  =  ((Math.cos((Math.PI/180)*this.count2)*this.radius)+this.player.x)
                    bullet2s[i].y =  ((Math.sin((Math.PI/180)*this.count2)*this.radius)+this.player.y)
                    
                };
                this.count2 +=10
                */

                //this.count2 +=10
                //this.radius += 2

            //this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
        
            this.bullet2.visible = true
            this.bullet3.visible = true
            this.bullet4.visible = true
            this.bullet5.visible = true
            //this.bullet6.visible = true
            //this.physics.add.collider(this.bullet2,this.player2)
            

            this.bullet2.x  =  ((Math.cos((Math.PI/180)*this.count2)*this.radius)+this.player.x)
            this.bullet2.y =  ((Math.sin((Math.PI/180)*this.count2)*this.radius)+this.player.y)
            this.bullet3.x  =  ((Math.cos((Math.PI/180)*(this.count2+90))*this.radius)+this.player.x)
            this.bullet3.y =  ((Math.sin((Math.PI/180)*(this.count2+90))*this.radius)+this.player.y)
            this.bullet4.x  =  ((Math.cos((Math.PI/180)*(this.count2+180))*this.radius)+this.player.x)
            this.bullet4.y =  ((Math.sin((Math.PI/180)*(this.count2+180))*this.radius)+this.player.y)
            this.bullet5.x  =  ((Math.cos((Math.PI/180)*(this.count2+270))*this.radius)+this.player.x)
            this.bullet5.y =  ((Math.sin((Math.PI/180)*(this.count2+270))*this.radius)+this.player.y)
            //this.bullet6.x  =  ((Math.cos((Math.PI/180)*(this.count2+315))*this.radius)+this.player.x)
            //this.bullet6.y =  ((Math.sin((Math.PI/180)*(this.count2+315))*this.radius)+this.player.y)
         
         
            this.count2 +=10
            this.radius += 2

                
            let bullet2Rect = this.bullet2.getBounds();
            /*
            //--------------------------------------------
            let player2Rect = this.player2.getBounds();
            //----------------------------------------------
            */

            /*
            //----------------------------------------------------------------
            if(Phaser.Geom.Intersects.RectangleToRectangle(bullet2Rect,player2Rect)){
                
                console.log("Wave bullet2 hit");
               
                this.player2Health -=20;
                
                
               
                console.log("This is player2's current health: ",this.player2Health);
                

              
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3.getBounds(),player2Rect)){
                console.log("Wave bullet3 hit");
               
                this.player2Health -=20;
                
                
               
                console.log("This is player2's current health: ",this.player2Health);
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4.getBounds(),player2Rect)){
                console.log("Wave bullet4 hit");
               
                this.player2Health -=20;
                
                
               
                console.log("This is player2's current health: ",this.player2Health);
            }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5.getBounds(),player2Rect)){
                console.log("Wave bullet5 hit");
               
                this.player2Health -=20;
                
                
               
                console.log("This is player2's current health: ",this.player2Health);
            }
            //---------------------------------------------------------------------------
            */



            /*
            //----------------------------------------------------------------
            if(this.player2Health<=0){
                
                this.player2Health = 100;
                //gameState.player2Health =100
                
                this.randomX = Math.floor((Math.random()*315)+1)
                this.randomY = Math.floor(((Math.random())*170)+1)
    
                //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
    
                this.player2.x = this.randomX
                this.player2.y = this.randomY
            }
            //--------------------------------------------------------------
            */
           

        };

        
        


        //Conditional statement that causes the player to disappear when 
        if(this.count===120){

            this.randomX = Math.floor((Math.random()*315)+1)
            this.randomY = Math.floor(((Math.random())*170)+1)

            //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)

            this.player.x = this.randomX
            this.player.y = this.randomY

            //console.log("Random number for x coordinate value: ")
            //console.log(this.randomX)

            //console.log("Random number for y coordinate value: ")
            //console.log(this.randomY)

            this.bullet2.visible = false
            this.bullet3.visible = false
            this.bullet4.visible = false
            this.bullet5.visible = false
            
        }



        
        

        
       // console.log("this.cursors.space: ")
        //console.log(this.cursors.space)

        

         //this.player.setAccelerationX(20) 


        this.downFlag = true
    }else{

       

        if(this.downFlag){

            //reset this.count 
            this.count = 0
            this.count2 = 0
            this.radius = 1
            
            this.bullet2.visible = false
            this.bullet3.visible = false
            this.bullet4.visible = false
            this.bullet5.visible = false
            //this.bullet2.visible = false

        
           

            


            //if the spacebar is clicked once fire bullets
            // the durations of 1 click is approximately 133 miliseconds
            if(this.cursors.space.duration<150){

                
                //this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                //this.bullet.angle = this.player.angle + 90

                this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                this.bullet.angle = this.player.angle + 90
                this.bullet.visible = true
               // this.physics.add.collider(this.bullet,this.player2)

                //this.bullet.visible = true

                
                //this.bullet.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*500)
                //this.bullet.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*500)

                
                this.bullet.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*500)
                this.bullet.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*500)

               
               
                /*
                //-------------------------------------------------------------------------------------
                setInterval(function(){ 
                    this.bullet.x += Math.cos((Math.PI/180)*this.player.angle)*1
                    this.bullet.y += Math.sin((Math.PI/180)*this.player.angle)*1
                 }, 100);
                 //------------------------------------------------------------------------------------
                 */

              

                //console.log("This is the bullet: ",this.bullet)
                //console.log("This is player2: ",this.player2)
               // console.log("Do this.bullet and player2 overlap?:",Phaser.Geom.Intersects.RectangleToRectangle(this.bullet.getBounds(),this.player2.getBounds()) )
                //console.log("this.bullet.getBounds(): ",this.bullet.getBounds())
               // console.log("this.player2.getBounds(): ",this.player2.getBounds())

                 /*
                if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet.getBounds(),this.player2.getBounds())){

                    
                    console.log("Straight bullet hit");
                    alert("Straight bullet hit")
                    
                   this.player2Health -=20
                    //alert(gameState.player2Health)
                    
                }*/

                      
              
                

               
                
                
               // let bulletRect = this.bullet.getBounds();
                //let player2Rect = this.player2.getBounds();
                
                //alert(Phaser.Geom.Intersects.RectangleToRectangle(bulletRect,player2Rect))
                /*
                if(Phaser.Geom.Intersects.RectangleToRectangle(bulletRect,player2Rect)){

                    //alert("Bullet hit")
                    console.log("Wave bullet hit");
                    this.player2Health -=20;
                    console.log("This is player2's current health: ");
                    console.log(this.player2Health);
                }
                */

                
                /*
                this.player.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*this.velocity)
                this.player.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*this.velocity)

                this.velocity +=1
                */

              // this.player.setAccelerationX(Math.cos((Math.PI/180)*this.player.angle)*this.velocity)

              if(this.velocity <=150){

                
                //console.log("this.velocity <=150:",this.velocity)
                //alert(this.velocity)


               
                    gameState.socket.emit("move player", this.player.angle)
                  this.player.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*this.velocity)
                  this.player.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*this.velocity)

                  this.velocity +=20

              }else {

                  gameState.socket.emit("move player", this.player.angle)
                this.player.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*this.velocity)
                this.player.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*this.velocity)

                
                //console.log("this.velocity other than 150:",this.velocity)
              }
              

            }

         

            /*
            setInterval(function(){ 
                console.log("This is the bullet: ",gameState.bullet)
                console.log("This is player2: ",this.player2)

                if(Phaser.Geom.Intersects.RectangleToRectangle(gameState.bullet.getBounds(),this.player2.getBounds())){

                    
                    console.log("Straight bullet hit");
                    
                    
                   this.player2Health -=20
                    //alert(gameState.player2Health)
                    
                }
             }, 100);*/


             /*
             //--------------------------------------------------------
             if(this.player2Health<=0){
                alert("Player 2 killed after a straight bullet")
                this.player2Health = 100;
                this.randomX = Math.floor((Math.random()*315)+1)
                this.randomY = Math.floor(((Math.random())*170)+1)
    
                //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
               
                console.log("This is player2's current health: ",this.player2Health);
                this.player2.x = this.randomX
                this.player2.y = this.randomY
            }
            //-------------------------------------------------------------------
            */
            

            /*
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
            */
            /*
            if(this.velocity<80){

                this.velocity += 1
            }*/

            /*
            if(this.acceleration<70){

                this.acceleration += 1
            }*/

            
            //console.log("This is the current velocity: ");
            //console.log(this.velocity)

            /*
            console.log("This is the current acceleration: ");
            console.log(this.acceleration)*/

            //this.player.setVelocityX(Math.cos(((Math.PI/180)*this.player.angle)*500))
          //  this.player.setVelocityX(this.velocity)
          //  this.player.setVelocityY(-this.velocity)
            //this.player.setVelocityY(Math.sin(((Math.PI/180)*this.player.angle)*500))

            //console.log("This is is the angle the player is facing in radians: ")
            //console.log((Math.PI/180)*this.player.angle)

            //console.log("This is is Pi: ")
            //console.log(Math.PI)

            //console.log("This is cosine of the angle in radians: ")
            //console.log(Math.cos((Math.PI/180)*this.player.angle))


            //console.log("This is the x component of the velocity vector: ")
            //console.log(Math.cos((Math.PI/180)*this.player.angle)*60)

            //console.log("This is the y component of the velocity vector: ")
            //console.log(Math.sin((Math.PI/180)*this.player.angle)*60)

            
           

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

    /*
    //-----------------------------------------------------------------------
    if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet.getBounds(),this.player2.getBounds())){

                    
        console.log("Straight bullet hit");
       
        
       this.player2Health -=5
        console.log("Player 2's current health is: ",this.player2Health)
        
    }

    //-----------------------------------------------------------------------
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

class Game extends Phaser.Game {
    constructor(){
        super(config)
        
    }
}


var game = new Game()
//var game = new Phaser.Game(config);



