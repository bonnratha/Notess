/*
Write a JavaScript program to display the current day and time in the following
format.
Sample Output : Today is : Friday.
Current time is : 04 PM : 50 : 22

Hints: Date() reference;

https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

*/


//Declare constants
/* I declare them contansts because these values won't be changed
Current Date and Time
*/
const today = new Date();
const dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthList = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//const testday = new Date("January 1, 2012 11:00:9");
//I created two functions that return string results


function intFormatLength(i, len) {
  var ints = i.toString(); //convert to string
    if (ints.length<len)
      { ints = "0"+ ints; }
    else { ints = ints;}
  return ints;
}

/*
DisplayDate funtion
*/
function displayDate(date) {
  var day = date.getDay();
  var dayNum = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var NameOfDay = dayList[day - 1];
  var NameOfMonth = monthList[month];
  // console.log(date.toDateString()); This conver to this format: Thu Jun 28 2018
  return "Today is : " + NameOfDay + ", " + NameOfMonth + " " + dayNum + ", " + year;
}

function displayTime(date) {

  var hour = date.getHours();
  var min = intFormatLength(date.getMinutes(),2);
  var sec = intFormatLength(date.getSeconds(),2);

  function AMorPM(hr) {
    if (hr <= 11) {
      hr = intFormatLength(hr,2);
      return hr = hr + " AM";
    } else if (hr == 12) {
      hr = intFormatLength(hr,2);
      return hr = hr + " PM";
    } else if (hr == 24) {
      hr = hr - 12;
      hr = intFormatLength(hr,2);
      return hr = hr + " AM";
    } else {
      hr = hr - 12;
      hr = intFormatLength(hr,2);
      return hr = hr + " PM";
    }
  }
  var AMorPMHour = AMorPM(hour);
  return "Current time is : " + AMorPMHour + " : " + min + " : " + sec;
}

document.write(displayDate(today)+"<br/>\n");
document.write(displayTime(today));
