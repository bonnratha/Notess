typeof 42;
typeof 42; // "number"
typeof typeof 42; // type of a "string" is a string

var a;
typeof a; // "undefined"
typeof b; // also "undefined" but technically it should be "undeclared"

// How to create a method in an object
var myNumber = {
    addition: function(a,b) {
      return a+b;
    },
    subtraction: function(a,b) {
      return a-b;
    },
    mutiplication: function(a,b) {
      return a*b;
    },
    division: function(a,b) {
      if (b=0) {return "You can't divide by zero";}
      else {return a/b;}
    }
}

myNumber.subtraction(10,2); //an example of calling a method in the object.
