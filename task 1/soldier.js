const soldier = {
    name: 'Soup',
    health: 1,
    weapon:{
        name: 'm416',
        ammo: 30
    },
    supply: 3,
    fire: function(){
        if(this.ammo == 0){
            return console.log('Обойма пуста перезаредитесь')
        }
        this.ammo = this.ammo - 1
        return console.log('бах-бах')
    },
    reload: function(){
     if(this.supply == 0){
          console.log('не осталось припасов')
     }
        this.ammo = 30
     this.supply = this.supply - 1
     return console.log('перезарядка...')
    },
    hurt: function(){
        this.health = this.health - 1
        if(this.health == 0){
            return console.log('ты проиграл')
        }
    },


}