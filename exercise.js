let numBinaary = 11111;
let binaryString = numBinaary.toString();
let decimalString = "";
for (let i = binaryString.length-1; i >= 0; i--) {
    decimalString += binaryString[i];
    
}
let decimalNumber = 0;
for (let j = 0; j < decimalString.length; j++) {
    decimalNumber += Math.pow(2, j) * decimalString[j];
}
console.log(decimalNumber);
