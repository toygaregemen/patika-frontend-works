// ********** DOM Icinden Oge Secimi **********

// let h2 = document.getElementsByTagName('div');

let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi";
console.log(title.innerHTML);

let link = document.querySelector('ul#list>li>a');
link.innerHTML += ' degisti';
console.log(link.innerHTML);
link.style.color = "blue";
link.style.background = "yellow";
link.classList.add("btn");