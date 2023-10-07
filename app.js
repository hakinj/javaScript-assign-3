function numberOccurences(arr) {
    // declare a variable that stores an empty object
    let result = {};
    arr.forEach(ele => {
        if (result[ele]) {
            result[ele] +=1;

        } else {
             result[ele] = 1;

        }
    });
    return result;
}
let x = [1, 2, 2, 3, 3, 4, 4, 5, 5, 5];
console.log(numberOccurences(x));

