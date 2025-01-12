// Constructor Function
function Person(name) { 
    this._name = name;

    this.getName = function() {
        return this._name;
    }

    this.setName = function(name) {
        this._name = name;
    }
}

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());

console.log(p1);
console.log(p2);

// 240 bytes (120 bytes for each object)