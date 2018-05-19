var el = this.document.getElementById("content");
var User = (function () {
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
el.innerHTML += " " + op(2, 5) + " is the result of addition";
op = subtract;
el.innerHTML += " " + op(4, 2) + " is the result of substraction";
//# sourceMappingURL=app.js.map