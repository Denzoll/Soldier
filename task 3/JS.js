const Witcher3 = {
    mainChar: {
        name: 'Geralt',
        health:0,
        age:95,
        job: 'killer',
        enemyCount:0,
        horse: 'plotva',
        teacher:'Wisimir',
        swords:{
            steelHealth:100,
            silverHealth:100
        }
        
    },
     life:function(){
         if(this.health < 0){
             return console.log('Game over')
         }
     },
     fight:function(){
         if(this.silverHealth > 1){
             this.enemyCount =  this.enemyCount -1
         }
         else {
             this.health = 0
         }
     },
     
     slach:function(){
       this.fight
        this.silverHealth = this.silverHealth - 10;
         
     },

     death:function(){
         if(this.enemyCount > 10){
             this.health = 0
         }
     },
     
     
     
     end: function(){
         this.enemyCount === 0
             this.job = 'Done';
             return console.log('Win')
         
  }
      
}