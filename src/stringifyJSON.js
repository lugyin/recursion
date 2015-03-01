// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

  var my_stringify = function(xx) {

	if(typeof xx === "number") {
		return '"' + xx + '"';
	} 


	if(typeof xx === "boolean") {
		return '"' + xx + '"';
	} 

	if(typeof xx === "string") {
		return '"' + xx + '"';
	} 

	if(Array.isArray(xx)) {
		
		if(xx.length === 0) {
			return ' " [] " ';
		} 

		if( xx.length === 1) { 
		return '[' + my_stringify(xx[0]) + ']';
		} 

		if(xx.length > 1) { 
			var aa = '[' + my_stringify(xx[0]);
			for(var i = 1; i<xx.length; i++) {
			aa = aa + ", " + my_stringify(xx[i]);
			}
			return aa + ']';
		}	
		
	} 

	if(typeof xx === "object") {
	var keys = Object.keys(xx);
	console.log(keys)	
		// for {}

		if(keys.length === 0) {
			return ' {} ';
		}	
		
		if(keys.length === 1) {
			for(var p in xx) {
					return '{"' + p + '" : ' + my_stringify(xx[p]) + '}';
				}
		}

		if(keys.length > 1) {
			var aa = "{" + [keys[0]] + ':' + my_stringify(xx[keys[0]])
			for(var p in xx) {
					aa '"' + p + '" : ' + my_stringify(xx[p]) + '}';
				}
		}	
	} 

};

{"a":["b", "c"]},