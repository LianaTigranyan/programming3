class Cow extends LivingCreature{//Xotakeri funkcian....xotakeris energyn 8 ev ayn bazmanum e erb multiply e hasnum e 7
    //(aysinqn na 7 angam utum e xot )..ete multiply e havasar chi 7 ha sharejvum e 
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

       var norKov = new Cow(x,y,this.index);
       kovArr.push(norKov);

       matrix[y][x] = 2;
       this.multiply = 0;
   }
}
eat(){
   

   var e = this.getDirections(1);
   var cord = random(e);
   if(cord){
       this.energy = 8;
       this.multiply++;
       var x = cord[0];
       var y = cord[1];

       
       matrix[this.y][this.x] = 0;
       matrix[y][x] = 2;
       
       this.x = x;
       this.y = y;
       for(var i in xotArr){
          if(xotArr[i].x == x && xotArr[i].y == y){
             xotArr.splice(i,1);
          }
       }

       if(this.multiply == 7){
           this.mul();
           
       }
      }
       else{
           this.move();
       }
     }
         

die(x,y){


   matrix[y][x] = 0;
   for(var i in kovArr){
      if(kovArr[i].x == x && kovArr[i].y == y){
         kovArr.splice(i,1);
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
       matrix[y][x] = 2;
       this.x = x;
       this.y = y;

       if(this.energy == 0){

            this.die(x,y);

       }



   }
}
}