

var today = new Date("07 19 2017");
var myBday = new Date("02 2 2017");
const testday = new Date("March 1, 2012 11:00:9");

// Declare some variables and values
var tDate = today.getDate();
var tMonth = testday.getMonth();
var tYear = today.getFullYear();

var bDate = myBday.getDate();
var bMonth = myBday.getMonth();
var bYear = myBday.getFullYear();

var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];


// var dd = myBday.getFullYear() % 4 == 0 ? 366 : 365;

if(tYear%4==0) {monthLength[1] = 29;}

function calculateTotalDays()
{
  let i = 0;
  var dayss = 0;
  while (i<tMonth){
    dayss += monthLength[i];
    i++; }
  console.log(dayss);
}

calculateTotalDays();
