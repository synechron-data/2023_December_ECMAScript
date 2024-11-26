class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get Name() {
        return this._name;
    }

    set Name(name) {
        this._name = name;
    }

    get Age() {
        return this._age;
    }

    set Age(age) {
        this._age = age;
    }
}

var p1 = new Person("Manish", 0);
console.log(p1.Name);                   // Get
console.log(p1.Age);                    // Get

p1.Name = "Abhijeet";                   // Set
p1.Age = 30;                            // Set

console.log(p1.Name);                   // Get
console.log(p1.Age);                    // Get