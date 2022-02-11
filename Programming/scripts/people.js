
class People{//Vorsordis funkcyan.....vorsordis energyn havasar e 5 ev amen anagm uteluc  multiply e
    // avelanum e mekov ev erb hasnum e 2 ,stugum e ete xotakerneri qanaqe e havasar e 3 apa 
    //bazmanum e isk ete voch sharunakum e sharjvel 
constructor(x,y,ind){
this.index = ind;
this.x = x;
this.y = y;
this.energy = 5;
this.multiply = 0;

}

newDirections(){
this.directions = [
    [this.x - 2, this.y - 2],
    [this.x - 1, this.y - 2],
    [this.x    , this.y - 2],
    [this.x + 1, this.y - 2],
    [this.x + 2, this.y - 2],


    [this.x - 2, this.y - 1],
    [this.x - 1, this.y - 1],
    [this.x    , this.y - 1],
    [this.x + 1, this.y - 1],
    [this.x + 2, this.y - 1],

    [this.x - 2, this.y    ],
    [this.x - 1, this.y    ],
    [this.x + 1, this.y    ],
    [this.x + 2, this.y    ],

    [this.x - 2, this.y + 1],
    [this.x - 1, this.y + 1],
    [this.x    , this.y + 1],
    [this.x + 1, this.y + 1],

    [this.x - 2, this.y + 2],
    [this.x - 1, this.y + 2],
    [this.x    , this.y + 2],
    [this.x + 1, this.y + 2],
    [this.x + 2, this.y + 2],
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