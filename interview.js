// let a="saurabh"
// let ab = a.split("").reverse().join("")
// console.log(ab)


// recursion exp 

// function factorial(n) {
//   if (n === 0) return 1; // base case
//   return n * factorial(n - 1); // recursive call
// }

// console.log(factorial(5)); // Output: 120



// const nested = [[1, 2], [3, 4], [5]];

// const flat = nested.reduce((acc, curr) => {
//   return acc.concat(curr);
// }, []);

// console.log(flat); 


// console.log("2"+2-"2");


// js made jr object la as a key ghetla tr to string made convert hoto... for more chatgpt

// let a={}
// let b = {
//     name:"saurabh"
// }
// let c = {
//     name:"ram"
// }
// let d = {
//     name:"sita"
// }

// a[b]={
//     name:"abc"
// }

// a[c]={
//     name:"xyz"
// }
// a[d]={
//     name:"pqr"
// }

// console.log(a[b]);


// console.log(true-false);

// NaN is never equal to anything, including itself.  nehmi false ch yenar 

// console.log(NaN==0);
// console.log(NaN==NaN);
// console.log(NaN===NaN);

// console.log(typeof NaN);



// let arr=[1,2,3,4];
// let result = arr.map((e)=>{
//     return e>2
// })
// console.log(result);


// let sliceRes = arr.slice(1,3)
// console.log(sliceRes);


// let arr=[1,2,7,5,4,5,2,4,5]
// let final=[]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
//     // if(arr.indexOf(arr[i]) !== i && !final.includes(arr[i])){
//     if(arr.indexOf(arr[i]) !== i){
//         final.push(arr[i])
//     }

// }
// console.log(final);


// let str="i am saurabh ra gra"

// console.log(str.split("ra"));
// console.log(str.indexOf("ra"));
// console.log(str.includes("ra"));


// let str1="sk";
// let str2="badsh";
// let str4=0;
// let str3= str1 && str2 && str4;
// console.log(str3);

// let a=100;
// const b=++a + a++
// const b=a++ + ++a
// console.log(b);


// const newArray = new Array(5).fill('A');

// console.log(newArray);


// function fn(){
//     console.log("callback");

// }

// function higherOrder(callback){
//     callback()
// }

// higherOrder(fn)


// let emp = {
//     word: "saurabh",
//     pos: "dev",
//     msg: "hiii"
// }

// function slogan(msg) {
//     console.log(`${msg} is ${this.word} ${this.msg}`);
// }

// slogan.call(emp,"gn")


// function outer(){
//     let outervariable = "im outer";
//     return function(){
//         return outervariable

//     }
// }

// let final = outer()
// console.log(final());


// {
//    var x=10;
// }
// console.log(x);


// let arr= [1,2,3,4,5,6]
// console.log(arr.splice(4,1));
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==5){
//         // console.log(arr[i]);
//         arr.splice(i, 1); 
//     }

// }
// console.log(arr);


// const a=10;
// function sum(){
//     const a=20;
//     console.log(a);

// }
// sum()
// console.log("skj",a);


// let a=10;
// function sum(){
//     a=20;
//     console.log(a);

// }
// sum()
// console.log("skj",a);


// var a=10;
// function sum(){
//     var a=20;
//     console.log(a);
// }
// sum()
// console.log("skj",a);



// if (true) {
//   var x = 10;
//   let y = 20;
//   const z = 30;
// }
// console.log(x); // 10 (var is function/global scoped)
// console.log(y); // ReferenceError (block scoped)
// console.log(z); 



// let original = {
//     lang:"js"
// }

// let obj=Object.create(original)
// obj.name = "dsigds";
// obj.age = 20
// console.log(obj);

// let obj={
//     name:"abc",
//     add:{
//         city:"mubai"
//     }
// }

// let obj2 = {...obj}
// let obj3 = JSON.parse(JSON.stringify(obj))

// obj2.name="sa;nsa"
// obj2.add.city="oewmxs"

// console.log(obj);
// console.log(obj2);
// console.log(obj3);
// console.log(obj);


// let obj = {
//     name: "abc",
//     add: {
//         city: "mubai"
//     }
// }
// let obj2 = obj

// obj2.name="sa;nsa"
// obj2.add.city="oewmxs"

// console.log(obj);
// console.log(obj2);
// console.log(obj);

// function foo() {
//     return 
//     {
//         name: "John"
//     };
// }

// console.log(foo());

// let a = 10;

// function test(a) {
//      a = 20;
//     console.log(a);
// }

// test(a);

// console.log(a);