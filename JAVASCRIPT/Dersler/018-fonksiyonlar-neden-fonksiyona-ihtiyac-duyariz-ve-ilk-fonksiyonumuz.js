// ********** Ilk Fonksiyonumuzu Tanimlamak **********

function helloWorld() {
    console.log('Hello, World!');
};

function hello() {
    console.log('Merhaba');
    helloWorld();
};

let userName = 'Toygarman';
let age = 29;

function userCheck(a,b) {
    if (userName && age >= 18) {
        info.innerHTML = "Ehliyet Alabilirsiniz.";
    }
    else if (!userName){
        info.innerHTML = "Kullanici Adiniz Yok.";
    }
    else if (!(age >= 18)) {
        info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz.";
    };
}

hello(); // Calistir

userCheck(userName,age);