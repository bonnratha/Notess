

var days = 9763;
const weekToMonth_conversion = 4.344524;
const DayToYearConversion = 0.00273719;

function convertDaysToYearMonthDay(day) {
  var yrCount = Math.floor(day*DayToYearConversion);
  var monthCount = Math.floor(((day*DayToYearConversion)%1)*12);



  var weekCount = (((((day*DayToYearConversion)%1)*12)%1)*weekToMonth_conversion);
  var dayCount = ((((((day*DayToYearConversion)%1)*12)%1)*weekToMonth_conversion)%1);

  return day+" days are equivalent to "+yrCount+" Years, "+monthCount+" Months, "+weekCount+" Weeks, and "+dayCount+" Days.";
}

console.log(convertDaysToYearMonthDay(days));
