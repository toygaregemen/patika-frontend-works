// ********** Kosullarla Calismak **********

let username = prompt("Kullanici Adinizi Giriniz: ")
// eger kullanici bilgisi varsa ekrana ismini yazdir, yoksa bilgi tok yazdir

if (username.length > 0 ){ // if kismi true cikarsa calisir.
    console.log(`Kullanici Bilginiz: ${username}`);
}
else{ // if kismi false cikarsa bu blok calisir.
    console.log("Bilgi Yok");
};