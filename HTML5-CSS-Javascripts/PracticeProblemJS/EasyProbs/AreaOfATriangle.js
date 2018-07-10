/*
Write a JavaScript program to find the area of a triangle where lengths of the
three of its sides are 5, 6, 7
A = 1/2 * base * height
I use Hero's formula !!!
s = (a+b+c)/2;
A = sqr(s(s-a)(s-b)(s-c));
*/
function calculateAreaOfATriangle (a,b,c) {
  var s = (a+b+c)/2;
  return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

calculateAreaOfATriangle(5,6,7);
