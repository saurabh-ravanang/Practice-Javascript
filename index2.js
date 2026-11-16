
console.log("Hiiiiii Saurabh Welcome Back");


// console.log(navigator)
// true means 1 & false means 0

// document.write("hi saurabh")

// *********** STRING METHODS************
// length, toLowerCase-UpperCase, [0], indexOf, lastIndexOf, charAt, endsWith, includes, substring, slice, split, replace, repeat

// let myString = "Saurabh Is Good Boy";
// let myString = "saurabh Is Good saurabh Boy";   /* just for split() */
// myString = myString.concat(" and also human being")

// console.log(myString)
// console.log(Array.from(myString))
// console.log(myString.length)
// console.log(myString.toLowerCase())
// console.log(myString.toUpperCase())
// console.log(myString[0])                    /* checking index */

// console.log(myString.indexOf("G"))      /*chukicha takla tr -1 dakhavto */
// console.log(myString.lastIndexOf("a"))
// console.log(myString.charAt(6))         /* 6 position varcha letter dakhavnar */
// console.log(myString.endsWith("oy"))
// console.log(myString.includes("sr"))
// console.log(myString.substring(6))
// console.log(myString.substring(0, 12))
// console.log(myString.substring(6, 12))
// console.log(myString.slice(6))             /*try itself */
// console.log(myString.slice(6,12))             /*try itself */
// console.log(myString)
// console.log(myString.slice(-6))             /*try itself */
// console.log(myString.split(" "))
// console.log(myString.split("sau"))
// console.log(myString.replace("saurabh", "virat"))
// console.log(myString.repeat(3))

// let example = "<h1>Saurabh Is Good Boy</h1>"
// document.body.innerHTML = example

// ******** ARRAY FUNCTIONS ***********
// indexOf, push, pop, unshift, shift, splice, slice, reverse, concat, includes, join, filter, map, reduce, some, every, sort, array.of()

// let color = ["red", "black", "green", "yellow", "pink"];
// let marks = [5,10,6,7,9,8];
// let mixed = ["str", 20, [50,60]];
// let mixed = ["str", 20, ...[50,60]];     /* destructuring */
// console.log(mixed.flat(Infinity))
// let one = new Array()
// one[0]="sunday";
// one[1]="munday";
// one[2]="junday";
// one[3]="putnday";
// one[4]="guday";
// one[5]="muday";
// console.log(one)
// let arr = new Array(45,"saur", "mumbai", 98);
// console.log(color)
// console.log(color[2])
// console.log(marks)

// let newfind = marks.find((ele)=>ele>8)
// console.log(newfind)

// marks.length = 3             /* length cut karnya sathi */
// console.log(mixed)
// console.log(mixed.flat(Infinity))
// console.log(mixed.length)
// console.log(arr)
// console.log(Array.isArray(marks))

// color[0] = "orange";            /* pahila element change honar */
// console.log(color)

// console.log(marks.indexOf(7))
// console.log(marks.push(1000))       /* element last la add hoto */
// console.log(marks.unshift(2000))      /* element start la add hoto */
// console.log(marks.pop())            /* remove last element of array */
// console.log(marks.shift())            /* remove first element of array */
// console.log(marks)
// console.log(marks.splice(1,3))      /* 1 pasun 3 index paryant che element remove karnar */
// console.log(marks.splice(1))      /* try itself */
// console.log(marks.splice(2, 2,1000, 200, 500))
// console.log(marks.slice(3))
// console.log(marks.slice(3, -1))
// console.log(marks.slice(2,5))
// console.log(marks.reverse())
// console.log(marks.concat(color))       /* concat mule dusra array add honar */
// console.log(marks.join("_"))
// console.log(marks.sort((a,b)=> a-b))
// console.log(marks.sort((a,b)=> b-a))
// console.log(marks)

// let obj = {
//     "first name":"harry",
//     salary: 20000,
//     age: 45,
//     newArray: [88,56,78,65],
//     slogan:()=>{return ("inner function");
//     }
// }
// console.log(obj)
// console.log(obj.newArray)
// console.log(obj.slogan())

// let obj = {}
// obj["key"]= "this";          /* as pn lihu shakto */
// obj.name = 'saurabh'         /* normal object */
// console.log(obj)


// let a = function(name) {
//     console.log(`my name is ${name}`);
//     return "saur";
// }
// let name = "roham";
// a(name);
// console.log(a('rahul'))
// console.log("saurabh");

// function a(name) {
//     console.log(`my name is ${name}`);
// }
// a('saurabh');


// const val = function(name, greetings="thank you") {
//     console.log(`my name is ${name} ${greetings}`);
//     return 6;
// }
// let name = "roham";
// let name2 = "roha";
// val(name2, 'hii');
// val("saurabh");
// val();
// console.log(val("hi","by"));


// let obj = {
//     name: "abc",
//     marks: 20,
//     msg: "Good Morning",
//     post: "programmer",
//     fan: function (name, msg) {
//         // console.log(`my name is ${name} ${msg}`);
//         console.log(`my name is ${this.name} ${this.msg}`);
//     }
// }
// console.log(obj)                   /* objects la iterate krnya sathi fakt for in loop vaprtat */
// for (key in obj) {
//     console.log(`${key} ${obj[key]}`);
//     // console.log(key, obj[key])              /* same */
// }
// obj.fan()
// console.log(obj.fan("saurabh", "good morning"));

// let arr = [0,2,6,4,0,5,7,9]; 

// let newArr = arr.filter((ele)=>{
// return ele !== 0
// })
// console.log(newArr);

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }

// for (const key in arr) {
//     console.log(key, arr[key])
// }

// for(i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// console.log(arr.reverse())

// arr.forEach(function(element) {
//     console.log(element);
// })


// for (element of arr) {
//     console.log(element)
// }

// let a = window;
// a = alert("hiiiiii")
// a = prompt("hiiiiiii");
// a= confirm("hii")
// console.log(a);

// a = document
// let a = document.all[8];
// let aa = document.all;
// a = document.links;
// a = document.links[0];
// a = document.links[0].className;
// a = document.links[0].href;
// console.log(aa);
// a = document.body;
// a = document.forms[0];
// console.log(a);

/*ekhadya object la array made convert karnya sathi array.from vaprto */

// Array.from(aa).forEach(function(element){
//         console.log(element);
//     })
// location.href = "//codewithharry.com"
// a = location.toString()
// console.log(a);

// let a = "abcdef";
// let b = Array.from(a);
// console.log(b);

// let a = document.links;
// console.log(a[0])
// console.log(a)
// let b = "kl"
// let b = ".com"
// Array.from(a).forEach(function(element){         /* Array.from() return an array */
//     if(element.href.includes(b)){
//         console.log(element.href);
//     }
//     else{
//         console.log("no match found")
//     }
// })

// a = document.images[0];
// a= document.scripts[0];
// console.log(a);

// let home = document.querySelector(".home")
// let home = document.getElementsByClassName("container")
// let about = document.getElementById("abouttt");
// let about = document.getElementById("container");
// about = about.className;
// about = about.id;
// about = about.childNodes;
// about = about.parentNode;
// about = about.children;
// console.log(about);
// console.log(home);

// about.style.color = "red";
// home.style.color = "red";
// about.style.fontFamily = "cursive";
// about.style.fontSize = "2rem";
// about.style.backgroundColor = "green";
// about.innerText = "Saurabhhhhh";
// about.innerHTML = "<b>saurabh</b>";
// console.log(about.innerText);


// let ser = document.querySelector("#ser");
// let home = document.querySelector(".home");
// let hom = document.querySelectorAll("li");
// ser.style.color = "green";
// home.style.color = "blue";
// console.log(ser);
// console.log(home);
// console.log(hom);

// let home = document.querySelector("#homee")
// let home = document.querySelectorAll(".home")
// let home = document.getElementsByClassName("home");
//  home = document.getElementsByClassName("container");
//  home = document.getElementById("container");
// home.style.fontSize = "4rem";
// home.style.color = "green";
// console.log(home[0].getElementsByClassName("home"));
// home = document.getElementsByTagName("div");
// home = document.getElementsByTagName("li");
// console.log(home);

// Array.from(home).forEach(function(elemets){
//     console.log(elemets);
//     elemets.style.color = "green";
// })

// for (let index = 0; index < home.length; index++) {
//     const element = home[index];
//     console.log(element);
//     element.style.color = "yellow";
//     // element.style.fontSize = "4rem";
// }

// let a = document.querySelector(".container");
// console.log(a)
// console.log(a.childNodes);              /* childnodes made purn  elements dakhvtat including text */
// console.log(a.children);                    /* children made text sodun sagle elements dakhvtat */
// let nodename = a.childNodes;
//  nodename = a.childNodes[5].nodeName;       /* nodename mule output string made yeto */
// console.log(nodename);
// let nodetype = a.childNodes[4].nodeType;
// console.log(nodetype);
// let b = a.childNodes
// Array.from(b).forEach((ele)=>{
//     console.log(ele)
// })

// NODE TYPES
// 1. ELEMENTS
// 2. ATTRIBUTES
// 3. TEXT NODES
// 8. COMMENTS
// 9. DOCUMENTS
// 10. DOCTYPE


// let a = document.querySelector(".container");
// console.log(a)
// let a = document.querySelector("body");
// console.log(a)
// console.log(a.childNodes)
// console.log(a.children)
// console.log(a.childNodes[1])
// console.log(a.children[1]);
// console.log(a.children[1].childNodes);
// console.log(a.children[1].childNodes[1]);
// console.log(a.children[1].children[0]);


// console.log(a.childNodes);
// console.log(a.childNodes[1]);
// console.log(a.children);
// console.log(a.children[1]);
// console.log(a.firstChild);
// console.log(a.firstElementChild);

// console.log(a.lastChild);
// console.log(a.lastElementChild);


// console.log(a.children);     /* JITKE CHILDREN TITKE CH CHILD ELEMETS YENAR */
// console.log(a.childElementCount);

// let a = document.querySelector(".container");
// console.log(a.nextElementSibling)
// console.log(a.childNodes);
// console.log(a.firstElementChild);
// console.log(a.firstElementChild.parentNode);
// console.log(a.firstElementChild.nextSibling);
// console.log(a.firstElementChild.nextElementSibling);   /* UL RETURN KARNAR */
// console.log(a.firstElementChild.nextElementSibling.nextElementSibling);    /* H1 WELCOME RETURN KARNAR */


// CREATING REMOVING & REPLACING ELEMENTS
// ( CREATING )
// let element = document.createElement("li");
// let text = document.createTextNode("hiiiiiiiiiiiiiiiiiiiii");

// element.appendChild(text);

// // add classname or id to li
// element.className = "home";
// element.id = "createid";
// element.setAttribute('title', 'mytitle');
// element.setAttribute('class', 'mytitle');
// element.setAttribute('style', 'color: green');
// element.innerText = "hello";     /* INNER TEXT MULE TEXTNODE REPLACE HONAR */
// element.style.color = "red";
// element.style.fontSize = '4rem';

// let body = document.querySelector("body");
// body.append(element)
// let ul = document.querySelector("ul.yes");
// ul.appendChild(element);
// console.log(ul);
// console.log(element);

// // ( REPLACING )
// let elem2 = document.createElement("h2");
// let text2 = document.createTextNode("this is elem 2");
// elem2.className = "elem2";
// elem2.id = "elem2";
// elem2.appendChild(text2);
// console.log(elem2);
// element.replaceWith(elem2);
// let myul = document.querySelector(".yes");
// myul.replaceChild((document.getElementById("pqr")), (document.getElementById("first")))
// myul.replaceChild(element, (document.getElementById("first")));    /* replace krnya sathi same child asla pahije */
// myul.replaceChild(elem2, element);    /* replace krnya sathi same child asla pahije */



// // ( REMOVING )
// myul.removeChild(document.getElementById("last"));        /* remove krnya sathi same child asla pahije */
// let elem3 = document.querySelector('.pqr');
// elem3.remove(elem3);
// console.log(elem3);


// let pr = elem2.getAttribute('class');
// console.log(pr);      /* yane aapn class and id check kru shakto */


// QUIZZ TUT 16
// let head = document.createElement('a');
// let htext = document.createTextNode("go to code with harry");
// head.appendChild(htext);

// let welcome = document.querySelector(".welcome");
// welcome.innerText = 'hiii harry';
// head.className = "head, leg"
// head.className = "ear"
// head.classList = "head, leg"
// head.setAttribute('href', 'https://www.codewithharry.com');
// welcome.replaceWith(head);
// welcome.appendChild(head);
// console.log(head);


// JAVASCRIPT EVENTS
// document.getElementById("welcome").addEventListener('click', function (e) {
// para = e;

// let para = e.target;      /* E.TARGET KSHA VR CLICK KELA TO DAKHVTO  */
// para = e.target.className;
// para = e.target.id;
// para = e.target.classList;
// Array.from(e.target.classList).forEach(function(element){
//     console.log(element);
// })
// });
// para = e.offsetX;
// console.log("clickeeeeee");
// console.log(para);
// location.href = "//codewithharry.com"
//     console.log(para);
// });

// document.querySelector(".welcome").addEventListener('click', function(){
//     console.log("abc");
// })

// let btn = document.getElementById("btn");
// btn.addEventListener('click', func1);
// function func1(e) {
//     console.log("clickeeeeee");
//     console.log(e);
// }

// let img = document.getElementById("img");
// img.addEventListener('mouseover', function(e){
//     console.log("mouse over event here");
//     console.log(e);
// })


// BACKGROUND COLOR CHANGE HONYA SATHI (MOSTLY USED IN GAMES)
// document.querySelector('.container').addEventListener("mousemove", function(e){

//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},54)`;
// })


// LOCAL AND SESSION STORAGE
// let obj = {
//     name: "saurabh",
//     post: "programmer"
// }
// let color = ['red', 'blue', 'green', 'yellow'];
// console.log(obj)
// console.log(color)
// localStorage.setItem('name', 'saurabh');
// localStorage.setItem('name2', 'jerry');
// localStorage.setItem('cname', color);
// localStorage.setItem('objectt', obj);
// localStorage.setItem('object',JSON.stringify(obj));
// localStorage.setItem('cnname',JSON.stringify(color));
// localStorage.setItem('name3', 'hitesh', 'programmer');  /* MANJE FAKT 2 ARGUMENTS TAKU SHAKTO */
// localStorage.clear();
// localStorage.removeItem('name', 'saurabh');
// localStorage.removeItem('name2');                    /* as pn lihu shakto */
// let name = localStorage.getItem('name');
// console.log(name);

// IKDE AAPN JSON STRINGFY AND PARSE USE KELA
// let name = localStorage.getItem('cnname');
// console.log(name);
// let name = localStorage.getItem('object');
// console.log(name);
// console.log(JSON.parse(name));
// console.log(JSON.stringify(name));

// QUIZZ
// *************** SOLUTION 1 ***************

// let div = document.createElement('div');
// div.innerText="i am an editable div";
// div.setAttribute('contentEditable','true');
// document.querySelector('h1').append(div);
// console.log(document.querySelector('h1'));
// console.log(div);

// div.addEventListener('blur',func1);
// function func1() {
// //   localStorage.clear();
//   localStorage.setItem('div',`${div.innerText}`)
// }

// *************** SOLUTION 2 ***************

// let div=document.createElement("h1");
// div.className ="divClass";
// div.id="divId";
// div.setAttribute("contentEditable","true");
// div.innerHTML="Enter Text Here";
// let body=document.querySelector("body")
// body.appendChild(div);

// document.getElementById("divId").addEventListener("blur", function(e) {
//     localStorage.clear();
//     localStorage.setItem( "divID",document.getElementById("divId").innerText);
// });


// JAVASCRIPT MATH OBJECT
// let a = Math;
// a = Math.ceil(5.3)          /*6 */
// a = Math.round(5.6)           /*jar 5.3 asel tr 5 yenar aani 5.6 asel tr 6 yenar */
// a = Math.floor(5.6)          /*5 */
// a = Math.random(5.4);        /* random no kadnyasthi */
// //RANDOM NO BETWEEN 0-100
// a = Math.random();
// a = 100*Math.random();
// a = Math.floor(100*Math.random());

// //RANDOM NO BETWEEN 10-100
// a = 10+(100-10)*Math.random();

// //RANDOM NO BETWEEN 50-100
// a = 50+(100-50)*Math.random();

// //RANDOM NO BETWEEN 50-70
// a = Math.ceil(50+(52-50)*Math.random());
// a = Math.floor(50+(52-50)*Math.random());
// // a=Math;
// console.log(a);


// JAVASCRIPT DATE & TIME OBJECT
// let a = new Date();
// document.write(a)
// a = new Date('10-15-1999 4:40:45');   /* PAHILA MONTH, DATE, YEAR NANTR TIME */
//  a = new Date('oct 15 1999 4:50:45');
// a.setDate(20);
// console.log(a);
// console.log(a.getDay());
// console.log(a.getDate());
// console.log(a.getFullYear());
// console.log(a.getMinutes());
// console.log(a.getMonth());
// console.log(a.getTime())


// OBJECT LITERALS & CONSTRUCTORS

// ******* SIMPLE Object LITERALS **********
// let car = {
//     name: "nano",
//     speed: 100,
//     run: function(){
//         console.log(`${this.name} car is running`);
//     }
// }
// console.log(car);
// console.log(car.run());

// WE HAVE ALREADY SEEN CONSTRUCTOR LIKE THESE
// new Date(); 

// ******* CONSTRUCTOR EXAMPLE ***********
// function car(givenName, givenSpeed) {
//     this.name = givenName,
//     this.speed = givenSpeed,            /* constructor made aapan this keyword use krto  */
//     this.color = "black"                /* tasech new keyword use karun new constructor banvto */
//     this.run = function () {
//         console.log(`${this.name} is running`);
//     }
//     this.analyze = function () {
//         console.log(`${this.name} is slower by ${300 - this.speed} km/H than suzuki`);
//     }
// }
// car1 = new car("maruti", "100");
// car2 = new car("BMW", "200");
// console.log(car1.analyze());
// console.log(car2);
// console.log(car);

// ****** PROTOTYPE ***********
// let obj = {
//     name: "nano",
//     speed: 100,
//     color: 'black'
// }
// console.log(obj);

// function car(givenName){
//     this.name = givenName;
//     this.slog = function(){
//         return `i am ${this.name}`
//     }
// }

// car.prototype.getName = function(){     /* setname & getname he fakt aapn random nav dilit */
//     return this.name;                   /* ikde me prototype made getname navach function add kel */
// }

// car.prototype.setName = function(newName){    /* aani ikde setname navach functon add kel  */
//     this.name = newName;
// }


// car1 = new car('marutiiiiiiiiiiiii');
// car2 = new car("suzuki");
// console.log(car1);

// ********* PROTOTYPE INHERITANCE ********

// const emp = {
//     name: "kalpesh",
//     slog: function(){
//         return `${this.name} is best`
//     },
//     setName: function(newName){
//         this.name = newName;
//     }
// }
// let obj = Object.create(emp);
// // let obj = Object.create();              /* as object ny banvu shakat */
// obj.name = "saurabh";
// obj.role = "manager";
// console.log(obj);
// console.log(obj.setName("joker"))
// console.log(obj.slog())
// console.log(obj);
// console.log(emp);


// const proto = {
//     name: "ambani",
//     color: "black",
//     slogan: function(){
//         return ` ${this.name} and ${this.color} company is best`;
//         // return ` This company is best`;
//     },
//     changeName: function(newName, color){
//         this.name = newName;
//         this.color = color;
//     }
// }
// console.log(proto)
// let b = new changeName('bavesh');     /* asss nahiii */

// THIS CREATE OBJECT
// let a = Object.create(proto);
// a.name = "bavesh";                      /* a.name karun changename made nav save kraych */
// a.role = "programmer";
// console.log(a);
// a.changeName("harry");                  /* ikde nav change (replace) kel */
// console.log(a.slogan())
// console.log(a);

// THIS ALSO CREATE OBJECT (OLD METHOD)
// const abc = Object.create(proto, {
//     name: {value: 'harry', writable: true},      /* writable lihunch change kru shakto */
//     role: {value: 'manager'}
// })
// abc.changeName("harry2");
// console.log(abc);

// CREATE EMP CONSTRUCTOR
//  function emp(name, salary, experience){
//      this.name = name,
//      this.salary = salary,
//      this.experience = experience
//  }

//  emp.prototype.slogan = function(){         /* ikde me slogan la emp constructor made add kel */
//      return `this company is best, regards ${this.name}`;
//  }

//  let newEmp = new emp("saurabh", "20000", "45");
// //  console.log(emp)
//  console.log(newEmp);
//  console.log(newEmp.slogan());


// // PROGRAMMER CONSTRUCTOR
// function programmer(name, salary, experience, lang){
//     emp.call(this, name, salary, experience),     /* emp.call lihun emp cha constructor yat add kela */
//     this.lang = lang
// }

// programmer.prototype = Object.create(emp.prototype);
// // programmer.prototype = emp.prototype;                       /* asss pn lihu shakto */
// programmer.prototype.voice = function(){
//     return "hiii bhai";
// }

// programmer.prototype.constructor = programmer;

// let newPro = new programmer("rohan", 45, 5,"java");
// console.log(newPro);


// *********** CLASSES **********

// class emp{
//     constructor(name, color){
//         this.name = name,
//         this.color = color
//     }
//     slogan(){
//         console.log(`my name is ${this.name} & fav color is ${this.color}`)
//     }
// }
// let newEmp = new emp("saurabh", "red")
// console.log(newEmp)
// newEmp.slogan()

// class prog extends emp{
//     shine(){
//         // console.log(`this company is best regards ${this.name}`)
//         return (`this company is best regards ${this.name}`)
//     }
// }
// let newProg = new prog("ketan", "green")
// console.log(newProg.shine())
// console.log(newProg.slogan())

// class emp {
//     constructor(name, exp, role) {      /* constructor key word ch use kraycha */
//         this.name = name,
//             this.exp = exp,
//             this.role = role
//             // this.slogan = function(){
//             //     return `I am ${this.name} and our company is best`;
//             // }
//     }
//     slogan() {
//         return `I am ${this.name} and my company is best`
//     }
//     expYear() {
//         return 2020 - this.exp;
//     }
//     static add(a, b) {
//         return a + b;
//     }
// }
// let newEmp = new emp('saurabh', 20, "manager");
// console.log(newEmp);
// console.log(newEmp.slogan());
// console.log(newEmp.expYear());
// console.log(emp.add(5,20));

// class programmer extends emp {
//     constructor(name, exp, role, lang, github) {  /* ha constructor programmer class cha ahe */
//         super(name, exp, role);                 /* super manje agodarchya classcha (emp) constructor */
//         this.lang = lang;
//         this.github = github;
//     }
//     favLanguage(){
//         if(this.lang == "java"){
//             return " favourite language is java";
//         }
//         else{
//             return " favourite language is javaScript";
//         }
//     }
//     static multiply(a, b) {
//         return a * b
//     }
// }
// let saurabh = new programmer("rajiv", 40, 'programmer', 'java', 'raj123');
// console.log(saurabh);
// console.log(saurabh.slogan());
// console.log(saurabh.expYear());

// QUIZZ 32
// class lib{
//     constructor(booklist){
//         this.booklist = booklist;
//         this.issuedBook = {};
//     }
//     getbook(){
//         this.booklist.forEach(element => {
//             console.log(`${element} is available`)
//         });
//     }
//     issueBook(bookname, user){
//         if(this.issuedBook[bookname] == undefined){
//         this.issuedBook[bookname] = user;
//         console.log(`${bookname} issue to ${user}`)
//         }
//         else{
//             console.log("this book already issued");
//         }
//     }
//     returnBook(bookname){
//         delete this.issuedBook[bookname];
//         console.log(`${bookname} return to library`)
//     }
// }
// harrylib = new lib(['marathi', 'hindi', 'english']);
// console.log(harrylib);



// ************  ASYNCHRONOUS PROGRAMMING ************

// Asynchronous = Non-blocking.

// ways to write ASYNCHRONOUS code
// 1. Async/await
// 2. callbacks
// 3. promises


// *******CALL BACKS Function *********
// call back function means eka function chya aat dusra function        !IMPORTANAT

// const students = [
//     { name: 'harry', lang: 'java' },
//     { name: 'garry', lang: 'javascript' }
// ]
// console.log(students)

// // function enrollStd(student) {
// function enrollStd(student, callbacks) {
//     setTimeout(function () {
//         students.push(student);
//         console.log('student added successfully')
//         callbacks();
//     }, 5000)
// };

// function getStd() {
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(elements){
//             str += ` <li>${elements.name} </li>`
//         });
//         let parent = document.getElementById("student");
//         parent.innerHTML = str;
//         console.log('new student added successfully')
//     }, 3000);                              /* ikde jar 1 chya jagi 5 lihila tr jerry pn add honar */
// }                                        /* enroll function late run hotoy mhnun jerry disat nahi */

// let newStd = { name: 'jerry', lang: 'python' }
// enrollStd(newStd, getStd)
// enrollStd(newStd)
// getStd()


// ********** MY EXAMPLE FOR CALL-BACK FUNCTION*****************
// function add(a, b){
//     setTimeout(() => {
//         console.log(a+b)
//         // return a+b;
//     }, 2000);
// }

// function complex(add){
//     setTimeout(() => {
//         // console.log(add(10,20))
//         add(10,20)
//     }, 5000);
// }
// complex(add)
// console.log(complex(add(10,20)))


// ************ PROMICES ***********
// ------- ABOVE EXAMPLE USING PROMICES ---------
// const students = [
//     {name: "saurabh"},
//     {name: "sagar"}
// ]

// function enroll(student){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             students.push(student);
//             console.log("student Added");
//             let error = false;
//             // let error = true;
//             if(!error){
//                 resolve("resolve zala");
//             }
//             else{
//                 reject("reject zala");
//             }
//         }, 5000);
//     })
// }

// function getStd(){
//     setTimeout(() => {
//         console.log("hi add");
//         let str = "";
//         students.forEach(function(element){
//             str += `<li>${element.name}</li>`
//         })
//         document.getElementById("student").innerHTML = str;
//     }, 2000);
// }
// let newStd = {name: "ajay"};
// enroll(newStd).then(function(error){
//     getStd()
// }).catch(function(error){
//     console.log("rejecteddd", error);
// })

// enroll(newStd);
// getStd();


// ************* USING ASYNC-AWAIT *********************
// const st = async ()=>{
//     console.log("before enroll")
//     const enr = await enroll(newStd);
//     console.log(enr);
//     console.log("after enroll")             /* async chya veli promices use krave lagtat ch */

//     console.log("before getstd")
//     const gstd = await getStd();
//     console.log(gstd);
//     console.log("after getstd")
// }
// st();



// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             // console.log('hiiii')
//             const error = false;
//             // const error = true;
//             if (!error) {
//                 console.log('Function: your promise resolve');
//                 resolve('successfully done');
//             }
//             else{
//                 console.log('Function: your promise reject');
//                 reject('sry not fullfilled');
//             }
//         }, 2000);
//     })
// }
// func1().then(function(error){
//     console.log('Harry: thanks for resolving '+ error);
// }).catch(function(error){
//     console.log('Harry: very bad bro. reason: '+ error);
// });

// MY PROGRAM FOR PROMISES

// function greater() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const a = 46;
//             if (a > 45) {
//                 console.log('a is greater than 45');
//                 resolve()
//             }
//             else if(a == 45){
//                 console.log('a is equal to 45')
//             }
//             else {
//                 console.log('a is smaller than 45');
//                 reject()
//             }
//         }, 2000);
//     })
// }
// greater().then(function(){
//     console.log('a > 45');
// }).catch(function(){
//     console.log('a < 45');
// });


// ******* ARROW FUNCTION **********
// let func = function(){
//     console.log('saurabh');
// }
// func();

// function funcc(){
//     console.log('Ravanang');
// }
// funcc();

// const func = ()=>{
//     console.log('saurabh');
//     return "Ravanang"
// }
// func()

// const greet = function(){
//     return 'good morning';
// }
// greet();                        /* karun paha */
// console.log(greet());

// const name = first=>console.log(first)
// name("saurabh")


// const greet = ()=>{
//     return 'good morning';
// }
// console.log(greet());

// const greet = ()=> 'good morning';      /* manje yat bracket aani return lihaychi garaj naste */
// console.log(greet());

// const greet = ()=> ({name: 'saurabh'})         /* object la lihtana () bracket dyayche */
// console.log(greet());

// const greet = name=> 'good morning ' + name;
// console.log(greet('saurabh'));                    /* ek argument asel tr no () */

// const greet = (name, msg)=> 'good morning ' + name + msg;
// console.log(greet('saurabh ', 'byee'));                      /* don argument asel tr */


// ********** FETCH API ***********


// function getdata(){
//     url = "harry.txt";                      /* fetch made 2 time then use kel jat */
//     fetch(url).then((Response)=>{
//         return Response.text();
//     }).then((data)=>{
//         console.log(data)
//     })
// }
// getdata()


// *********** USING ASYNC-AWAIT ************
// async function getdata(){
//     url = "harry.txt";
//     let data = await fetch(url);
//     newdata = await data.text();
//     console.log(newdata);
// }
// getdata();


// function getdata(){
//     url = "https://api.github.com/users";
//     fetch(url).then((Response)=>{
//         return Response.json();
//     }).then((data)=>{
//         console.log(data);
//         // data.forEach(element => {
//         //     console.log(element);
//         // });
//     })
// }
// getdata()

// function postdata(){
//     // url = "http://dummy.restapiexample.com/api/v1/create";
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = "{"name":"aposogljd","salary":"123","age":"23"}"
//     params = {
//         method: 'post',
//         header: {
//             'Content-Type': 'application/json'
//         },
//         // body: JSON.stringify(data)   /* stringify tevha use kraych jevha data object made asel */
//         body: data
//     }
//     fetch(url, params).then((Response)=>{
//         return Response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// postdata()

// ******** ASYNCH & AWAIT ************
// async function harry(){
//     console.log('inside harry function');
//     const response = await fetch("harry.txt");
//     console.log('before response');
//     const user = await response.text();    /* ikde jr json file aseel tr text chya jagi json lihaych */
//     console.log('response resolved')        /* async ek promise return krto tya made await lihila tr */
//     return user;                      /* tr await wait krto aani bakichya files agodar execute hotat */
//     // return 'saurabh';                    /* aani shevti await execute hoto */
// }
// console.log('before call harry')
// let a = harry()
// console.log('after call harry')
// console.log(a)
// a.then(data => console.log(data))
// console.log('last line of code')


// ************* MY PROGRAM FOR ASYNC-AWAIT****************

// const first = ()=>{
//         setTimeout(() => {
//             // return "saurabh"
//             console.log("saurabh")
//         }, 1000);
//     }
// const second = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("ravanang")
//             // console.log("Ravanang")
//         }, 5000);
//     })
// }
// const third = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("mumbai")
//             // console.log("Mumbai")
//         }, 3000);
//     })
// }

// const last = async ()=>{
//     let f = first();
//     console.log(f)
//     let s =await second();
//     console.log(s)
//     let t = await third()
//     console.log(t)
//     }

// last();


// ********** ERROR HANDLING *************
// throw new Error("hiiiiiiiii saurabh")
// let a = 'hi bhai';
// // a= undefined;
// if (a != undefined) {
//     throw new Error('this is not undifined')    /* yane aapn error banvu shakto */
//     // console.log('this is not undifined')
// }
// else {
//     console.log('this is undifined')
// }

// try {
//     // a = sajjvdsa         /* jar try made error asel tr to show ny hott pn catch made lihilel dakhvto */
//     console.log('we are in try')    /* jar error nasel tr try madhla ch dakhvto */
//     functionkl()
// } catch (error) {
//     console.log('we are in catch')
//     console.log(error)                      /* error la text made show karto */
//     console.log(error.name)
//     console.log(error.message)
// }finally{
//     console.log('we are in finally');       /* finally run honarch */
//     dsbfdksf()
//     console.log('we are in finally 2');       /* finally run honarch */
// }


// ********* EXPRESSIONS *********

// let reg = /mumbai/g  /* jar as lihila tr tyala boltat regular expression literal */
// let reg = /mumbai/   /* g means global */
// let reg = /mumbai/i   /* i means case in sensitive */

// console.log(reg);
// console.log(a);
// console.log(a.source);

// functions to match expressions
// 1 . exec() - this function will return an array for match or null for no match

// let b = "i am from mumbai and there are lots of beaches is mumbai "
// let result = reg.exec(b);
// console.log(result);
// result = reg.exec(b);
// console.log(result);
// result = reg.exec(b);
// console.log(result);

// if(result){
// console.log(result);
// console.log(result.input);
// console.log(result.index);
// }

// 2. test()  - returns true or false
// result2 = reg.test(b)
// console.log(result2)

// 3. match() - returns array of result or null
// result3 = reg.match(b)    /* this is wrong syntax */
// result3 = b.match(reg);         /*ultaa asto yat */
// console.log(result3);

// 4. search() - returns index of first match else -1
// result4 = reg.search(b);        /* wrong */
// result4 = b.search(reg);
// console.log(result4)            /* jar same nasla tr -1 yenar */


// 5. replace() - returns new replaced string with all the replacement
// if no g flag is given first match will be replaced oterwise all replaced   TRY YOUR-SELF

// result5 = b.replace(reg, 'ratnagiri');
// console.log(result5);


// ******** REGULAR EXPRESSION WITH META-CHARACTERS********* [^,$,.,*,?,\]   TRY YOURSELF

// let reg = /mumbai/;
//  reg = /^mumbai/;                /* ^ yacha meaning mumbai string made starting la aahe ka */
// reg = /bai$/;                       /* $ means ends with that keyword */
// reg = /mum.ai/                      /* . means tya jagi konta pn character asel (try itself) */
// reg = /m*bai/                      /* (*) means word made kiti pn char asle tri match hott */
// reg = /mum?bai?/                    /* ? means optional aahe (m aani i) */
// reg = /mu\*mbai/                    /* special char cha match aanyasathi */
// let b = "i am from mumbai and there are lots of beaches is mu*mbai";
//  reg = /ratnagiri/;
// let b = "i am from mumbai and there are lots of beaches is mumbai";
// console.log(reg.source);

// let result = reg.exec(b);
// console.log(result);

// if(reg.test(b)){
//     console.log(`the ${reg.source} is in string "${b}" `)
// }
// else{
//     console.log(`the ${reg.source} is not in string "${b}"`)
// }

// ********* CHARACTER SET ********* [ FOR MORE INFO WATCH TUT 48]

// let reg = /mumbai/;
// reg = /mu[am]bai/  , /mu[a-z]bai/                   /* yacha means []madhlas key word match zala pahije */
// reg = /mu[^mjk]bai/                         /* ^ yacha means ki bracket madhla match ny hoyla pahije */
// reg = /jer{2}y/;            /* {2} means r 2 vela ahe ka?? te check karto yalach (QUANTIFIERS) boltat */
// reg = /jer{0,2}y/;              /* means 0,1,2 vela ahe ka?? */

// b = 'hii jerry'
// let b = "i am from mumbai";

// grouping  - we use paranthesis for grouping ()
// reg = /(bar){2}/                    /* means bar 2 time asla pahije */
// b = "barbarmumbai"
// reg = /(bar){2}([0-9]p){4}/     /* another example */
// b = "barbar1p2p3p4p"

// result = reg.exec(b);
// console.log(result)

// if(reg.test(b)){
//     console.log( `the ${reg} match string "${b}"` )
// }
// else{
//     console.log( `the ${reg} does not match string "${b}"` )
// }

// ********* SHORTHAND CHARACTER CLASSES ***********

// console.log("This is tutorial 49");

// Character classes
// let regex = /\war/;     //word character - _ or alphabet or numbers
// regex = /\w+d1r/;       // \w+ means one or more word characters
// regex = /\Wbhai/;       // Non word character
// regex = /\W+bhai/;      // \W+ means more than one Non word character
// regex = /number \d999/; // \d means digit
// regex = /number \d+/;   // \d+ means more than one digit
// regex = /\D999/;        // \D means non digit
// regex = /\D+999/;       // \D+ means more than one non digit
// regex = /\ska number/;  // Match whitespace character
// regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
// regex = /\Ska number/;  // Match non whitespace character
// regex = /\S+ka number/; // Match one or more than one non whitespace character
// regex = /4r5r\b/;  // word boundary

// // Assertions
// regex = /h(?=y)/;
// regex = /h(?!y)/;
// str = "harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";



// let result = regex.exec(str);
// console.log("The result from exec is ", result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }


// ******** ITERATION ********* ITERATORS

// function fiteration (values){
//     let newindex = 0;
//     // we will return an object
//     return {
//         next : function(){
//             if(newindex < values.length){
//                 //we will return below object
//                 return{
//                     value: values[newindex++],
//                     done: false
//                 }
//             }
//             else{
//                 return{
//                     done: true
//                 }
//             }
//         }
//     }
// }
// let fruitesarray = ['apple', 'mango', 'banana', 'grapes'];
// fruitesarray.forEach(function(ele){
//     console.log(ele)
// })
// console.log(fruitesarray);
// let fruites  = fiteration(fruitesarray);
// console.log(fruites)
// console.log(fruites.next().value)
// console.log(fruites.next().value)
// console.log(fruites.next())
// console.log(fruites.next())
// console.log(fruites.next())


// ********* GENERATORS **********

// function* numgen(){
//     let i = 0;

//     // yield 1;
//     // yield 2;
//     // yield 3;
//     // yield 4;
//     // while (i<5) {
//     while (true) {
//         yield i++;
//         // let num = Math.ceil(10*Math.random())
//         // yield num
//         // yield (i++).toString();
//     }
// }
// let gen = numgen();
// console.log(gen)
// console.log(gen.next())
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next())



//********* FOR IN AND FOR OF LOOP ************
// obj = {
//     name:'saurabbh',
//     lang: 'java',
//     post:'manager',
//     salary: 20000
// }
// console.log(obj)

// for(key in obj){
//     console.log(`the ${key} of the emp is ${obj[key]}`)
// }

// let names = ['saurabh', 'rahul', 'rohit', 'ketan'];
// names.forEach((elements)=>{
//     console.log(elements)                    /* USING FOREACH LOOP */
// })

// for (let index = 0; index < names.length; index++) {
//     const element = names[index];
//     console.log(element)                     /* USING FOR LOOP */
// }

// for(key in names){
//     console.log(names[key])                  /* USING FOR IN LOOP */
// }

// for (key of names) {
//     console.log(key)                         /* USING FOR OF LOOP */
// }



// ********* MAPS ********

// let myMap = new Map()
// console.log(myMap)

// let key1 = 'str';
// let key2 = {};
// let key3 = function(){};

// myMap.set(key1, 'saurabh');
// myMap.set(key2, 'saurabhhhh');
// myMap.set(key3, 'saurabhhhhhhhhhhhhh');

// myMap.set("key1", 'saurabh');
// myMap.set({name:"rahul"}, 'saurabhhhh');
// myMap.set("key3", 'saurabhhhhhhhhhhhhh');
// console.log(myMap)

// let value1 = myMap.get("key1");
// console.log(value1)

// let size = myMap.size;
// console.log(size)

// for (const [key, value] of myMap) {
//     console.log(key , value)
// }

// myMap.forEach((value, key)=>{       /* foreach loop made ulta lihayla lagat (value, key) */
//     console.log(key, value)
// })

// // CONVERTING TO ARRAY
// let myArray = Array.from(myMap);
// console.log(myArray)

// let myKeyArray = Array.from(myMap.keys());
// console.log(myKeyArray)

// let myValueArray = Array.from(myMap.values());
// console.log(myValueArray)

// myArray.forEach((Element)=>{
//     console.log(Element)
// })

// ************ ALARM APP ***********

// let audio = new Audio('5.mp3');
// console.log(audio)
// audio.play();

// let btn = document.getElementById('btn')
// btn.addEventListener('click', addAlarm);

// function ringBell(){
//     audio.play()
// }
// // console.log(btn)
// function addAlarm(){
//     // e.preventDefault();
//     let songInput = document.getElementById('songInput')
//     let date = new Date(songInput.value);
//     console.log('adding alarm for '+ date)
//     let now = new Date();
//     console.log('current time is '+now)
//     let leftTime = date - now;
//     console.log('time left for alarm...'+leftTime)
//     // 3-10-2022 18:10:00
//     // 6-23-2022 18:40:00
//     if(leftTime >= 0){
//         setTimeout(() => {
//             console.log('ringing alarm...')
//             ringBell()
//         }, leftTime);
//     }
// }

// ********** SETS ***********
//  let set = new Set();
//  console.log(set)

//  set.add({})
//  set.add('this')
//  set.add('that')
//  set.add('those')
//  set.add('those')                   /* same not allowed and ignore itself */
//  set.add('them')
//  console.log(set)

//  let myset = new Set([1,45,50,'how',{a:45, z:99},1])   /* another method */
//  console.log(myset)

// console.log(myset.has(45))
// console.log(set.has(450))
// console.log(set.add(45))
// console.log(set.clear())
// console.log(set.entries())
// console.log(set.keys())
// console.log(set.values())
// console.log(set)

// console.log('before removing', myset);
// myset.delete(45)
// console.log('after removing', myset);


// myset.forEach((ele)=>{
//     console.log(ele)
// })
//                                 /*fakt for of ani for each loops ch use kele jatat */
// for (const ele of myset) {
//     console.log(ele)
// }

// let a = Array.from(set)           /* converting set to array */
// console.log(a)


// ************ SYMBOL ************
// let a = Symbol('aa')
// let b = Symbol('aa')
// console.log(a===b)      /* symbol lihlyane te vegle hotat return false */

// let c = "hiii";
// let d = "hiii";              /* return true */
// console.log(c===d);

// let obj = {}
// obj.key= "this";
// obj.name = 'saurabh'         /* normal object */
// console.log(obj)

// console.log(JSON.stringify(obj))
// let k1 = Symbol();
// let k2 = Symbol();

// let myobj = {}
// myobj[k1] = 'rohit';            /* oject using symbol */
// myobj[k2] = 'ramesh';
// myobj['name'] = 'saurabh';
// myobj.game = 'pubg';
// console.log(myobj)
// console.log(myobj[k1])
// console.log(myobj[k2])
// console.log(myobj.k2)   /* ass nahi kru shakat bcoz of symbol*/
// console.log(myobj.game)

// for(key in myobj){                  /* for in loop made symbol la ignore kel jatt, ghet ny */
//     console.log(key, myobj[key])
// }

// console.log(JSON.stringify(myobj))


// ********** DESTRUCTURING ************

// a=10;
// b=20;
// [a,b]=[b,a]
// console.log(a,b)

// let a,b;
// [a,b] = [30,40]                      /* Array destructuring */
// console.log(a,b)

// [a,b,c,d] = [1,2,3,4,5,6,]              /* madhla no ny pahije assel tr ek , jast dyaycha */
// [a,b,c,...d] = [1,2,3,4,5,6,]            /* 3 dot ch dyave lagtat */
// console.log(a,b,c,d)

// ({a,b,c,...d} = {a:6, b:10, c:20, d:45, e:50})
// ({a,b,c,...d} = {a:6, c:10, b:20, d:45, e:50})
// console.log(a,b,c,d)

// const fruites = ["apple", "mango", "orange", "grapes", "kiwi"];
// [a,b,c,...d] = fruites;
// console.log(a,b,c,d)

// const emp = {
//     name: "saurabh",            /* object destructuring */
//     post: "programmer",
//     salary: "20000",
//     exp: 5,
//     slogan: function(){console.log("slogan here")}
// }
// console.log(emp)

// const {name,post,salary} = emp;
// const {post,...salary} = emp;
// const {...salary} = emp;
// const {salary} = emp;
// console.log(name,post, salary)
// console.log( salary)

// const {name,post, salary2} = emp;
// console.log(name,post, salary)      /*he wrong yenar (salary same ch lihayla lagnar)  */




// ********** DRAG & DROP TUTORIAL ************
// let whitebox = document.getElementsByClassName('whitebox');
// let imgbox = document.querySelector('.imgbox')
// // console.log(whitebox, imgbox)

// imgbox.addEventListener('dragstart', (e)=>{
//     console.log('dragStart start')
//     e.target.className += ' hold'
//     setTimeout(() => {
//         e.target.className = ' hide'
//     }, 0);
// })

// imgbox.addEventListener('dragend', (e)=>{
//     console.log('dragEnd start')
//     e.target.className = 'imgbox'
// })

// for (white of whitebox) {
//     white.addEventListener('dragover', (e)=>{
//         e.preventDefault();
//         console.log('dragOver start')
//     })
//     white.addEventListener('dragenter', (e)=>{
//         console.log('dragEnter start')
//         e.target.classList  += ' dashed'
//     })
//     white.addEventListener('dragleave', (e)=>{
//         console.log('dragLeave start');
//         e.target.classList = ' whitebox'
//     })
//     white.addEventListener('drop', (e)=>{
//         console.log('drop start')
//         e.target.append(imgbox)
//     })
// }


// *********** TOP IMPORTANT ARRAY METHODS **********
// they are foreach, includes, filter, map, reduce, some, every, sort, array.from(), array.of()

// const num = [1, 10, 45, 2, 3, 40, 4, 5, 6];
// const alpha = ["a", "b", "c", "d", "e", "f"];
// console.log(num)
// let newNum = num.includes(5);
// console.log(newNum)

// let arrFilter = num.filter((Element)=>Element>3);    /* use for making search */
// console.log(arrFilter)          /* yat callback function dyayla lagat aaani ek condition */

// let arrMap = num.map((Element)=>Element)
// console.log(arrMap)

// let arrReduce = num.reduce((total, value)=> total + value);
// console.log(arrReduce)      /* ekhadya array madhil elements chi total kadnya sathi use hoto */

// num.some((Element)=>{        /*ya made har veli check karnar ani tya nusar output denar  */
//     console.log(Element>4)
// });
// const arrSome = num.some((Element)=>Element>4)
// const arrSome = num.some((Element)=>Element<0)
// console.log(arrSome)            /* ya made fakt ekda check karnar */

// const arrEverry = num.every((Element)=> Element < 10)
// console.log(arrEverry);         /* ya made sagle elements condition true krayla pahije */

// const arrSort = num.sort((a, b) => a > b ? -1 : 1)
// const arrSort = num.sort((a, b) => b-a)
// const arrSort = num.sort((a, b) => console.log(a,b))
// console.log(arrSort)             /* ascending descending sathi */

// const arrOf = Array.of(1,2,4,8,5);
// console.log(arrOf);                 /* arguments cha array banvto */

// console.log(num)


// const a = document.createElement("h1")
// a.id = "a";
// // a.setAttribute("style", "color:green")          /* ekch style pass kru shakto */
// a.setAttribute("style", "font-size: 20px")
// a.style.color = "green";
// let body = document.querySelector("body");
// body.appendChild(a);


// function display(){
//     time = new Date();
//     console.log(time);
//     document.querySelector('#a').innerHTML = time;
// }
// setInterval(display, 1000)

// console.log(false==0)
// console.log(false===0)

// call, apply, bind
// let emp = {
//     name: "hitesh",
//     age: 25,
//     post: "programmer",
//     slogan: function(){
//         console.log(this)           /*jar function aat asel tr */
//         // console.log(this.name)
//     }
//     // slogan: function(state, country){
//     //     console.log(this.name+ " "+ state+ " "+country)           /*jar function baher asel tr */
//     //         // console.log(this.name)
//     //     }
// }
// emp.slogan()
// emp.slogan("maharashtra", "india")

// let slogan= function(state, country, code){
//     console.log(this)
//     console.log(this.name+ " "+ state+ " "+country+ " "+code)           /*jar function baher asel tr */
// }
// slogan.call(emp)
// slogan.call(emp,"as","sadd", 4568)

// let emp2 = {
//     name: "ritesh",
//     age: 30,
//     post: "programmer"
// }
// emp.slogan.call(emp2)
// slogan.call(emp2)
// emp.slogan.call(emp2,"mumbai", "india")
// slogan.call(emp2,"mumbai", "india", 4000)             /* call made ek ek argument pass kraayla lagte */
// slogan.apply(emp2,["mumbai", "india",400054])       /* apply made array made argument pass kraayla lagte */

// //bind la variable made store krayla lagto ani then call...not console.log
// let newBind = slogan.bind(emp, "mumbai", "usa")
// newBind()


// ******** CLOSURES *******

// function total(a){
//     console.log(a)
//     c=3
//     return function add(b){
//         return(a+b+c)
//     }
// }
// let t = total(1)
// console.log(t(5))

// let total = (a,b,c)=>{
//     let y=10;
//     return{
//         add:()=>{
//             return a+b+y
//         },
//         addTwo:(a)=>{
//             return a+b
//         },
//         addThree:(z)=>{
//             return a+b+z
//         },
//         sum:()=>{
//             return a*b*c
//         }
//     }
// }
// let newTotal = total(2,4,5);
// console.log(newTotal.add())
// console.log(newTotal.addTwo(10))
// console.log(newTotal.addTwo())
// console.log(newTotal.addThree(10))
// console.log(newTotal.sum())


// function outerFunction() {
//   let outerVariable = "I'm from outside!";

//   function innerFunction() {
//     console.log(outerVariable); // ✅ Accesses outerVariable
//   }

//   return innerFunction;
// }

// const myClosure = outerFunction();
// myClosure();


// ******** SPREAD AND REST *********


// function addNum(a,b,c,...d){
//     console.log(d)                              /* example of rest operator */
//     return a+b+c;                   /* rest made elements combine hotat eka array made  */
// }
// console.log(addNum(2,3,4,5,6))
// const res = addNum(2,3,4,5,6)
// console.log(res)


// let names = ["saurabh", "ketan", "mayur", "manish"];

// function getName(name1, name2, name3){          /* example of spread operator */
//     console.log(name1, name2, name3)  /* spread made combine elements la vegla kela jato individualy */
// }
// // getName()
// // getName(names[0],names[1],names[2])
// getName(...names)


// ***** HOISTING ********
// hoisting hi purn pane memories made aste, hoisting manjech memory
//ya example made function kadhi hi call kela tri chalto (pahila, last)
// pn var la nantrla declare kela ani console agodar kel mhnun output undefined yetoy karan tyala nantrla declare kelay
// tyamule a=5 he memory made store hotoy
// pn jar a la nantrla defined ch nahi kela tr output error yenar


// getName()
// console.log(a)

// var a = 5;
// let a = 5;

// function getName(){
//     console.log("saurabh")
// }


// let getName = ()=>{
//     console.log("saurabh")                 /* throw error */
// }

// getName()
// console.log(a)


//  ****** MEMOIZATION ****** its like usememo hook in react

// memoization is used to reduce time-consuming
// manje jar samech data asel tr to cache made store hoto aani toch return dakhvto

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



// ******* DEBOUNCING ******* opposite as React weathe app (useEffect)
// debouncing means ek ek letter vr function call karnya peksha at the end call karaycha
// jya function made data api madhun yetoy tyala sarkha sarkha call ny krayla pahije mhnun use kartat

// let count = 0
// function getdata(){
//     console.log("getdata", count++)
// }

// function myDebounce(call,d){
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             call()
//         },d);
//     }
// }

// let checkDebounce = myDebounce(getdata,1000)

// **** THROTTLING ****
// debouncing and throttling donhi same ch astat pn thoda farak asto
// farak ha ki debouncing made user ch lihun zala ki kahi mili sec ne function call hotoy
// aani throttling made at the end kahi fix timeout nantr function call hoto.


// async function getdata(){
//     let data = await fetch('https://fakestoreapi.com/products');
//     data = await data.json()
//     console.log(data)
// }
// getdata()



// ********* BUBBLING , CAPTURING , PROPAGATION ************
// BUBBLING = child to parent               default 

// CAPTURING = parent to child 
// for capturing we have to write TRUE keyword

// upperbtndiv.addEventListener("click", (e)=>{
//     // e.stopPropagation()
//     console.log("upperbtndiv")
// })
// btnDiv.addEventListener("click", (e)=>{
//     // e.stopPropagation()
//     console.log("divvvv")
// },true)

// divBtn.addEventListener("click", (e)=>{
//     // e.stopPropagation()
//     console.log("btnnnnn")
// })


// CURRYING AND INFINITE CURRYING

// function add(a,b){
//     return a+b;
// }

// let res = add(4,5)
// console.log(res)

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// let res = add(4);
// console.log(res)
// let newdata = res(5)                       /* instead of this */
// console.log(newdata)
// let final = newdata(6);
// console.log(final)

// let res = add(4)(5)(6)
// console.log(res)


// function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
// }

// let res = add(4)(5)(6)(5)()             /* end la ek extra () dyav lagat */
// console.log(res)


// original objectla change kela tr shallow copy made pn property change honar.
// original objectla change kela tr deep copy made pn property change ny honar.


// let originalObj = {
//     name:'Saurabh',
//     add:{city:"mumbai"}
// }

// console.log(originalObj,"originalObj")

// // let shallowCopy = Object.assign({},originalObj) 
// let shallowCopy = {...originalObj}

// let deepCopy = JSON.parse(JSON.stringify(originalObj))

// originalObj.add.city = "Ratnagiri"

// console.log(shallowCopy,"shallowCopy");
// console.log(deepCopy,"deepCopy")
// console.log(originalObj,"originalObj")



// let obj1 = {name:"a",age:20,sal:40}
// let obj2 = {name:"b",age:40}
// console.log(obj1,obj2);

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);


// mainval2 = document.getElementById("mainval")
// increment = document.getElementById("increment")
// decrement = document.getElementById("decrement")
// let data = parseInt(mainval2.value); 

// increment.addEventListener("click", function() {
//     console.log("Increment clicked");
//     data += 1;  // Increment the data by 1
//     mainval2.value = data;  // Update the input field with the new value
//     console.log("Data after increment:", data);
// });

// decrement.addEventListener("click", function () {
//     console.log("decrement")
//     data -= 1;  // Increment the data by 1
//     if(data<0){
//         data =0
//     }
//     else{
//         mainval2.value = data;  // Update the input field with the new value
//     }
//     console.log("Data after decrement:", data);
// })

// recursion 


// function factorial(n) {
//   if (n === 0) {
//     return 1; // base case
//   } else {
//     return n * factorial(n - 1); // recursive call
//   }
// }

// console.log(factorial(5)); // 120



// function flattenArray(arr) {
//   let result = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item)); // Recursive call
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// }

// const nested = [1, [2, [3, [4, 5]]]];
// console.log(flattenArray(nested));



// let a="saurabh"
// let b= a.split("").sort((a,b)=> b-a)
// let b= a.split("").reverse().join("")
// console.log(b);


// how to write coockies 

// document.cookie = "key1 = value1; key2 = value2; expires = date";

// document.cookie = "username=Alice; expires=Fri, 31 Dec 2025 23:59:59 UTC";


// The Temporal Dead Zone (TDZ) is the time between the declaration of a variable

// Hoisting is JavaScript's behavior of moving declarations to the top


// function name(a,b,...c) {
//     console.log(a,b,c);
    
// }

// let marks = [10,20,30,40]
// let marks = {
//     user:'ksabd',
//     age:20,
//     role:'programmer',
//     salary:20000
// }

// name(...marks)


// function wsname() {
//    var a=10
// }
// wsname()
// console.log(a);


// {
//     let exm = "Saurabh bdsk ";

//     console.log(exm);
// }

// console.log(exm);


// const greet = function(){
//    console.log("Hello");
// }

// function execute(fn){
//    fn();
// }

// execute(greet);


// function counter (){
//     let count = 0;
//     return function(){
//         console.log(count++)
//     }
// }

// let final = counter()
// final()
// final()


// (function add(a,b) {
//   console.log("I run immediately!");
//   console.log(a+b);
// })(1,2);

// console.log("10" + 1);
// console.log("10" + true);
// console.log(10 + true);
// console.log(10 + undefined);

// let a = 10;
// let x=a

// function changeValue(x) {
//     x = 20;
//     console.log("Inside function:", x);
// }

// changeValue(a);

// console.log("Outside function:", a);