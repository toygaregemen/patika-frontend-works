// ********** css class eklemek veya cikartmak **********

let greeting = document.querySelector('.baslik');

greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("newClass", "secondClass", "thirdClass");
greeting.classList.remove("title")
console.log(greeting.classList);