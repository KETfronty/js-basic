// Завдання 1
ucFirst("василь") == "Василь";

let ucFirst = (str) => {
  if (str === "") return str;
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
};
// Завадння 3

function checkSpam(str) {
  let newStr = str.toLowerCase();
  return newStr.includes("viagra") || newStr.includes("xxx");
}

//Завдання 4

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1) + "...";
  }else{
    str
  }
  return str;
}

//Завдання 5
function extractCurrentValue(str){
    return Number(str.slice(1));
}
