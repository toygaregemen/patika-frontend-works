
let userNameCol = document.querySelector(".user-name");
let clockCol = document.querySelector(".clock");

function startTime(){
    let today = new Date();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getDay();

    switch (day){
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
    };
    
    function checkTime(i){
        if (i < 10) {i = '0' + i};
        return i;
    };

    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);

    clockCol.innerHTML = `${hour}:${minute}:${second} ${day}`;
    
    let t = setTimeout(startTime,500);

}



let userName = prompt("Adınız Nedir?");

    if (userName.length === 0){
        userNameCol.innerHTML = `Merhaba, Guest! Hoş geldin!`;
    }
    else{
        userNameCol.innerHTML = `Merhaba, ${userName}! Hoş geldin!`;
    };