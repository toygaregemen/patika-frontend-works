// Break & Continue

const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit'
];


let counter = 0;

for (; counter < 10; counter++) {
    if (counter === 5) {break}; // 5'e gelince döngü kırıldı.
    console.log(counter);
};


for (; counter < 10; counter++) {
    if (counter === 5) {continue}; // 5'i pas geçti.
    console.log(counter);
};

// ---------------------------------------------------------------------------

const UL_DOM = document.querySelector('#userList');

let index = 0;

for (; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == 'dolor') {break}; // dolor'a gelince döngü biter.
    let LI_DOM = document.createElement('li');
    LI_DOM.innerHTML = LOREM_LIST[index];
    UL_DOM.appendChild(LI_DOM);
};

index = 0;

for (; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == 'dolor') {continue}; // dolor'u pas geçer.
    let LI_DOM = document.createElement('li');
    LI_DOM.innerHTML = LOREM_LIST[index];
    UL_DOM.appendChild(LI_DOM);
};

