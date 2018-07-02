const testday = new Date("March 1, 2012");


// Declare some variables and values
var tDate = testday.getDate();
var tMonth = testday.getMonth();
var tYear = testday.getFullYear();
console.log(tDate+" "+ tMonth+" "+tYear);


var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
if(tYear%4==0) {monthLength[1] = 29;}

function calculateTotalDays(months)
{
  let i = 0;
  var dayss = 0;
  while (i<months-1){
    dayss += monthLength[i];
    i++; }
  console.log(dayss);
}

calculateTotalDays(tMonth);
