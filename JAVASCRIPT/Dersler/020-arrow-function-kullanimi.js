// ********** Arrow Function Kullanimi **********

function hello(firstName) {
    console.log(`Merhaba ${firstName}`);
};

hello("JavaScript");

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`);}
helloFuncV1("helloFuncV1");

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`);
helloFuncV2("helloFuncV2");

const helloFuncV3 = (firstName, lastName) => 
console.log(`Merhaba ${firstName} ${lastName}`);
helloFuncV3("helloFuncV3", 'Lastname');

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`;
    console.log(info);
    return info;
};
helloFuncV4("helloFuncV4", 'Lastname');