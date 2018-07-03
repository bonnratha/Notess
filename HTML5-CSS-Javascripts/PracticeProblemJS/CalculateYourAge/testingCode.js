var currentDate = new Date("7 3 2018");
var birthDate = new Date("8 6 2017");

var current_Day = currentDate.getDate();
var current_Month = currentDate.getMonth();
var current_Year = currentDate.getFullYear();

var birth_Day = birthDate.getDate();
var birth_Month = birthDate.getMonth();
var birth_Year = birthDate.getFullYear();

var yearCount = 0;
var monthCount = 0;
var d = 0;

while (current_Year!=birth_Year && current_Month!=birth_Month) {
birth_Month++;
monthCount++;

  if(birth_Month=11) {
    birth_Year++;
    birth_Month = 0;
  }
  if (monthCount = 11) {
    yearCount++;
  }

}

console.log(yearCount);

/**
birth_Month++;
m++;
    if (birth_Month = 11) {
      birth_Year++;
      birth_Month = 0;
    }
    if (m = 11) {
      yearCount++;
    }
    if (current_Day < birth_Day) {
      d = 20;
      current_Day = birth_Day;
    } else if (current_Day > birth_Day) {
      d = 15;
      current_Day = birth_Day;
    } else {
      d = 0;
      current_Day = birth_Day;
    }
  */
