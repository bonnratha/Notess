/*Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php
*/
const today = new Date();

function convertDD(date) {
  if (date < 10) {
    date = "0" + date;
    return date;
  } else {
    return date;
  }
}

function convertMM(month) {
  if ((month + 1) < 10) {
    month++;
    month = "0" + month;
    return month;
  } else {
    return month++;
  }
}


function mainConverter(fullDay) {
  let yyyy = fullDay.getFullYear();
  let dd = convertDD(fullDay.getDate());
  let mm = convertMM(fullDay.getMonth());
  return mm + "-" + dd + "-" + yyyy + ", " + mm + "/" + dd + "/" + yyyy + " or " + dd + "-" + mm + "-" + yyyy + ", " + dd + "/"+ mm + "/" + yyyy;
}

console.log(mainConverter(today));
