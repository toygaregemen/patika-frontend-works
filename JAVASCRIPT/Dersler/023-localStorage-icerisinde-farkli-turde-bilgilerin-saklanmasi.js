// Local Storage Islemleri

let user = {userName: "toygaregemen", isActive: true};

localStorage.setItem('userInfo', JSON.stringify(user));

// let userInfo = localStorage.getItem('userInfo');
// userInfo = JSON.parse(userInfo);

let userInfo = JSON.parse(localStorage.getItem('userInfo'));

