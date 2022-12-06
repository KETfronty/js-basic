//Task 1

function unique(arr) {
    return Array.from(new Set(arr));
   
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  ( unique(values) ); // Hare, Krishna, :-O

  //task 2
  function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
    
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );
  // task 3
  let messages = [
    {text: "Привіт", from: "Іван"},
    {text: "Як справи?", from: "Іван"},
    {text: "До зустрічі", from: "Аліса"}
  ];
  
  let readMessages = new WeakSet();