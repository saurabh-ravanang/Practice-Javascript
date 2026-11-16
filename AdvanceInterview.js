console.log("Advance Interview");


// for(var i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000)
// }


// type of nehmi ji pn value deto ti string made ch aste...string number undefined

// let a = undefined;

// if(typeof(a)){
//     console.log("its Undefined");
// }else{
//      console.log("not Undefined");
// }

// console.log(typeof(a));


// let arr = [1, 2, 3];

// function reversearr(arr) {
//     let final = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         final.push(arr[i])
//     }
//     return final
// }

// console.log(reversearr(arr));
// console.log(arr.reverse());



// find max and min element

// let arr = [5, 3, 1, 4, 2, 3, 8];

// function minmax(arr) {
//     min = arr[0];
//     max = arr[0];
//     for (ele of arr) {
//         if (ele < min)
//             min = ele
//         if(ele>max)
//             max=ele
//     }
//     return {min,max}
// }

// console.log(minmax(arr));


// Sum All Elements in an Array 

// let arr = [5, 1, 2, 3];

// let final = arr.reduce((a,b)=>a+b);
// console.log(final);

// function sum(arr){
//     let total = 0
//     for(num of arr){
//         total += num
//     }
//     return total
// }
// console.log(sum(arr));



// Check if an Array Contains a Specific Value

// let arr = [5, 1, 2, 3];

// let check = arr.includes(5)
// console.log(check);


// function check(arr,num) {
//     for (ele of arr) {
//         if (ele == num) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// console.log(check(arr,5));



// remove duplicates 

// let arr = [5, 1, 2, 5, 1, 3];

// function dub(arr) {
//     let final= [];
//     for (ele of arr) {
//         if(!final.includes(ele)){
//             final.push(ele)
//         }
//     }
//     return final
// }
// console.log(dub(arr));




// calculate duplicates 

// let arr = [5, 1, 2, 5, 1, 3,1];

// function findDuplicates(arr) {
//   let seen = [];
//   let duplicates = [];

//   for (let ele of arr) {
//     if (seen.includes(ele)) {
//       if (!duplicates.includes(ele)) {
//         duplicates.push(ele);
//       }
//     } else {
//       seen.push(ele);
//     }
//   }

//   return duplicates;
// }

// console.log(findDuplicates(arr));



// Merge Two Arrays and Remove Duplicates 

// let arr = [5, 1, 2, 5, 1, 3, 1];
// let arr2 = [5, 10, 3, 12, 15, 1, 3, 5, 3];

// let concatarr = arr.concat(arr2)

// function dup(arr) {
//     let fianldup = [];
//     for (ele of arr) {
//         if (!fianldup.includes(ele)) {
//             fianldup.push(ele)
//         }
//     }
//     return fianldup
// }
// console.log(dup(concatarr));



// function con(arr) {
//     let add = [];
//     for (ele of arr) {
//         arr2.push(ele)
//     }
//     for(ele of arr2){
//         if(!add.includes(ele)){
//             add.push(ele)
//         }
//     }
//     return add
// }
// console.log(con(arr));
// console.log(arr2);



// Flatten a Nested Array 

// let arr = [1, [2, [3, 4]], 5]

// function flattenArray(arr) {
//     let flat = [];

//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             flat = flat.concat(flattenArray(item));
//         } else {
//             flat.push(item);
//         }
//     }

//     return flat;
// }

// console.log(flattenArray(arr));



// let mix = [1, 3, [4, 5, [6, 7,[8,9,[10,11]]]],12]
// console.log(mix);
// let blank = [];

// function check(arr) {
//     for (ele of arr) {
//         if (Array.isArray(ele)) {
//             check(ele)
//         } else {
//             blank.push(ele)
//         }
//     }
//     return blank
// }
// console.log(check(mix));


// Return the second largest and smallest number in an array

// let arr = [5, 1, 3, 12, 15, 1, 3, 5, 3];

// function larg(arr) {
//     let dup = [...new Set(arr)];

//     let assort = dup.sort((a,b)=>a-b)

//     let secondlarg = assort[assort.length-2];
//     let secondsmall= assort[1]
//     // return secondlarg
//     // return secondsmall
//     // return assort
//     return {secondlarg,secondsmall}

// }
// console.log(larg(arr));


// another method 

// function mixmax(arr) {
//     let second = Infinity;
//     let min = Infinity;

//     for (ele of arr) {
//         if (ele < min) {
//             second = min;
//             min = ele
//         } else if (ele < second && ele > min) {
//             second = ele
//         }
//     }

//     return {second,min}

// }

// console.log(mixmax(arr));



// Find the intersection of two arrays 

// let first = [1, 2, 2, 1,4,3];
// let second = [2, 2,3,5,1];

// function inter(arr) {
//     let blank = [];
//     for (ele of arr) {
//         if (second.includes(ele)) {
//             blank.push(ele)
//         }
//     }
//     return blank
// }

// console.log(inter(first));



// sort array 

// let arr = [5, 1, 10, 3, 12, 15];

// function sorting(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr
// }
// console.log(sorting(arr));


// Remove all falsy values from an array.

// const arr = [0, 1, false, 2, '', 3];

// function falsevalue(arr) {
//     let blank = [];
//     for (ele of arr) {
//         if (!ele == 0) {
//             blank.push(ele)
//         }
//     }
//     return blank
// }

// console.log(falsevalue(arr));


// Write a function to find the index of an element in an array without using indexOf().

// let arr = [5, 1, 10, 3, 12, 15];

// function findIndex(num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == num) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(findIndex(10));

// function findIndex(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return i;
//   }
//   return -1;
// }

// console.log(findIndex([10, 20, 30, 40], 30)); // 2


// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]

// function Check(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }
//     return true

// }
// console.log(Check(arr1, arr2));


// Check if an Array is a Subset of Another

// let arr1 = [1, 2, 3, 4, 5,7];
// let arr2 = [2, 4, 3,7];

// function Check(arr1, arr2){
// for (let ele of arr2){
//     if(!arr1.includes(ele)){
//         return false
//     }
// }
// return true
// }
// console.log(Check(arr1, arr2));


// function isSubset(arr1, arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//         let found = false;

//         for (let j = 0; j < arr1.length; j++) {
//             if (arr2[i] === arr1[j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isSubset(arr1, arr2)); // true


// Rotate an array k times to the right

// let arr = [5, 1, 10, 3, 12, 15];

// function rotateArr(num) {
//     for (let i = 0; i < num; i++) {
//         let last = arr.shift(arr[i])
//         arr.push(last)
//     }
//     return arr
// }
// console.log(rotateArr(2));


// function rotate(arr, k) {
//     let n = arr.length;
//     k = k % n;

//     for (let i = 0; i < k; i++) {
//         let last = arr[n - 1];

//         for (let j = n - 1; j > 0; j--) {
//             arr[j] = arr[j - 1];
//         }

//         arr[0] = last;
//     }

//     return arr;
// }
// console.log(rotate(arr,2));


// let arr = [0, 1, 0, 3, 12];

// function move(arr) {
//     let final = [];
//     let zero = [];
//     for (let ele of arr) {
//         if (!ele == 0) {
//             final.push(ele)
//         } else {
//             zero.push(ele)
//         }
//     }
//     return final.concat(zero);
// }
// console.log(move(arr));


// function move(arr) {
//     let result = [];
//     let zero = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             result.push(arr[i]);
//         } else {
//             zero++
//         }
//     }
//     for (let i = 0; i<zero;i++){
//         result.push(0)
//     }
//     return result
// }
// console.log(move(arr));


// let arr = [2, 4, 3, 5, 7, 8, 1];
// let target = 9;

// function findPairs(arr, target) {
//     let pairs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 pairs.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return pairs;
// }

// console.log(findPairs(arr, target)); 


// Find the missing number in an array of 1…n.

// let arr = [1, 2, 3, 5, 6];

// function findMissing(arr) {
//     let n = arr.length + 1;
//     let total = 0;

//     for (let i = 1; i <= n; i++) {
//         total = total + i;
//     }

//     for (let ele of arr) {
//         total = total - ele;
//     }

//     return total;
// }

// console.log(findMissing(arr)); 


// Find the longest consecutive sequence in an unsorted array.
// Example: [100, 4, 200, 1, 3, 2] → 4 (sequence: 1,2,3,4).

// let arr = [100, 4, 200, 1, 3, 2,6];

// function longestConsecutive(arr) {
//     let longest = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let count = 1;
//         let current = arr[i];

//         while (true) {
//             let found = false;

//             for (let j = 0; j < arr.length; j++) {
//                 if (arr[j] === current + 1) {
//                     current++;
//                     count++;
//                     found = true;
//                     break;
//                 }
//             }

//             if (!found) {
//                 break;
//             }
//         }

//         if (count > longest) {
//             longest = count;
//         }
//     }

//     return longest;
// }

// console.log(longestConsecutive(arr)); 


// count how many times each number appears

// let arr = [1, 1, 1, 2, 5, 2, 2, 6, 6, 2, 3, 3];

// function checkAppear(arr) {
//     let count = {};
//     let result = [];

//     for (let num of arr) {
//         count[num] = (count[num] || 0) + 1;
//         if (count[num] == 2) {
//             result.push(num)
//         }
//     }
//     return { count, result }
// }
// console.log(checkAppear(arr));

