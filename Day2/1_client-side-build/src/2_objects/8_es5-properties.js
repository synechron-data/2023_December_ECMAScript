const Person = (function() {
    function Person(name, age) { 
        // Data Property
        this._name = name;
        this._age = age;
    }

    // Accesor Property
    Object.defineProperty(Person.prototype, "Name", {
        get: function() {
            return this._name;
        },
        set: function(name) {
            this._name = name;
        }
    });

    Object.defineProperty(Person.prototype, "Age", {
        get: function() {
            return this._age;
        },
        set: function(age) {
            this._age = age;
        }
    });

    return Person;
})();

var p1 = new Person("Manish", 0);
console.log(p1.Name);                   // Get
console.log(p1.Age);                    // Get

p1.Name = "Abhijeet";                   // Set
p1.Age = 30;                            // Set

console.log(p1.Name);                   // Get
console.log(p1.Age);                    // Get