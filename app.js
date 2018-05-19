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
    if (typeof (first) === "string" && typeof (second) === "string") {
        return first + second;
    }
    else {
        return first + second;
    }
}
//# sourceMappingURL=app.js.map