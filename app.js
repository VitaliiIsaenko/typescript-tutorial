var el = this.document.getElementById("content");
var User = (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var tom = new User("Том", 29);
el.innerHTML = "Имя: " + tom.name + " возраст: " + tom.age;
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
el.innerHTML += add(5, 6);
el.innerHTML += " " + add("4", "5");
//# sourceMappingURL=app.js.map