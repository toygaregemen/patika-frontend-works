// Object ve array destructuring nasil kullanilir

// Object Destructuring:

let settings  = {
    userName: "loremIpsum",
    password: "badPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
};

// Obje icindeki bilgilerin tek seferde cikartilmasi
let userName1 = settings.userName;
console.log(userName1);

// Rename && destructuring
let {userName: user, password, isActive, ip:serverIP, serverName} = settings;
console.log(user, password, isActive, serverIP, serverName);
console.log(settings);

// Obje icindeki bazi bilgilerin cikartilmasi
let {userName: userName2, password: password2, isActive: isActive2, ...newSettings} = settings;
console.log(userName2);
console.log(password2);
console.log(isActive2);
console.log(newSettings); // ip, servername

// Objenin destructuring ile kopyalanmasi

// HATALI!!!

// let settings2 = settings;
// settings2.userName = "Changed Info";
// console.log("settings :", settings);
// console.log("settings2 :", settings2);

// DOGRUSU :)

let settings2 = {...settings};
settings2.userName = "Changed Info";
console.log("settings :", settings);
console.log("settings2 :", settings2);


// Array Object kopyalama ile ayni... 
let score = [100, 200, 300, 400];
let [score1, score2, ...otherScore] = score;
console.log(score1,score2,otherScore);

let copyOfScore = [...score];
copyOfScore[0] = 1000;
console.log(score);
console.log(copyOfScore);