/* 
##Algoritma 
1. Membuat variabel untuk menampung angka binary
2. Membuat variabel untuk menampung kata binary yang berasal dari konversi angka binary ke string
3. Membuat variabel untuk menampung kata desimal
4. Membuat variabel untuk menampung angka desimal
5. Mengambil digit paling kanan dari angka binary satu per satu sampai dengan angka binary paling kiri dan dimasukkan ke variabel kata desimal
6. Melakukan perhitungan dari kata desimal dimana setiap digit akan dikalikan dengan 2 pangkat dari urutan digit
7. Hasil perhitungan kata desimal dimasukkan ke variabel angka desimal dan setiap perhitungannya ditambahkan sampai dengan bagian terakhir dari kata desimal

##Pseudocode
SET numBinary to any binary number
SET binaryString as converted string from numBinary number
SET decimalString to empty string
SET decimalNumber to 0
FOR i from binaryString length to 0 decrement by 1
    COMPUTE decimalString as decimalString + binaryString[index i]
END FOR
FOR j from 0 to decimalString length increment by 1
    COMPUTE decimalNumber as the exponent of 2, index of j * index of j
END FOR
DISPLAY decimalNumber
*/


let numBinary = 11111;
let binaryString = numBinary.toString();
let decimalString = "";
for (let i = binaryString.length-1; i >= 0; i--) {
    decimalString += binaryString[i];
    
}
let decimalNumber = 0;
for (let j = 0; j < decimalString.length; j++) {
    decimalNumber += Math.pow(2, j) * decimalString[j];
}
console.log(decimalNumber);
