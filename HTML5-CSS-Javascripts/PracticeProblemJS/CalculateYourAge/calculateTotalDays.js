var today = new Date("7 6 2018");
var myBday = new Date("7 19 1993");

function calculateTotalAgeInDays(bDate, current) {

var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*
This function calculates the total days of a given dates starting from Jan 1 of that year.
*/
  function calculateTotalDays(fullDate) {

    monthLength[1] = fullDate.getFullYear() % 4 == 0 ? 29 : 27;
    let i = 0;
    let totalDayInThatYear = 0;
    while (i < fullDate.getMonth()) {
      totalDayInThatYear += monthLength[i];
      i++;
    }
    return totalDayInThatYear += fullDate.getDate();
  }


  let daysOfFullYear = 0;
  let birth_year = bDate.getFullYear();
  let current_year = current.getFullYear();
  if ((birth_year + 1) == current_year) {
    daysOfFullYear = 0;
  } else {
    while ((birth_year + 1) < current_year) {
      birth_year++;
      var daysInAyear = birth_year % 4 == 0 ? 366 : 365;
      daysOfFullYear += daysInAyear;
    }
  }
  var totalDaysInBirthYear = bDate.getFullYear() % 4 == 0 ? 366 : 365;
  return daysOfFullYear + totalDaysInBirthYear - calculateTotalDays(bDate) + calculateTotalDays(current);
}
