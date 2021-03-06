var el = this.document.getElementById("content");

class User {
    private _id: number;
    private _name: string;
    private _age: number;
    constructor(_name: string, _age: number) {

        this.name = _name;
        this.age = _age;
    }
    public set name(name: string) {
        this._name = name;
    }
    public get name(): string {
        return this._name;
    }

    public set age(age: number) {
        this._age = age;
    }
    public get age(): number {
        return this._age;
    }
}
var tom: User = new User("Tom", 29);
el.innerHTML = "Name: " + tom.name + " Age: " + tom.age;


function add(first: number, second: number): number;
function add(first: string, second: string): string;
function add(first: number | string, second: number | string): number | string {
    let result: string | number;
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


function sum(x: number, y: number): number {
    return x + y;
};
function subtract(a: number, b: number): number {
    return a - b;
};

let op: (x: number, y: number) => number;

op = sum;
el.innerHTML += ` ${op(2, 5)} is the result of addition`;

op = subtract;
el.innerHTML += ` ${op(4, 2)} is the result of substraction`;

function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
    let result = operation(x, y);
    return result;
}

el.innerHTML += `<br/> ${mathOp(5, 5, (first, second) => first * second)} `;
el.innerHTML += ` ${mathOp(6, 5, op)} `