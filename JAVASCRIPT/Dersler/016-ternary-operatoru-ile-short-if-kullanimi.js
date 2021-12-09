// ********** Ternary Operatoru ile Short if Kullanimi **********


// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("Kullanici Bilginizi Yaziniz: ");
let info = document.querySelector("#info");

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadi :("}`;