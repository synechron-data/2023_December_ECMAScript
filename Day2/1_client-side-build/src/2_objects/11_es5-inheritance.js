var Vehicle = (function () {
    function Vehicle(make) {
        this._make = make || "Honda";
    }

    Vehicle.prototype.start = function () {
        return `${this._make}, engine started`;
    }

    return Vehicle;
})();

// var v = new Vehicle("Ford");
// console.log(v);
// console.log(v.start());
// console.log(v.toString());

var FourWheeler = (function () {
    function FourWheeler(make, model) {
        Vehicle.call(this, make);
        this._model = model || "Civic";
    }

    FourWheeler.prototype = Object.create(Vehicle.prototype);
    FourWheeler.prototype.constructor = FourWheeler;

    FourWheeler.prototype.start = function () { 
        var r = Vehicle.prototype.start.call(this);
        return `${r}, model is, ${this._model}`;
    }

    FourWheeler.prototype.move = function () { 
        return `Moving like, ${this._model}`;
    }

    return FourWheeler;
})();

var v = new FourWheeler("Ford", "Mustang");
console.log(v);
console.log(v.start());
console.log(v.move());
console.log(v.toString());