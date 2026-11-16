// let arr = [1, 2, 3];

// function reversearr(arr){
//     let final=[];
//     for(let i=arr.length-1; i>=0;i--){
//         final.push(arr[i])
//     }
//     return final
// }
// console.log(reversearr(arr));


// let arr = [0, 3, 1, 4, 2, 3, 8];

// function mixmax(arr) {
//     let min = Infinity;
//     let secondMin = Infinity;

//     for (let ele of arr) {
//         if (ele < min) {
//             secondMin = min;
//             min = ele;
//         } else if (ele > min && ele < secondMin) {
//             secondMin = ele
//         }
//     }

//     return { min, secondMin }
// }
// console.log(mixmax(arr));

// let arr = [5, 1, 2, 3];

// function sum(arr){
//     let total = 0;
//     for(let ele of arr){
//         total+=ele
//     }
//     return total
// }
// console.log(sum(arr));


// let arr = [5, 1, 2, 5, 1, 3];

// function findDuplicates(arr){
//     let final = [];
//     let dub = [];

//     for(let ele of arr){
//         if(!final.includes(ele)){
//             final.push(ele)
//         }else if(!dub.includes(ele)){
//             dub.push(ele)
//         }
//     }

//     return {final,dub}
// }


// function findDuplicates(arr) {
//     let final = [];
//     let dub = [];

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
//             for (let i = 0; i < dub.length; i++) {
//                 if (dub[i] == ele) {
//                     foundDub = true;
//                     break
//                 }
//             }
//             if(!foundDub){
//                 dub.push(ele)
//             }
//         }
//     }
//     return { final, dub }
// }
// console.log(findDuplicates(arr));


// let arr = [1, [2, [3, 4]], 5];
// let final=[]

// function flattenArray(arr){
//     for(let ele of arr){
//         if(Array.isArray(ele)){
//             flattenArray(ele)
//         }else{
//             final.push(ele)
//         }
//     }
// return final
// }
// console.log(flattenArray(arr));


// let arr = [5, 1, 10, 3, 12, 15];

// function sorting(arr){
//     let n=arr.length;
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr
// }
// console.log(sorting(arr));


// let arr = [5, 1, 10, 3, 12, 15];

// function rotateArr(k) {
//     let n = arr.length;
//     let num = k % n;

//     for (let i = 0; i < num; i++) {
//         let last = arr[n - 1];
//         let first = arr[0];
//         for (let j = 0; j < n; j++) {
//             arr[j] = arr[j + 1]
//         }
//         arr[n-1] = first
//     }

//     return arr
// }
// console.log(rotateArr(2));


// let arr = [0, 1, 0, 3, 12];

// function move(arr) {
//     let final = [];
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             final.push(arr[i])
//         } else {
//             total++
//         }
//     }
//     for (let j = 0; j < total; j++) {
//         final.push(0)
//     }

//     return final;
// }
// console.log(move(arr));


// let arr = [2, 4, 3, 5, 7, 8, 1];
// let target = 9;

// function findPairs(arr, target) {
//     let final = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 final.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return final;
// }
// console.log(findPairs(arr, target));


// let arr = [1, 2, 4, 5];

// function findMissing(arr) {
//     let n = arr.length+1;
//     let total = 0;

//     for (let i = 0; i <= n; i++) {
//         total = total + i
//     }

//     for(let ele of arr){
//         total = total-ele
//     }

//     return total
// }
// console.log(findMissing(arr));



