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

    gameState.socket.on("playerData", (message)=>{

        
        for(const i in message){
            console.log("This is message[i]: ",message[i])
            switch(message[i].playerName) {

                case "player 1":
                  this.player = this.physics.add.sprite(50,50,"player",0)// placing player in the scene context so you can access it from different methods
                  this.playerHealth = 100
                  this.player.visible = true
                  this.player.body.setCollideWorldBounds(true);
                  this.player.body.bounce.set(1)
                  this.player.angle = 180
                  this.bullet2player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                    this.bullet2player.visible = false
                    this.bullet3player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                    this.bullet3player.visible = false
                    this.bullet4player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                    this.bullet4player.visible = false
                    this.bullet5player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                    this.bullet5player.visible = false
                    this.bullet6player = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                    this.bullet6player.visible = false
                    this.velocityplayer = message[i].playerVelocity
                    this.accelerationplayer = message[i].playerAcceleration
                    this.countplayer = message[i].playerCount
                    this.count2player = message[i].playerCount2
                    this.radiusplayer = message[i].playerRadius
                    this.radius2player = message[i].playerRadius2
                   
                  //Add code here that is being updated constantly by another sockets inputs
                 
                    break;
                case "player 2":
                  this.player2 = this.physics.add.sprite(520,50,"player",0)// placing player in the scene context so you can access it from different methods
                  this.playerHealth2 = 100
                  this.player2.visible = true
                  this.player2.body.setCollideWorldBounds(true);
                  this.player2.body.bounce.set(1)
                  this.player2.angle = 180
                  this.bullet2player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                    this.bullet2player2.visible = false
                    this.bullet3player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                    this.bullet3player2.visible = false
                    this.bullet4player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                    this.bullet4player2.visible = false
                    this.bullet5player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                    this.bullet5player2.visible = false
                    this.bullet6player2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                    this.bullet6player2.visible = false
                    this.velocityplayer2 = message[i].playerVelocity
                    this.accelerationplayer2 = message[i].playerAcceleration
                    this.countplayer2 = message[i].playerCount
                    this.count2player2 = message[i].playerCount2
                    this.radiusplayer2 = message[i].playerRadius
                    this.radius2player2 = message[i].playerRadius2
                  //Add code here that is being updated constantly by another sockets inputs
                    break;
                case "player 3":
                  this.player3 = this.physics.add.sprite(50,330,"player",0)// placing player in the scene context so you can access it from different methods
                  this.playerHealth3 = 100
                  this.player3.visible = true
                  this.player3.body.setCollideWorldBounds(true);
                  this.player3.body.bounce.set(1)
                  this.player3.angle = 180
                  this.bullet2player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                    this.bullet2player3.visible = false
                    this.bullet3player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                    this.bullet3player3.visible = false
                    this.bullet4player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                    this.bullet4player3.visible = false
                    this.bullet5player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                    this.bullet5player3.visible = false
                    this.bullet6player3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                    this.bullet6player3.visible = false
                    this.velocityplayer3 = message[i].playerVelocity
                    this.accelerationplayer3 = message[i].playerAcceleration
                    this.countplayer3 = message[i].playerCount
                    this.count2player3 = message[i].playerCount2
                    this.radiusplayer3 = message[i].playerRadius
                    this.radius2player3 = message[i].playerRadius2
                  //Add code here that is being updated constantly by another sockets inputs
                    break;
                case "player 4":
                  this.player4 = this.physics.add.sprite(520,330,"player",0)// placing player in the scene context so you can access it from different methods
                  this.playerHealth4 = 100
                  this.player4.visible = true
                  this.player4.body.setCollideWorldBounds(true);
                  this.player4.body.bounce.set(1)
                  this.player4.angle = 180
                  this.bullet2player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                    this.bullet2player4.visible = false
                    this.bullet3player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                    this.bullet3player4.visible = false
                    this.bullet4player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                    this.bullet4player4.visible = false
                    this.bullet5player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                    this.bullet5player4.visible = false
                    this.bullet6player4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                    this.bullet6player4.visible = false
                    this.velocityplayer4 = message[i].playerVelocity
                    this.accelerationplayer4 = message[i].playerAcceleration
                    this.countplayer4 = message[i].playerCount
                    this.count2player4 = message[i].playerCount2
                    this.radiusplayer4 = message[i].playerRadius
                    this.radius2player4 = message[i].playerRadius2
                  //Add code here that is being updated constantly by another sockets inputs
                    break;
  
              default:
                  break;
            }

        }
      })
   
      
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
   

    this.cursors = this.input.keyboard.createCursorKeys();

    this.count = 0
   
    this.downFlag = false;


}


gameScene.update = function(){

    
    
   

    if(this.cursors.space.isDown){

       //if the space bar is down for longer than 2 seconds start spinning else fire bullet
       

        //start rotating
        //if count greater than __ change the angle and then reset the count
        this.count += 1

        //Conditional statement so the player doesnt turn every time it fires
        if(this.count > 12){
             

            var playerDataAngle = {
                angleIncrease: 5
            }
            
            gameState.socket.emit("PlayerInputAngle", playerDataAngle)   

            gameState.socket.on("PlayerOutputAngle", (message)=>{
                
                    switch(message.playerName){
                        case "player 1":
                            this.player.angle +=5
                            break;
                        case "player 2":
                          this.player2.angle +=5
                            break;
                        case "player 3":
                          this.player3.angle +=5
                            break;
                        case "player 4":
                          this.player4.angle +=5
                            break;
                        default:
                            break;
                      
      
                      
                    }
                
            })      
        }

        //Conditional statement that causes a bullet to spin around the player 

        if(this.count>50&&this.count<120){

                //Create trigger for wave bullets
                
                    

                gameState.socket.emit("PlayerInputBulletsWave", {} )


                gameState.socket.on("PlayerOutputBulletsWave", (message)=>{
                    
                        
                            switch(message.playerName){
                                case "player 1":
                                    this.bullet2player.visible = true
                                    this.bullet3player.visible = true
                                    this.bullet4player.visible = true
                                    this.bullet5player.visible = true
                                    this.bullet2player.x  =  ((Math.cos((Math.PI/180)*this.count2)*this.radius)+this.player.x)
                                    this.bullet2player.y =  ((Math.sin((Math.PI/180)*this.count2)*this.radius)+this.player.y)
                                    this.bullet3player.x  =  ((Math.cos((Math.PI/180)*(this.count2+90))*this.radius)+this.player.x)
                                    this.bullet3player.y =  ((Math.sin((Math.PI/180)*(this.count2+90))*this.radius)+this.player.y)
                                    this.bullet4player.x  =  ((Math.cos((Math.PI/180)*(this.count2+180))*this.radius)+this.player.x)
                                    this.bullet4player.y =  ((Math.sin((Math.PI/180)*(this.count2+180))*this.radius)+this.player.y)
                                    this.bullet5player.x  =  ((Math.cos((Math.PI/180)*(this.count2+270))*this.radius)+this.player.x)
                                    this.bullet5player.y =  ((Math.sin((Math.PI/180)*(this.count2+270))*this.radius)+this.player.y)
                                    
                                    if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player.getBounds(),this.player2.getBounds())){
                
                                        console.log("Wave bullet2 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                        
                        
                                      
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player.getBounds(),this.player2.getBounds())){
                                        console.log("Wave bullet3 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player.getBounds(),this.player2.getBounds())){
                                        console.log("Wave bullet4 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player.getBounds(),this.player2.getBounds())){
                                        console.log("Wave bullet5 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }
                                    if(this.playerHealth<=0){
                
                                        this.playerHealth = 100;
                                        //gameState.player2Health =100
                                        
                                        this.randomX = Math.floor((Math.random()*315)+1)
                                        this.randomY = Math.floor(((Math.random())*170)+1)
                            
                                        //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
                            
                                        this.player.x = this.randomX
                                        this.player.y = this.randomY
                                    }
                                    break;
                                case "player 2":
                                    this.bullet2player2.visible = true
                                    this.bullet3player2.visible = true
                                    this.bullet4player2.visible = true
                                    this.bullet5player2.visible = true
                                    this.bullet2player2.x  =  ((Math.cos((Math.PI/180)*this.count2)*this.radius)+this.player2.x)
                                    this.bullet2player2.y =  ((Math.sin((Math.PI/180)*this.count2)*this.radius)+this.player2.y)
                                    this.bullet3player2.x  =  ((Math.cos((Math.PI/180)*(this.count2+90))*this.radius)+this.player2.x)
                                    this.bullet3player2.y =  ((Math.sin((Math.PI/180)*(this.count2+90))*this.radius)+this.player2.y)
                                    this.bullet4player2.x  =  ((Math.cos((Math.PI/180)*(this.count2+180))*this.radius)+this.player2.x)
                                    this.bullet4player2.y =  ((Math.sin((Math.PI/180)*(this.count2+180))*this.radius)+this.player2.y)
                                    this.bullet5player2.x  =  ((Math.cos((Math.PI/180)*(this.count2+270))*this.radius)+this.player2.x)
                                    this.bullet5player2.y =  ((Math.sin((Math.PI/180)*(this.count2+270))*this.radius)+this.player2.y)
                                    this.count2 +=10
                                    this.radius += 2
                                    if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player2.getBounds(),this.player.getBounds())){
                
                                        console.log("Wave bullet2 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                        
                        
                                      
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player2.getBounds(),this.player.getBounds())){
                                        console.log("Wave bullet3 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player2.getBounds(),this.player.getBounds())){
                                        console.log("Wave bullet4 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player2.getBounds(),this.player.getBounds())){
                                        console.log("Wave bullet5 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }
                                    if(this.player2Health<=0){
                
                                        this.player2Health = 100;
                                        //gameState.player2Health =100
                                        
                                        this.randomX = Math.floor((Math.random()*315)+1)
                                        this.randomY = Math.floor(((Math.random())*170)+1)
                            
                                        //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
                            
                                        this.player2.x = this.randomX
                                        this.player2.y = this.randomY
                                    }
                                    break;
                                case "player 3":
                                    this.bullet2player3.visible = true
                                    this.bullet3player3.visible = true
                                    this.bullet4player3.visible = true
                                    this.bullet5player3.visible = true
                                    this.bullet2player3.x  =  ((Math.cos((Math.PI/180)*this.count2)*this.radius)+this.player3.x)
                                    this.bullet2player3.y =  ((Math.sin((Math.PI/180)*this.count2)*this.radius)+this.player3.y)
                                    this.bullet3player3.x  =  ((Math.cos((Math.PI/180)*(this.count2+90))*this.radius)+this.player3.x)
                                    this.bullet3player3.y =  ((Math.sin((Math.PI/180)*(this.count2+90))*this.radius)+this.player3.y)
                                    this.bullet4player3.x  =  ((Math.cos((Math.PI/180)*(this.count2+180))*this.radius)+this.player3.x)
                                    this.bullet4player3.y =  ((Math.sin((Math.PI/180)*(this.count2+180))*this.radius)+this.player3.y)
                                    this.bullet5player3.x  =  ((Math.cos((Math.PI/180)*(this.count2+270))*this.radius)+this.player3.x)
                                    this.bullet5player3.y =  ((Math.sin((Math.PI/180)*(this.count2+270))*this.radius)+this.player3.y)
                                    this.count2 +=10
                                    this.radius += 2
                                    
                                    if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player3.getBounds(),this.player2.getBounds())){
                
                                        console.log("Wave bullet2 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                        
                        
                                      
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player3.getBounds(),this.player2.getBounds())){
                                        console.log("Wave bullet3 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player3.getBounds(),this.player2.getBounds())){
                                        console.log("Wave bullet4 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player3.getBounds(),this.player2.getBounds())){
                                        console.log("Wave bullet5 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }
                                    if(this.player3Health<=0){
                
                                        this.player3Health = 100;
                                        //gameState.player2Health =100
                                        
                                        this.randomX = Math.floor((Math.random()*315)+1)
                                        this.randomY = Math.floor(((Math.random())*170)+1)
                            
                                        //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
                            
                                        this.player3.x = this.randomX
                                        this.player3.y = this.randomY
                                    }
                                    break;

                                case "player 4":
                                    this.bullet2player4.visible = true
                                    this.bullet3player4.visible = true
                                    this.bullet4player4.visible = true
                                    this.bullet5player4.visible = true
                                    this.bullet2player4.x  =  ((Math.cos((Math.PI/180)*this.count2)*this.radius)+this.player4.x)
                                    this.bullet2player4.y =  ((Math.sin((Math.PI/180)*this.count2)*this.radius)+this.player4.y)
                                    this.bullet3player4.x  =  ((Math.cos((Math.PI/180)*(this.count2+90))*this.radius)+this.player4.x)
                                    this.bullet3player4.y =  ((Math.sin((Math.PI/180)*(this.count2+90))*this.radius)+this.player4.y)
                                    this.bullet4player4.x  =  ((Math.cos((Math.PI/180)*(this.count2+180))*this.radius)+this.player4.x)
                                    this.bullet4player4.y =  ((Math.sin((Math.PI/180)*(this.count2+180))*this.radius)+this.player4.y)
                                    this.bullet5player4.x  =  ((Math.cos((Math.PI/180)*(this.count2+270))*this.radius)+this.player4.x)
                                    this.bullet5player4.y =  ((Math.sin((Math.PI/180)*(this.count2+270))*this.radius)+this.player4.y)
                                    this.count2 +=10
                                    this.radius += 2
                                    if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet2player4.getBounds(),this.player3.getBounds())){
                
                                        console.log("Wave bullet2 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                        
                        
                                      
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet3player4.getBounds(),this.player3.getBounds())){
                                        console.log("Wave bullet3 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet4player4.getBounds(),this.player3.getBounds())){
                                        console.log("Wave bullet4 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }else if(Phaser.Geom.Intersects.RectangleToRectangle(this.bullet5player4.getBounds(),this.player3.getBounds())){
                                        console.log("Wave bullet5 hit");
                                       
                                        this.player2Health -=20;
                                        
                                        
                                       
                                        console.log("This is player2's current health: ",this.player2Health);
                                    }
                                    if(this.player4Health<=0){
                
                                        this.player4Health = 100;
                                        //gameState.player2Health =100
                                        
                                        this.randomX = Math.floor((Math.random()*315)+1)
                                        this.randomY = Math.floor(((Math.random())*170)+1)
                            
                                        //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
                            
                                        this.player4.x = this.randomX
                                        this.player4.y = this.randomY
                                    }
                                    break;

                                default:
                                    break;
                              
              
                              
                            }
                        
                    
                })


                

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
        
            /* add this back
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
         */


         /* add this back
            this.count2 +=10
            this.radius += 2 */



                /*add this back
            let bullet2Rect = this.bullet2.getBounds();
            */
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
            if(this.playerHealth<=0){
                
                this.playerHealth = 100;
                //gameState.player2Health =100
                
                this.randomX = Math.floor((Math.random()*315)+1)
                this.randomY = Math.floor(((Math.random())*170)+1)
    
                //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
    
                this.player.x = this.randomX
                this.player.y = this.randomY
            }
            if(this.player3Health<=0){
                
                this.player3Health = 100;
                //gameState.player2Health =100
                
                this.randomX = Math.floor((Math.random()*315)+1)
                this.randomY = Math.floor(((Math.random())*170)+1)
    
                //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
    
                this.player3.x = this.randomX
                this.player3.y = this.randomY
            }
            if(this.player4Health<=0){
                
                this.player4Health = 100;
                //gameState.player2Health =100
                
                this.randomX = Math.floor((Math.random()*315)+1)
                this.randomY = Math.floor(((Math.random())*170)+1)
    
                //this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)
    
                this.player4.x = this.randomX
                this.player4.y = this.randomY
            }
            //--------------------------------------------------------------
            
           

        };

        
        


        //Conditional statement that causes the player to disappear when 
        if(this.count===120){

           

            /*add this back
            this.player = this.physics.add.sprite( this.randomX, this.randomY,"player",0)

            this.player.x = this.randomX
            this.player.y = this.randomY */

            const newCoordinates = {
                x: Math.floor((Math.random()*315)+1),
                y: Math.floor(((Math.random())*170)+1)
            }

            gameState.socket.emit("PlayerInputNewCoordinates",  newCoordinates)

            gameState.socket.on("PlayerOutputNewCoordinates", (message)=>{
                switch(message.playerName){
                    case "player 1":
                        this.player.x = message.newCoordinates.x
                        this.player.y = message.newCoordinates.y
                        this.bullet2player.visible = false
                        this.bullet3player.visible = false
                        this.bullet4player.visible = false
                        this.bullet5player.visible = false
                        break;
                    case "player 2":
                        this.player2.x = message.newCoordinates.x
                        this.player2.y = message.newCoordinates.y
                        this.bullet2player2.visible = false
                        this.bullet3player2.visible = false
                        this.bullet4player2.visible = false
                        this.bullet5player2.visible = false
                        break;
                    case "player 3":
                        this.player3.x = message.newCoordinates.x
                        this.player3.y = message.newCoordinates.y
                        this.bullet2player3.visible = false
                        this.bullet3player3.visible = false
                        this.bullet4player3.visible = false
                        this.bullet5player3.visible = false
                        break;
                    case "player 4":
                        this.player4.x = message.newCoordinates.x
                        this.player4.y = message.newCoordinates.y
                        this.bullet2player4.visible = false
                        this.bullet3player4.visible = false
                        this.bullet4player4.visible = false
                        this.bullet5player4.visible = false
                        break;
                    default:
                        break;
                }
            })

            //console.log("Random number for x coordinate value: ")
            //console.log(this.randomX)

            //console.log("Random number for y coordinate value: ")
            //console.log(this.randomY)

           
            
        }



        
        

        
       // console.log("this.cursors.space: ")
        //console.log(this.cursors.space)

        

         //this.player.setAccelerationX(20) 


        this.downFlag = true
    }else{

       

        if(this.downFlag){

            //reset this.count 
            //this.count = 0
            //this.count2 = 0
            //this.radius = 1

            gameState.socket.emit("PlayerInputResetCount", {
                count: 0,
                count2: 0,
                radius: 1
            })
            
            gameState.socket.on("PlayerOutputResetCount",(message)=>{
                switch(message.playerName){
                    case "player 1":
                        this.countplayer = message.count
                        this.count2player = message.count2
                        this.radiusplayer = message.radius
                        this.bullet2player.visible = false
                        this.bullet3player.visible = false
                        this.bullet4player.visible = false
                        this.bullet5player.visible = false
                        break;
                    case "player 2":
                        this.countplayer2 = message.count
                        this.count2player2 = message.count2
                        this.radiusplayer2 = message.radius
                        this.bullet2player2.visible = false
                        this.bullet3player2.visible = false
                        this.bullet4player2.visible = false
                        this.bullet5player2.visible = false
                        break;
                    case "player 3":
                        this.countplayer3 = message.count
                        this.count2player3 = message.count2
                        this.radiusplayer3 = message.radius
                        this.bullet2player3.visible = false
                        this.bullet3player3.visible = false
                        this.bullet4player3.visible = false
                        this.bullet5player3.visible = false
                        break;
                    case "player 4":
                        this.countplayer4 = message.count
                        this.count2player4 = message.count2
                        this.radiusplayer4 = message.radius
                        this.bullet2player4.visible = false
                        this.bullet3player4.visible = false
                        this.bullet4player4.visible = false
                        this.bullet5player4.visible = false
                        break;
                    default:
                        break;
                }
            })
            //this.bullet2.visible = false
            //this.bullet3.visible = false
            //this.bullet4.visible = false
            //this.bullet5.visible = false
            //this.bullet2.visible = false

        
           

            


            //if the spacebar is clicked once fire bullets
            // the durations of 1 click is approximately 133 miliseconds
            if(this.cursors.space.duration<150){

                
                //this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                //this.bullet.angle = this.player.angle + 90

                this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                this.bullet.angle = this.player.angle + 90
                this.bullet.visible = true


                gameState.socket.emit("PlayerInputBullets", {
                    bullet: this.physics.add.sprite(this.player.x,this.player.y,"bullet",0),
                    bulletAngle: 90,
                    bulletVisible: true

                })


                gameState.socket.on("PlayerOutputBullets", (message)=>{
                    switch(message.playerName){
                        case "player 1":
                            this.bulletplayer = this.physics.add.sprite(this.player.x,this.player.y,"bullet",0)
                            this.bulletplayer.angle = message.bulletAngle
                            this.bulletplayer.visible = message.bulletVisible
                            this.bulletplayer.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*500)
                            this.bulletplayer.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*500)
            
                            break;
                        case "player 2":
                            this.bulletplayer2 = this.physics.add.sprite(this.player2.x,this.player2.y,"bullet",0)
                            this.bulletplayer2.angle = message.bulletAngle
                            this.bulletplayer2.visible = message.bulletVisible
                            this.bulletplayer2.setVelocityX(Math.cos((Math.PI/180)*this.player2.angle)*500)
                            this.bulletplayer2.setVelocityY(Math.sin((Math.PI/180)*this.player2.angle)*500)
            
                            break;
                        case "player 3":
                            this.bulletplayer3 = this.physics.add.sprite(this.player3.x,this.player3.y,"bullet",0)
                            this.bulletplayer3.angle = message.bulletAngle
                            this.bulletplayer3.visible = message.bulletVisible
                            this.bulletplayer3.setVelocityX(Math.cos((Math.PI/180)*this.player3.angle)*500)
                            this.bulletplayer3.setVelocityY(Math.sin((Math.PI/180)*this.player3.angle)*500)
            
                            break;
                        case "player 4":
                            this.bulletplayer4 = this.physics.add.sprite(this.player4.x,this.player4.y,"bullet",0)
                            this.bulletplayer4.angle = message.bulletAngle
                            this.bulletplayer4.visible = message.bulletVisible
                            this.bulletplayer4.setVelocityX(Math.cos((Math.PI/180)*this.player4.angle)*500)
                            this.bulletplayer4.setVelocityY(Math.sin((Math.PI/180)*this.player4.angle)*500)
            
                            break;
                        default:
                            break;
                    }
                })
               // this.physics.add.collider(this.bullet,this.player2)

                //this.bullet.visible = true

                
                //this.bullet.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*500)
                //this.bullet.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*500)

                /* add this back
                this.bullet.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*500)
                this.bullet.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*500)
                */
               
               
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


               
                    gameState.socket.emit("PlayerInputVelocity", {})

                    gameState.socket.on("PlayerOutputVelocity", (message)=>{
                        switch(message.playerName){
                            case "player 1":
                                this.player.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*this.velocityplayer)
                                this.player.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*this.velocityplayer)
                                this.velocityplayer +=20
                                break;
                            case "player 2":
                                this.player2.setVelocityX(Math.cos((Math.PI/180)*this.player2.angle)*this.velocityplayer2)
                                this.player2.setVelocityY(Math.sin((Math.PI/180)*this.playe2r.angle)*this.velocityplayer2)
                                this.velocityplayer2 +=20
                                break;
                            case "player 3":
                                this.player3.setVelocityX(Math.cos((Math.PI/180)*this.player3.angle)*this.velocity3)
                                this.player3.setVelocityY(Math.sin((Math.PI/180)*this.player3.angle)*this.velocity3)
                                this.velocityplayer3 +=20
                                break;
                            case "plaer 4":
                                this.player4.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*this.velocity4)
                                this.player4.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*this.velocity4)
                                this.velocityplayer4 +=20
                                break;
                            default:
                               
                                break;
                        }
                    })
                  

              }else {

                gameState.socket.on("PlayerOutputVelocity", (message)=>{
                    switch(message.playerName){
                        case "player 1":
                            this.player.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*this.velocityplayer)
                            this.player.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*this.velocityplayer)
                            this.velocityplayer +=20
                            break;
                        case "player 2":
                            this.player2.setVelocityX(Math.cos((Math.PI/180)*this.player2.angle)*this.velocityplayer2)
                            this.player2.setVelocityY(Math.sin((Math.PI/180)*this.playe2r.angle)*this.velocityplayer2)
                            this.velocityplayer2 +=20
                            break;
                        case "player 3":
                            this.player3.setVelocityX(Math.cos((Math.PI/180)*this.player3.angle)*this.velocity3)
                            this.player3.setVelocityY(Math.sin((Math.PI/180)*this.player3.angle)*this.velocity3)
                            this.velocityplayer3 +=20
                            break;
                        case "plaer 4":
                            this.player4.setVelocityX(Math.cos((Math.PI/180)*this.player.angle)*this.velocity4)
                            this.player4.setVelocityY(Math.sin((Math.PI/180)*this.player.angle)*this.velocity4)
                            this.velocityplayer4 +=20
                            break;
                        default:
                           
                            break;
                    }
                })
                
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



