/* Algoritma 
1. Membuat variabel untuk menampung angka binary
2. Membuat variabel untuk menampung kata binary yang berasal dari konversi angka binary ke string
3. Membuat variabel untuk menampung kata desimal
4. Membuat variabel untuk menampung angka desimal
5. Mengambil digit paling kanan dari angka binary satu per satu sampai dengan angka binary paling kiri dan dimasukkan ke variabel kata desimal
6. Melakukan perhitungan dari kata desimal dimana setiap digit akan dikalikan dengan 2 pangkat dari urutan digit dan setiap hasil perkaliannya ditambahkan
*/


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
