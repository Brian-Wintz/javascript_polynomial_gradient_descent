class Polynomial{
	constructor(coefficients) {
		this.coefficients=coefficients;
	}

	calc(x) {
		let result=this.coefficients[0];
		let x2pow=x;
		var i;
		for(i=1; i<this.coefficients.length; ++i) {
			result+=this.coefficients[i]*x2pow;
			//console.log("  f(x):"+i+":"+this.coefficients[i]+":"+x2pow+":"+result);
			x2pow*=x;
		}

		return result;
	}

	diff(x) {
		let result=this.coefficients[1];
		let x2pow=x;
		var i;
		for(i=2; i<this.coefficients.length; ++i) {
			result+=this.coefficients[i]*i*x2pow;
			//console.log("  f'(x):"+i+":"+this.coefficients[i]+":"+x2pow+":"+result);
			x2pow*=x;
		}
		return result;
	}
}

var gd=function(obj,start,learn_rate,n_iter) {
    var vector=start;
	var i;
    for(i=0; i<n_iter; ++i) {
        diff=-learn_rate*obj.diff(vector);
        vector+=diff;
        console.log("  gd:"+i+":"+diff+":"+vector);
	}
    return vector
}

const a=[2.0,-1,4.0,-0.5,0.25,0.125];

poly=new Polynomial(a);

var x=2.5;
var y;
var i;
var gdval;
for(i=0; i<10; ++i) {
	y=poly.calc(x);
	gdval=gd(poly,x,0.1,1);
	console.log("  :"+i+":"+x+":"+y+":"+gdval);
	x=gdval;
}
