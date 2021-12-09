// ********** liste icindeki ogeye ulasmak veya yeni oge eklemek **********

let lastChild = document.querySelector("ul#liste>li:last-child");
lastChild.innerHTML = "son oge degisti";

let firstChild = document.querySelector("ul#liste>li:first-child");
firstChild.innerHTML = "ilk oge degisti";

let ulDOM = document.querySelector("ul#liste");
let liDOM = document.createElement('li');

liDOM.innerHTML = "Kendi Olusturdugumuz Oge";

ulDOM.append(liDOM); // en sona ekler

ulDOM.prepend(liDOM); // en basa ekler