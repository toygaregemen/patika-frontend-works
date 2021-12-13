// DOM Etkinlikleriyle Calismak

let greeting = document.querySelector('.baslik');

greeting.addEventListener('click', domClick);

function domClick() {
    console.log('Tiklandi');
    console.log(this.innerHTML = "Tiklandigi icin bilgi degisti.");
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
};