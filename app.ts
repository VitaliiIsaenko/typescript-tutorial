var el = this.document.getElementById("content");

class User {
    name: string;
    age: number;
    constructor(_name: string, _age: number) {

        this.name = _name;
        this.age = _age;
    }
}
var tom: User = new User("Том", 29);
el.innerHTML = "Имя: " + tom.name + " возраст: " + tom.age;


function add(first: number, second: number): number;
function add(first: string, second: string): string;
function add(first: number | string, second: number | string): number | string {
    let result : string | number;
    if (typeof (first) === "string" && typeof (second) === "string") {
        result = <string>first + <string>second;
    }
    else {
        result = <number>first + <number>second;
    }
    return result;
}

el.innerHTML += " " + add(5, 6);
el.innerHTML += " " + add("4", "5");


function sum (x: number, y: number): number {
    return x + y;
};
function subtract (a: number, b: number): number {
    return a - b;
};
 
let op: (x:number, y:number) => number;
 
op = sum;
console.log(op(2, 4));  // 6
 
op = subtract;
console.log(op(6, 4));  // 2