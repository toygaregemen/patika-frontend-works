// ********** prompt ile Kullanicidan Bilgi Almak **********

let fullName = prompt('Lutfen Adinizi Giriniz: ', 'Isim Soyisim');

let greeting = document.querySelector('.baslik');

greeting.innerHTML = `${greeting.innerHTML} <small style ="color:red">${fullName}</small>`;
