
/*
*/

const today = new Date("07 02 2018");
var testDate = new Date("08 06 2017");

const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calculateDatesToDays(date) {

  let year = date.getFullYear();
  let month = date.getMonth();
  let numDate = date.getDate();
  let m;
  let days = 0;
  monthLength[1] = year % 4 == 0 ? 29 : 28;

  for (m = 0; m < month; m++) {
    days += monthLength[m];
  }
  return days + numDate;

}

var monthCount = 0;
var yrCount=0;

function calculateYourAge(date){
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDate = today.getDate();

  let year = date.getFullYear();
  let month = date.getMonth();
  let numDate = date.getDate();

  while(year!=currentYear && currentMonth!=month) {
    console.log(month+" "+numDate+" "+year+" "+monthCount+" "+yrCount);
      if (month<11) {
        month++; monthCount++;
      }
      else {
        year++;
      }
      if (monthCount>11) {yrCount++; monthCount = 0;}
  }

}

calculateYourAge(testDate);
