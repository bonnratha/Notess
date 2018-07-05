

var today = new Date("07 19 2018");
var myBday = new Date("7 12 2017");
const testday = new Date("March 1, 2012 11:00:9");
var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];


// var dd = myBday.getFullYear() % 4 == 0 ? 366 : 365;



function calculateTotalDays(fullDate)
{
  let cal_date = fullDate.getDate();
  let cal_month = fullDate.getMonth();
  let cal_year = fullDate.getFullYear();

   monthLength[1] = cal_year%4 ==0 ? 29: 27;

  let i = 0;
  let dayss = 1;
  while (i<cal_month){
    dayss += monthLength[i];
    i++; }
  return dayss += cal_date;
}

function calculateTotalAgeInDays (bDate, current) {
  let yy = 0;
  let y1 = bDate.getFullYear();
  let y2 = current.getFullYear();
  while (y1<=y2) {

    y1++;
    var b = y1 %4 == 0? 366 : 365;
    yy += b;
  }



  var DayInBYear = bDate.getFullYear() % 4 == 0 ? 366 : 365;
  return yy + DayInBYear-calculateTotalDays(bDate)+calculateTotalDays(current);



}

console.log(calculateTotalAgeInDays(myBday, today));
