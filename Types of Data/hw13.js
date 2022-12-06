//Task 1
let newDate = new Date(2012, 1, 20, 3, 12);
alert(newDate);

//TAsk 2
let date1 = new Date(2012, 0, 3); // 3 січня 2012
alert(getWeekDay(date1));
let weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"];
function getWeekDay(date) {
    return weekDays[date.getDay()]
}

//TAsk3

function getLocalDay(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}
alert(getLocalDay(date));
