var arr = [10, 20, 30];

// // Impure Function
// function append(dataArr, item) {
//     dataArr[dataArr.length] = item;
//     return dataArr;
// }

// Pure Function
function append(dataArr, item) {
    var rArr = [...dataArr];
    rArr[rArr.length] = item;
    return rArr;
}

var newArr1 = append(arr, 40);
console.log("New Array 1", newArr1);     // Expected: [10, 20, 30, 40]

var newArr2 = append(arr, 50);
console.log("New Array 2", newArr2);     // Expected: [10, 20, 30, 50]