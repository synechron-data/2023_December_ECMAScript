function CL_Counter(by = 1) {
    var count = 0;
    var interval = by;

    return {
        next: function () {
            return count += interval;
        },
        prev: function () {
            return count -= interval;
        }
    };
}

function FN_Counter(by = 1) {
    this._count = 0;
    this._interval = by;

    this.next = function () {
        return this._count += this._interval;
    }
    this.prev = function () {
        return this._count -= this._interval;
    }
}

const PT_Counter = (function () {
    function PT_Counter(by = 1) {
        this._count = 0;
        this._interval = by;
    }

    PT_Counter.prototype.next = function () {
        return this._count += this._interval;
    }

    PT_Counter.prototype.prev = function () {
        return this._count -= this._interval;
    }

    return PT_Counter;
})();

class Counter {
    constructor(by = 1) {
        this._count = 0;
        this._interval = by;
    }

    next() {
        return this._count += this._interval;
    }

    prev() {
        return this._count -= this._interval;
    }
}

(function(){
    var clStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = CL_Counter(i);      
    }
    var clEnTime = new Date();

    var fnStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new FN_Counter(i);      
    }
    var fnEnTime = new Date();

    var ptStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new PT_Counter(i);      
    }
    var ptEnTime = new Date();

    var cStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new Counter(i);      
    }
    var cEnTime = new Date();

    var clTime = clEnTime.getTime() - clStTime.getTime();
    var fnTime = fnEnTime.getTime() - fnStTime.getTime();
    var ptTime = ptEnTime.getTime() - ptStTime.getTime();
    var cTime = cEnTime.getTime() - cStTime.getTime();

    console.log("Closure: ", clTime, "ms");
    console.log("Function: ", fnTime, "ms");
    console.log("Prototype: ", ptTime, "ms");
    console.log("Class: ", cTime, "ms");
})();