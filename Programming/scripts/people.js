
class People extends LivingCreature{//Vorsordis funkcyan.....vorsordis energyn havasar e 5 ev amen anagm uteluc  multiply e
    // avelanum e mekov ev erb hasnum e 2 ,stugum e ete xotakerneri qanaqe e havasar e 3 apa 
    //bazmanum e isk ete voch sharunakum e sharjvel 
constructor(x,y){
super(x,y)
this.energy = 5;
this.multiply = 0;

}



mul(){
var emptyCord = this.getDirections(0);

var cord = random(emptyCord);
if(cord){
    var x = cord[0];
    var y = cord[1];

    var norMard = new People(x,y,this.index);
    vorsordArr.push(norMard);

    matrix[y][x] = 4;
    this.multiply = 0;
}
}
eat(){


var e = this.getDirections(3);
var cord = random(e);
if(cord){
    
    this.multiply++;
    var x = cord[0];
    var y = cord[1];

    
    matrix[this.y][this.x] = 0;
    matrix[y][x] = 4;

    
    this.x = x;
    this.y = y;
    for(var i in gaylArr){
       if(gaylArr[i].x == x && gaylArr[i].y == y){
          gaylArr.splice(i,1);
       }
    }

    if(this.multiply == 2){
        if(kovArr.length == 3){
            
            this.mul();
        console.log("mulm");
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
for(var i in vorsordArr){ 
   if(vorsordArr[i].x == x && vorsordArr[i].y == y){
      vorsordArr.splice(i,1);
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
    matrix[y][x] = 4;
    this.x = x;
    this.y = y;

    if(this.energy == 0){

         this.die(x,y);

    }



}
}
}