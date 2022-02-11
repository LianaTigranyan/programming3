class Cow{//Xotakeri funkcian....xotakeris energyn 8 ev ayn bazmanum e erb multiply e hasnum e 7
    //(aysinqn na 7 angam utum e xot )..ete multiply e havasar chi 7 ha sharejvum e 
constructor(x,y,ind){
   this.index = ind;
   this.x = x;
   this.y = y;
   this.energy = 3;
   this.multiply = 0;
   
}

newDirections(){
   this.directions = [
       [this.x - 1, this.y - 1],
       [this.x    , this.y - 1],
       [this.x + 1, this.y - 1],
       [this.x - 1, this.y    ],
       [this.x + 1, this.y    ],
       [this.x - 1, this.y + 1],
       [this.x    , this.y + 1],
       [this.x + 1, this.y + 1]
   ];
}


getDirections(t){
   this.newDirections();
   var found = [];

   for(var i in this.directions){
       var x = this.directions[i][0];
       var y = this.directions[i][1];
       if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
           if(matrix[y][x] == t){
               found.push(this.directions[i]);
           }
       }
   }
   return found;
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