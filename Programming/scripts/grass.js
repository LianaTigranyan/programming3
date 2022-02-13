

class Grass extends LivingCreature{
	constructor(x,y){
		
		super(x,y)
		this.energy = 5;
		this.multiply = 0;
		
		
	}

	

	mul(){
		this.multiply++;
		if(this.multiply == 8){
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
			if(cord){
				var x = cord[0];
				var y = cord[1];

				var norXot = new Grass(x,y,this.index);
				xotArr.push(norXot);

				matrix[y][x] = 1;
				this.multiply = 0;
			}
		}
	}

	die(){

	}

}