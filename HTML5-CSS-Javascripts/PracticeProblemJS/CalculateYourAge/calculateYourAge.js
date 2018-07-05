//// TODO: comments
// https://www.calculatestuff.com/miscellaneous/age-calculator


var currentDate = new Date("8 20 2018");
var birthDate = new Date("6 4 2014");

function calculateYourAge(crDate, bDate) {

  // declare variables
  var current_Day = crDate.getDate();
  var current_Month = crDate.getMonth();
  var current_Year = crDate.getFullYear();
  var birth_Day = bDate.getDate();
  var birth_Month = bDate.getMonth();
  var birth_Year = bDate.getFullYear();

  //Inner functions
  /*
  This function produces the number of day in that particular month base on the
  input of month and Years
  I created this function because of the leap year issue
  */
  function howManyDaysInThatMonth(months, tYear) {
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // In a leap year, Feburary has 29 days
    if (tYear % 4 == 0) {
      monthLength[1] = 29;
    }
    return monthLength[months];
  }
  /*
  This function converts numbers of days into week. I took precation and certain
  that number of days will always be less than 31 hences will not reach to more than a month
  due to the calculation of age_year and age_month
  */
  function convertDaysToWeek(days) {
    return [days % 7, Math.floor(days / 7)];
  }

  //Calculate the age_year and age_month
  //These calculations depend on the current_Month and birth_Month
  /*
    ** If the current month is less than the birth month:
        It means you do not have the birthday yet, then your age is still -1 from the age calculation


  */
  var age_year = current_Month <= birth_Month ? current_Year - birth_Year - 1 : current_Year - birth_Year;
  // If the birth month is the same as the current month, and the current year is the same
  // as the birth year, the age year is equal to ZERO not -1
  age_year = age_year == -1 ? 0 : age_year;
  var age_month = current_Month <= birth_Month ? (11 - birth_Month) + current_Month : current_Month - birth_Month - 1;
  age_month = age_year == 0 ? 0 : age_month;

  var day_count;
  var age_week;
  var age_days;


  if (birth_Day > current_Day) {

    let previousMonth = current_Month - 1 == -1 ? 11 : current_Month - 1;
    let yr = current_Month - 1 == -1 ? current_Year - 1 : current_Year;
    day_count = (howManyDaysInThatMonth(previousMonth, yr) - birth_Day) + current_Day;
  } else {
    age_month++;
    day_count = current_Day - birth_Day;
  }

  age_week = convertDaysToWeek(day_count)[1];
  age_days = convertDaysToWeek(day_count)[0];
  return [age_year, age_month, age_week, age_days];
}

var result = calculateYourAge(currentDate, birthDate);

console.log("You are " + result[0] + " Years, " + result[1] + " Months, " + result[2] + " Weeks, and " + result[3] + " Days Old.");
