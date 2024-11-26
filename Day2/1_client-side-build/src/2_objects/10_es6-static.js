// Create a BankAccount Class with bankName and accName as data properties and create accessor properties 
// to access the data outside using instance.

// class BankAccount {
//     constructor(bankName, accName) {
//         this._bankName = bankName;
//         this._accName = accName;
//     }

//     get BankName() {
//         return this._bankName;
//     }

//     set BankName(bankName) {
//         this._bankName = bankName;
//     }

//     get AccountName() {
//         return this._accName;
//     }
// }

// var a1 = new BankAccount("HDFC", "Manish");
// console.log(a1.BankName);
// console.log(a1.AccountName);

// var a2 = new BankAccount("HDFC", "Abhijeet");
// console.log(a2.BankName);
// console.log(a2.AccountName);

// console.log("\nAfter changing the BankName");
// a1.BankName = "SBI";

// console.log(a1.BankName);
// console.log(a1.AccountName);

// console.log(a2.BankName);
// console.log(a2.AccountName);

// -------------------------------------------------------------

class BankAccount {
    static _bankName = "HDFC";

    constructor(accName) {
        this._accName = accName;
    }

    // Accessor Property
    get BankName() {
        return BankAccount._bankName;
    }

    static set BankName(bankName) {
        BankAccount._bankName = bankName;
    }

    get AccountName() {
        return this._accName;
    }
}

var a1 = new BankAccount("Manish");
console.log(a1.BankName);
console.log(a1.AccountName);

var a2 = new BankAccount("Abhijeet");
console.log(a2.BankName);
console.log(a2.AccountName);

console.log("\nAfter changing the BankName");
BankAccount.BankName = "SBI";

console.log(a1.BankName);
console.log(a1.AccountName);

console.log(a2.BankName);
console.log(a2.AccountName);