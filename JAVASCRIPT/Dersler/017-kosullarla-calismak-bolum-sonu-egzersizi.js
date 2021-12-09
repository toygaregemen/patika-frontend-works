// ********** Kosullarlar Calismak Bolum Sonu Egzersizi **********

/*
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir.
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et.
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun
4- ff class bilgisi tex-danger, digerlerinin ise text-primary olsun
*/

let info = document.querySelector("#info");

let examGrade = prompt("Puani Girin:");

if (examGrade >= 90 && examGrade <= 100){
    info.classList.add("text-primary");
    info.innerHTML = `Tebrikler! Puaniniz ${examGrade}. AA ile geçtiniz! :)`;
}
else if (examGrade >= 85 && examGrade <= 89){
    info.classList.add("text-primary");
    info.innerHTML = `Tebrikler! Puaniniz ${examGrade}. BA ile geçtiniz! :)`;
}
else if (examGrade >= 80 && examGrade <= 84){
    info.classList.add("text-primary");
    info.innerHTML = `Tebrikler! Puaniniz ${examGrade}. BB ile geçtiniz! :)`;
}
else if (examGrade >= 75 && examGrade <= 79){
    info.classList.add("text-primary");
    info.innerHTML = `Tebrikler! Puaniniz ${examGrade}. CB ile geçtiniz! :)`;
}
else if (examGrade >= 70 && examGrade <= 74){
    info.classList.add("text-primary");
    info.innerHTML = `Tebrikler! Puaniniz ${examGrade}. CC ile geçtiniz! :)`;
}
else if (examGrade >= 65 && examGrade <= 69){
    info.classList.add("text-primary");
    info.innerHTML = `Tebrikler! Puaniniz ${examGrade}. DC ile geçtiniz! :)`;
}
else if (examGrade >= 60 && examGrade <= 64){
    info.classList.add("text-primary");
    info.innerHTML = `Tebrikler! Puaniniz ${examGrade}. DD ile geçtiniz! :)`;
}
else if (examGrade >= 50 && examGrade <= 59){
    info.classList.add("text-primary");
    info.innerHTML = `Tebrikler! Puaniniz ${examGrade}. FD ile geçtiniz! :)`;
}
else if (examGrade >= 0 && examGrade <= 49){
    info.classList.add("text-danger");12
    info.innerHTML = `Uzgunum! Puaniniz ${examGrade}. FF ile bu dersten kaldiniz! :(`;
}
else {
    info.classList.add("text-danger");
    info.innerHTML = "Hatalı Not Girisi!"
};