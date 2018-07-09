Array.from('foo'); // [ 'f', 'o', 'o' ]
/*
String Vs, Array
*/
var a = "foo";
var b = ["f", "o", "o" ];

console.log(a);
console.log(b.join("-"));
console.log(b.reverse());

// Array.prototype.reverse.call(a);
console.log(a.split("").reverse().join(""));

var c = Array.prototype.join.call( a, "-" );
var d = Array.prototype.map.call( a, function(v){
	return v.toUpperCase();
} ).join( "" );

console.log(d);
