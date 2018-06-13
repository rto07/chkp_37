let Clothes = class {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }//end constructor
  
  	nsp () {
    return `${this.name}
			${this.size}
			${this.price}`;
  		}//end of nsp definition
		}//end Clothes class

		class shirt extends Clothes {
  		constructor (){
    		super ("V-Neck,", "Small,", "$30")
    		} //end constructor
		}//end shirt Sub Class


let c = new shirt ();
  console.log(c.nsp ());