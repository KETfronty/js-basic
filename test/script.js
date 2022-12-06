
let date1 = new Date("12/05/2022");
let date2 = new Date("12/11/2021");
  
// To calculate the time difference of two dates
let Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
 //треба за допомогою рендом перебрати всы можливы варыанти слів
console.log(Difference_In_Days)