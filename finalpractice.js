
// let mainArr = [1, 2, 3, 9, 6, 3, 8, 5]
// let mainArr = [1, 2, 3, 3, 6, 5]

// function minmax(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (elem of arr) {
//         if (elem > max) {
//             max = elem;
//         }
//         if (elem < min) {
//             min = elem;
//         }
//     }
//     return {max,min}
// }
// console.log(minmax(mainArr))

// let all = mainArr.reduce((a,b)=>a+b)
// console.log(all);


// function total(arr) {
//     let final = 0;
//     for (ele of arr) {
//         final += ele;
//     }
//     return final
// }
// console.log(total(mainArr))

// function duplicates(arr){
//     let final = [];
//     for (ele of arr){
//         if(!final.includes(ele)){
//             final.push(ele)
//         }
//     }
//     return final;
// }
// console.log(duplicates(mainArr));


// let mainArr = [1, 6,2, 3,3, 3, 6, 5]

// function calDuplicate(arr) {
//     let final = [];
//     let dup = [];
//     for (ele of arr) {
//         if (!final.includes(ele)) {
//             final.push(ele)
//         } else if(!dup.includes(ele)) {
//             dup.push(ele)
//         }
//     }
//     return dup;
// }
// console.log(calDuplicate(mainArr));


// let arr = [5, 1, 2, 5, 1, 3, 1];
// let arr2 = [5, 10, 3, 12, 15, 1, 3, 5, 3];

// let final=[]
// function Merge(){
//     let arr3 = arr.concat(arr2)
//     for (ele of arr3){
//         if(!final.includes(ele)){
//             final.push(ele)
//         }
//     }
// return final;
// }
// console.log(Merge());


// let arr = [1, [2, [3, 4]], 5]

// let final = [];
// function flat(arr) {
//     for (ele of arr) {
//         if (Array.isArray(ele)) {
//             flat(ele)
//         } else {
//             final.push(ele)
//         }
//     }
//     return final;
// }
// console.log(flat(arr));

// let arr = [5, 1, 3, 12, 15, 1, 3, 5, 3];

// function secondMinMax(arr) {
//     let second = Infinity;
//     let min = Infinity;
//     for (ele of arr) {
//         if (ele < min) {
//             second = min
//             min = ele
//         } else if (ele < second && ele > min) {
//             second = ele
//         }
//     }
//     return { min, second }
// }
// console.log(secondMinMax(arr));

// function secondMinMax(arr) {
//     let second = -Infinity;
//     let min = -Infinity;
//     for (ele of arr) {
//         if (ele > min) {
//             second = min
//             min = ele
//         } else if (ele > second && ele < min) {
//             second = ele
//         }
//     }
//     return { min, second }
// }
// console.log(secondMinMax(arr));


// let first = [1, 2, 2, 1, 4, 3,5];
// let second = [2, 2, 3, 5, 1];

// let concatarr = first.concat(second)

// function intersection(arr) {
//     let final = [];
//     let dup = [];
//     for (ele of arr) {
//         if (!final.includes(ele)) {
//             final.push(ele)
//         }else if(!dup.includes(ele)){
//             dup.push(ele)
//         }
//     }
//     return {final,dup};
// }
// console.log(intersection(concatarr))


// let arr = [5, 1, 10, 3, 12, 15];

// function sortArr(arr){
//     let final = [];
//     for (ele of arr){

//     }
//     return final
// }
// console.log(sortArr(arr));


// let a=69;
// let b= 150;
// [b,a]= [a,b]

// let c=b     
// b=a      
// a=c

// a=a+b  
// b=a-b  
// a=a-b

// console.log(a,b);


// let arr = [5, 1, 10, 3, 12, 15];

// function reversearr(arr){
//     let final = [];
//     for (let i=arr.length-1; i>=0; i-- ){
//         final.push(arr[i])
//     }
//     return final;
// }
// console.log(reversearr(arr));


// const arr = [0, 1, false, 2, '', 3];
// function falsevalue(arr){
//     let final = [];
//     for (ele of arr){
//         if(ele){
//             final.push(ele)
//         }
//     }
//     return final;
// }
// console.log(falsevalue(arr));


// function emp(name, salary){
// // function emp(name, salary,exp){
//     this.name= name;
//     this.salary=salary;
//     // this.exp=exp
// }

// emp.prototype.changeName = function(newName){
//     this.name = newName
// }
// emp.prototype.changeSal = function(newName){
//     this.salary = newName
// }

// let emp1 = new emp("saurabh", 100000)
// let emp1 = new emp("saurabh", 50000,10)
// console.log(emp1);

// function programmer(name, salary,exp){
// function programmer(name){
    // emp.call(this, name,salary)
    // this.experience= exp;
    // this.name= name;
    // this.salary=salary
// }

// programmer.prototype.getName = function(){
//     return this.name 
// }
// programmer.prototype.getSal = function(){
//     return this.salary 
// }
// programmer.prototype.constructor = programmer;
// programmer.prototype= Object.create(emp.prototype);


// let prog1 = new programmer("rahul", 50000,10)
// let prog1 = new programmer("Abc")
// console.log(prog1);
// console.log(prog1.changeName("sdkjvd"));
// console.log(prog1);



// class emp{
//     constructor(lang,pos){
//         // this.age=20
//         this.lang=lang;
//         this.position= pos;
//     }
//     changePos(newPos){
//         this.position = newPos
//     }
// }

// let emp1 = new emp("java", "manager");
// console.log(emp1);


// class programmer extends emp{
//     constructor(){
//         super()
//         // super(lang, pos)
//         // this.age=age;
//         // this.lang=lang;
//         // this.position= pos;
//     }
//     getAge(){
//         return this.age
//     }
// }

// // let prog1 = new programmer("python", "Cto",20)
// let prog1 = new programmer()
// console.log(prog1);
// console.log(prog1.changePos("dev"));
// console.log(prog1);


// function add(a,b){
//     setTimeout(() => {
//         console.log(a+b);
//     }, 1000);

// }

// function final(a,b,callback){
//     setTimeout(() => {
//         callback(a,b)
//     }, 3000);
// }
// final(10,20,add)

// Promise.resolve().then(()=>{console.log("catch")})


// function outer() {
//     var a = 10
//     return function inner() {
//         console.log(a);
//     }
//     var a = 20
// }
// let final = outer();
// console.log(final())


// function checkMemo(){
//     const cache = {}

//     return function(n){
//         if(cache[n]){
//             console.log("getting value from cache");
//             return cache[n]
//         }

//         console.log("calculating value");
//         let result = n*n;
//         cache[n]=result
//         return result
//     }
// }

// let final = checkMemo();
// console.log(final(5));
// console.log(final(5));
// console.log(final(10));
// console.log(final(10));


// function throttle(callback, delay) {
//     let lastTime = 0;

//     return function (...args) {
//         const currentTime = Date.now();

//         if (currentTime - lastTime >= delay) {
//             callback(...args);
//             lastTime = currentTime;
//         }
//     };
// }
// function handleScroll() {
//     console.log("Scroll event");
// }

// const throttledScroll = throttle(handleScroll, 1000);

// window.addEventListener("scroll", throttledScroll);
