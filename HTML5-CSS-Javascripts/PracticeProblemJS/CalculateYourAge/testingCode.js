var currentDate = new Date("7 3 2018");
var birthDate = new Date("8 1 2017");

var current_Day = currentDate.getDate();
var current_Month = currentDate.getMonth();
var current_Year = currentDate.getFullYear();

var birth_Day = birthDate.getDate();
var birth_Month = birthDate.getMonth();
var birth_Year = birthDate.getFullYear();

var age_year;
var age_month;
var age_week;
var age_days;
// Define the constraint of the birthdate


function howManyDaysInThatMonth (months, tYear)
{

  var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
  if(tYear%4==0) {monthLength[1] = 29;}
  var dayss = monthLength[months];
  return dayss;
}

function convertDaysToWeek (days) {
  var dd = days%7;
  var ww = Math.floor(days/7);
  var result = [dd, ww];
  return result;

}



if (current_Month<birth_Month) {
  var dayssss;
  let a;
  //calculate the year
  age_year = current_Year-birth_Year-1;

  //calculate the monthCount
  age_month = (11-birth_Month)+current_Month;

  if (birth_Day>current_Day) {
  //calculate the day
   a = howManyDaysInThatMonth(current_Month-1, current_Year);

}
else{
  age_month++;
  a = current_Day - birth_Day-1;

}
dayssss = convertDaysToWeek((a-birth_Day)+current_Day);
age_week = dayssss[1];
age_days = dayssss[0];

}



console.log(age_year+" Years, "+age_month+" Months, "+age_week+" Weeks, and "+age_days+" Days.");
