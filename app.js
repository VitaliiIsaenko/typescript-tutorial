var el = this.document.getElementById("content");
var User = /** @class */ (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var tom = new User("Tom", 29);
el.innerHTML = "Name: " + tom.name + " Age: " + tom.age;
function add(first, second) {
    var result;
    if (typeof (first) === "string" && typeof (second) === "string") {
        result = first + second;
    }
    else {
        result = first + second;
    }
    return result;
}
el.innerHTML += " " + add(5, 6);
el.innerHTML += " " + add("4", "5");
function sum(x, y) {
    return x + y;
}
;
function subtract(a, b) {
    return a - b;
}
;
var op;
op = sum;
console.log(op(2, 4));
op = subtract;
console.log(op(6, 4));
