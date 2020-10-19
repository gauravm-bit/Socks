const prompt = require('prompt-sync')({ sigint: true });
//prompt-sync module used for handling input and output

let number = prompt('Enter the number of socks :')
//number of socks

let arr = [];
// to store arrays

for (i = 0; i < number; i++) {
    element = prompt('Enter the elements of the socks :')
    if (element) {
        arr.push(element)
    }
}
// storing the result in the array 

let sortedArr = arr.sort()
//sorting the array

let pairs = 0;
// declaring initial values of pairs to be zero

for (i = 0; i < number; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
        pairs++;
    }
    i += 1;
}
//finding out the pairs

console.log("the pairs of socks which can be sold are "+pairs);
// finding pairs by comparing the elements

