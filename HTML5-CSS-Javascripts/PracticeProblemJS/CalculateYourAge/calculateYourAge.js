

//// TODO: comments
// https://www.calculatestuff.com/miscellaneous/age-calculator


var currentDate = new Date("7 4 2018");
var birthDate = new Date("2 29 2012");

function calculateYourAge(crDate, bDate){

  // declare variables
  var current_Day = crDate.getDate();
  var current_Month = crDate.getMonth();
  var current_Year = crDate.getFullYear();

  var birth_Day = bDate.getDate();
  var birth_Month = bDate.getMonth();
  var birth_Year = bDate.getFullYear();

  //Inner functions
  function howManyDaysInThatMonth (months, tYear)
  {
    let monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
    // In a leap year, Feburary has 29 days
    if(tYear%4==0) {monthLength[1] = 29;}
    return monthLength[months];
  }

  function convertDaysToWeek (days) {
    return [days%7, Math.floor(days/7)];
  }

  //Calculate the year and monthCount
  var age_year = current_Month<birth_Month ? current_Year-birth_Year-1 : current_Year-birth_Year;
  var age_month = current_Month<birth_Month ? (11-birth_Month)+current_Month : current_Month-birth_Month-1;
  var day_count;
  var age_week;
  var age_days;



    if (birth_Day>current_Day) {

    let previousMonth = current_Month-1==-1 ? 11 : current_Month-1;
    let yr = current_Year-1;
     day_count = (howManyDaysInThatMonth(previousMonth, yr)-birth_Day)+current_Day;
    }
    else{
    age_month++;
    day_count = current_Day - birth_Day;
    }

    age_week = convertDaysToWeek(day_count)[1];
    age_days = convertDaysToWeek(day_count)[0];

    return [age_year, age_month,age_week, age_days];
}

var result = calculateYourAge(currentDate, birthDate);
console.log("You are " +result[0]+" Years, "+result[1]+" Months, "+result[2]+" Weeks, and "+result[3]+" Days.");
