// for(let i=1; i<=3;i++){
//     let row=""
//     for(let j=1;j<=i; j++){
//     row+=j;
//     }
// console.log(row);
// }

// let n=6;
// for(let i=1; i<=n;i++){
//     let row=""
//     for(let j=1;j<=n-i+1; j++){
//     row+="*";
//     }
// console.log(row);
// }

//  ARRAY WITH NESTED LOOP


// const arr = [1, 2, 3,4,5];

// for (let i = 0; i < arr.length; i++) {
//     for (let j =  i+1; j < arr.length; j++) {
//         console.log(arr[i], arr[j]);
//     }
// }
// find the pair of the Array

// let arr=[1,2,3,9,4,5,6,8,7,7,9,6,8,8,];
// let target =14;
// let pair=[];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) {
//             // console.log("fined", i,j);
//             pair.push([i,j])
//             console.log(pair)
//         }
//     }
// }




// palindrome


// function palindrome(word){
//     let revered="";
//     for(let i = word.length - 1; i >= 0; i--){
//         revered+=word[i];
       
//     }
    
//  for(let i=0; i<=word.length; i++){
//          if(word[i] !== revered[i])   {
//             return false;
//          }
//         }
//         return true;
// }
// let add = "mom";
// console.log(palindrome(add)); 



// anagram question 


// function anagram(str1 ,str2){
// for (let i = 0; i < str1.length; i++) {
//     let found = false;
//     for (let j = 0; j < str2.length; j++) {
//         if (str1[i] === str2[j]) {
//             found = true;
//             break;
//         }
//     }
//     if (!found) return false;
// }
// }



// function diagonalSum(matrix) {
//     let sum = 0;
    
//     for(let i = 0; i < matrix.length; i++) {
//         sum += matrix[i][i];  // row index = column index
//     }
    
//     return sum;
// }
// console.log(diagonalSum([[1,2,3],
//                     [5,6,7],
//                     [5,6,7],
//                     [5,6,7]
// ]));


// pattern 3rd value

// let n=5;
// for(let i=1; i<=n;i++){
//     let row="";
//     for(let j=i; j>=1;j--){
//         row+= " "+j;
//     }
//     console.log(row);
// }


// PRINT THE NUMBER IN 2D ARRAY

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for(let i=0; i<arr.length;i++){
// for(let j= 0;j<arr[i].length;j++){
// console.log( arr[i][j]);
// }

// }

// SUM OF MATRIX
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// let sum=0;

// for(let i=0; i<arr.length;i++){
//     for(let j= 0;j<arr[i].length;j++){

// sum+=arr[i][j]

// }


// }
// console.log(sum);




// MAX IN 2D ARRAY

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// let max=arr[0][0];

// for(let i=0; i<arr.length;i++){
//     for(let j= 0;j<arr[i].length;j++){

// if(arr[i][j]>max){
//     max=arr[i][j]
// }
// }


// }
// console.log(max);


// DIAGONAL PRINT
// we cannot write this j bcz of time
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]; 
// for(let i=0;i<arr.length; i++){
//     console.log(arr[i][i])

// }



//  find sum of diagonal
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]; 
// let sum=0;
// for(let i=0;i<arr.length; i++){
// sum+=arr[i][i];
//  

// }
// console.log(sum)


// TRANSPOSE 




// let n = 5; // number of rows in the top half

// // Top half including the middle
// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // Add leading spaces to center
//     for (let s = 1; s <= n - i; s++) {
//         row += "  "; // three spaces for proper centering
//     }

//     // Add increasing numbers with a space
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += j + " ";
//     }

//     console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//     let row = "";

//     // Add leading spaces to center
//     for (let s = 1; s <= n - i; s++) {
//         row += "  ";
//     }

//     // Add increasing numbers with a space
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += j + " ";
//     }

//     console.log(row);
// }


// for(let i=1;i<5;i++){
//     let row=""
//     for(let s=1;s<=5-i;s++){
//     row+=" ";
//     }
//     for(let j=1;j<=i;j++){
// row+=j+" ";

//     }console.log(row);
// }
// for(let i=5; i>1 ;i--){
//     let row="";
//     for(let s=1;s<5-i;s++){
//         row+= " "
//     }
//     for(let j=i-1;j>=1;j--){
//         row+=j+" "
//     }
//     console.log(row);
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // spaces
//     for (let s = 1; s <= n - i; s++) {
//         row += " ";
//     }

//     // increasing numbers
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }

//     // decreasing numbers
//     for (let j = i - 1; j >= 1; j--) {
//         row += j;
//     }

//     console.log(row);
// }

let n = 5;

function printNumbers(j, row) {
    if (j === 0) {
        console.log(row);
        return;
    }
    printNumbers(j - 1, row + " " + j);
}

function printPattern(i) {
    if (i > n) return;   // stop condition

    printNumbers(i, "");
    printPattern(i + 1);
}

printPattern(1);
