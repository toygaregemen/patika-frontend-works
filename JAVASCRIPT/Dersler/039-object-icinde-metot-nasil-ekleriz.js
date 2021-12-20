//  Object icinde metot nasil ekleriz

let user1 = {
    firstName: "Toygar",
    lastName: "Egemen",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function() {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName.toUpperCase()}`
    }
};

console.log(user1);
console.log(user1.shortName());