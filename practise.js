
// let arr = [1, 2, 3,5,2,6];

// function reversearr(arr) {
//     let blank=[]
//     for (let i = arr.length - 1; i >= 0; i--) {
//         blank.push(arr[i])
//     }
//     return blank
// }
// console.log(reversearr(arr));


// let arr = [35, 30, 0, 4, 2, 3, 8];

// function findMax(arr) {
//     let max = -Infinity;
//     let secondMax = -Infinity;
//     for (ele of arr) {
//         if (ele > max) {
//             secondMax = max
//             max = ele
//         } else if (ele < max && ele > secondMax) {
//             secondMax = ele
//         }
//     }
//     return { max, secondMax }
// }
// console.log(findMax(arr));

// function findMin(arr) {
//     let min = Infinity;
//     let secondMin = Infinity;
//     for (ele of arr) {
//         if (ele < min) {
//             secondMin = min
//             min = ele
//         } else if (ele > min && ele < secondMin) {
//             secondMin = ele
//         }
//     }
//     return { min, secondMin }
// }
// console.log(findMin(arr));


// function findPairs(arr) {
//     let max = -Infinity;
//     let secondMax = -Infinity;

//     let min = Infinity;
//     let secondMin = Infinity;

//     for (ele of arr) {
//         if (ele > max) {
//             secondMax = max
//             max = ele
//         }else if (ele < max && ele > secondMax) {
//             secondMax = ele
//         }

//         if (ele < min) {
//             secondMin = min
//             min = ele
//         }else if (ele > min && ele < secondMin) {

//             secondMin = ele
//         }
//     }
//     return {min, secondMin, max,secondMax}
// }
// console.log(findPairs(arr));


// let arr = [5, 1, 2, 3];

//  let sum = arr.reduce((a,b)=>a+b)
//  console.log(sum);

// function findSum(arr) {
//     let sum = 0;
//     for (ele of arr) {
//         sum += ele
//     }
//     return sum
// }
// console.log(findSum(arr));

// let arr = [5, 1, 5, 2, 5, 1, 3];

// function removeDup(arr){
//     let final = []
//     let final2 = []
//     for (let ele of arr){
//         if(!final.includes(ele)){
//             final.push(ele)
//         }else if(!final2.includes(ele)){
//             final2.push(ele)
//         }
//     }
//     return {final, final2}
// }
// console.log(removeDup(arr));


// function removeDup(arr) {
//     let final = []
//     let final2 = []

//     for (let ele of arr) {
//         let found = false;
//         for (let i = 0; i < final.length; i++) {
//             if (final[i] == ele) {
//                 found = true;
//                 break
//             }
//         }
//         if (!found) {
//             final.push(ele)
//         } else {
//             let foundDub = false;
//             for (let i = 0; i < final2.length; i++) {
//                 if (final2[i] == ele) {
//                     foundDub = true;
//                     break
//                 }
//             }
//             if(!foundDub){
//                 final2.push(ele)
//             }
//         }
//     }
//     return {final,final2}
// }
// console.log(removeDup(arr));


// let arr = [5, 1, 2, 5, 1, 3, 1];
// let arr2 = [5, 10, 3, 12, 15, 10, 3, 5, 3];

// function merge(arr, arr1) {
//     let final = []
//     let final2 = []
//     let final3 = []
//     for (let ele of arr) {
//         final.push(ele)
//     }
//     for (let ele of arr1) {
//         final.push(ele)
//     }

//     // this using includes()
//     // for(ele of final){
//     //     if(!final2.includes(ele)){
//     //         final2.push(ele)
//     //     }

//     // }

//     for (let ele of final) {
//         let found = false;
//         for (let i = 0; i < final3.length; i++) {
//             if (final3[i] == ele) {
//                 found = true
//                 break
//             }

//         }
//         if (!found) {
//             final3.push(ele)
//         }
//     }

//     return { final, final3, final2 }
// }
// console.log(merge(arr, arr2));


// let arr = [1, [2, [3, 4]], 5]

// let flat  = arr.flat(Infinity);
// console.log(flat);

// let arr2 = [1, ...[2, ...[3, 4]], 5]
// console.log(arr2);


// let final = []
// function flattenArray(arr) {
//     for (let ele of arr) {
//         if (Array.isArray(ele)) {
//             // final.concat(flattenArray(ele))
//             flattenArray(ele)
//         } else {
//             final.push(ele)
//         }
//     }
//     return final
// }
// console.log(flattenArray(arr));

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

// const arr = [0, 1, false, 2, '', 3,0n,-0];

// function checkFalse(arr) {
//     let final = []
//     for (let ele of arr) {
//         if (!ele == 0) {
//             final.push(ele)
//         }
//     }
//     return final
// }
// console.log(checkFalse(arr));


// let arr = [5, 1, 10, 3, 12, 15];

// function checkIndex(arr,num) {

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==num)
//             return i
//     }
//     return -1
// }
// console.log(checkIndex(arr,125));

// let arr10 = [1, 2, 3]
// let arr11 = [1, 2, 3]

// function check(arr, arr1) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr1[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(check(arr10,arr11));


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 4, 3, 7];

// function check(arr1, arr2) {
//     for (ele of arr2) {
//         if (!arr1.includes(ele)) {
//             return false
//         }
//     }
//     return true

// }
// console.log(check(arr1, arr2));

// let arr = [5, 1, 10, 3, 12, 15];

// function rotateArr(arr,num){

//     for(let i=0; i<num;i++){
//         arr.push(arr[0])
//         arr.shift(arr[0])
//     }
//     return arr
// }
// console.log(rotateArr(arr,3));

// function rotate(arr, k) {
//     let n = arr.length;
//     k = k % n;

//     for (let i = 0; i < k; i++) {
//         let last = arr[n - 1]
//         for (let j = n - 1; j > 0; j--) {
//             arr[j] = arr[j - 1];
//         }
//         arr[0] = last
//     }
//     return arr
// }
// console.log(rotate(arr,2));

// function rotate(arr, k) {
//     let n = arr.length;
//     k = k % n;

//     for (let i = 0; i < k; i++) {
//         let first = arr[0]
//         for (let j = 0; j < n; j++) {
//             arr[j] = arr[j + 1];
//         }
//         arr[n-1] = first
//     }
//     return arr
// }
// console.log(rotate(arr,3));


// let arr = [0, 1, 0, 3, 12];

// function move(arr) {
//     let final = []
//     let zero = []
//     for (let ele of arr) {
//         if (ele !== 0) {
//             final.push(ele)
//         } else {
//             zero.push(ele)
//         }
//     }
//     return final.concat(zero)
// }

// console.log(move(arr));

// function move(arr) {
//     let final=[]
//     let zero=0;

//     for(let ele of arr){
//         if(ele!==0){
//             final.push(ele)
//         }else{
//             zero++
//         }
//     }
//     for(let i=0;i<zero;i++){
//         final.push(0)
//     }

//     return final
// }

// console.log(move(arr));


// let arr = [2, 4, 3, 5, 7, 8, 1];
// let target = 9;

// function findPairs(arr, target) {
//     let final = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 final.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return final
// }
// console.log(findPairs(arr, target));


// let arr = [1, 2, 3, 5, 6];

// function findMissing(arr) {
//     let n = arr.length + 1;
//     let total = 0;

//     for (let i = 1; i <= n; i++) {
//         total = total + i;
//     }
//     for (ele of arr) {
//         total = total - ele;
//     }
//     return total
// }
// console.log(findMissing(arr));


// let arr = [100, 4, 200, 10, 3, 2, 6];

// function consecutive(arr) {
//     let longest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let count = 1
//         let current = arr[i]

//         while (true) {
//             let found = false
//             for (let j = 0; j < arr.length; j++) {
//                 if (arr[j] == current + 1) {
//                     count++;
//                     current++;
//                     found = true;
//                     break;
//                 }
//             }
//             if (!found) {
//                 break
//             }
//         }
//         if (count > longest) {
//             longest = count
//         }
//     }
//     return longest
// }
// console.log(consecutive(arr));
