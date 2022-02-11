var x = 20;
var y = 20;
var side = 10;
var xotArr = [];
var kovArr = [];
var gaylArr = [];
var vorsordArr = [];

 
        var matrix = [];
      for(var i = 0;  i < y; i++){
        matrix[i] = [];
      for(var j = 0; j < x; j++){
         matrix[i][j] =0;
      }
     }
 
var grassCount = x*y*50/100;
for (var k = 0; k <grassCount; k++){
     var xx = Math.floor(Math.random()*x);
     var yy = Math.floor(Math.random()*y);
      if(matrix[yy][xx] == 0){
        matrix[yy][xx] = 1;
      }
      else{
         k--;
      }
}

var cowCount = x*y*10/100;
for (var n = 0; n <cowCount; n++){
     var xx = Math.floor(Math.random()*x);
     var yy = Math.floor(Math.random()*y);
      if(matrix[yy][xx] == 0){
        matrix[yy][xx] = 2;
      }
      else{
         n--;
      }
}

var wolfCount = x*y*2/100;
for (var p = 0; p <wolfCount; p++){
     var xx = Math.floor(Math.random()*x);
     var yy = Math.floor(Math.random()*y);
      if(matrix[yy][xx] == 0){
        matrix[yy][xx] = 3;
      }
      else{
         p--;
      }
}

var peopleCount = x*y*1/100;
for (var q = 0; q <peopleCount; q++){
     var xx = Math.floor(Math.random()*x);
     var yy = Math.floor(Math.random()*y);
      if(matrix[yy][xx] == 0){
        matrix[yy][xx] = 4;
      }
      else{
         q--;
      }
}
console.log(matrix);


function setup() {

    frameRate(2);
    createCanvas(x * side, y * side);
    background('#acacac');


    for (var i = 0; i < y; i++) {
        matrix[i] = [];
        for (var j = 0; j < x; j++) {
    
            matrix[i][j] = Math.round(random(0, 4));
            if (matrix[i][j] == 1) {
                var xotik = new Grass(j, i, 1);
                xotArr.push(xotik);
            } 
            else if (matrix[i][j] == 2) {
                var kovik = new Cow(j, i, 2);
                kovArr.push(kovik);
            }
            else if(matrix[i][j] == 3){
                var gayl = new Wolf(j,i,3);
                gaylArr.push(gayl);
            }
            else if(matrix[i][j] == 4){
                var vorsord = new People(j,i,4);
                vorsordArr.push(vorsord);
            }
        }
    }

    
     
    console.log(xotArr);
    console.log(kovArr);
    console.log(gaylArr);
    console.log(vorsordArr);



}

function draw() {
    background('#acacac');



    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } 
            if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            }
            
            if(matrix[i][j] == 3){
                fill("black");
                rect(j * side, i * side, side,side);
            }
            if(matrix[i][j] == 4){
                fill("#ff0000");
                rect(j * side, i * side, side,side);
            }
        }
        
    }
    for (var i in xotArr) {
        xotArr[i].mul();
    }
    for (var i in kovArr) {
        kovArr[i].eat();
    }
   
    for (var i in gaylArr) {
        gaylArr[i].eat();
    }
    for (var i in vorsordArr) {
        vorsordArr[i].eat();
    }
    
}
