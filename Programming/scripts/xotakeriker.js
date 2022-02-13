
class Wolf extends LivingCreature{//Xotakerikeri funkcya....Xotakerikeri energyn 3 e ev amen angam uteluc multiply e avelanum mek angamov
    // ev erb hasnum e 10 stugum e ete xotakerneri qanaqe havasar e 15 apa bazmana,
    // isk ete voch sharunaki sharjvel
constructor(x,y){
  super(x,y)
  this.energy = 3;
  this.multiply = 0;

  
}



mul(){
  var emptyCord = this.getDirections(0);

  var cord = random(emptyCord);
  if(cord){
      var x = cord[0];
      var y = cord[1];

      var norGayl = new Wolf(x,y,this.index);
      gaylArr.push(norGayl);

      matrix[y][x] = 3;
      this.multiply = 0;
  }
}
eat(){
  

  var e = this.getDirections(2);
  var cord = random(e);
  if(cord){
      
      this.multiply++;
      var x = cord[0];
      var y = cord[1];

      
      matrix[this.y][this.x] = 0;
      matrix[y][x] = 3;

      
      this.x = x;
      this.y = y;
      for(var i in kovArr){
         if(kovArr[i].x == x && kovArr[i].y == y){
            kovArr.splice(i,1);
         }
      }
      console.log("eat");

      if(this.multiply == 10){
          if(kovArr.length == 15){
              
          this.mul();
          
          this.multiply = 0;
          }
      }
     }
      else{
          this.move();
      }
    }
        

die(x,y){


  matrix[y][x] = 0;
  for(var i in gaylArr){ 
     if(gaylArr[i].x == x && gaylArr[i].y == y){
        gaylArr.splice(i,1);
     }
  }

}
move(){
  var emptyCord = this.getDirections(0);
     var cord = random(emptyCord);
  if(cord){
      this.energy--;
      var x = cord[0];
      var y = cord[1];

      matrix[this.y][this.x] = 0;
      matrix[y][x] = 3;
      this.x = x;
      this.y = y;

      if(this.energy == 0){

           this.die(x,y);

      }



  }
}
}

