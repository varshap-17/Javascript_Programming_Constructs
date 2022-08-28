//feet to inches
const prompt=require('prompt-sync')();
var feet = prompt("Please enter feet:");
var inches = feet * 12;
console.log(inches + " Inches");
//inch to feet
const prompt1=require('prompt-sync')();
var inch=prompt1("please enter inch:");
var feet=inch/12;
console.log("feet is:"+feet);
//meter to feet
const prompt2=require('prompt-sync')();
let meter=prompt2("please enter meter:");
let feets=meter*3.2808;
console.log("feet is:"+feets);
//feet to meters
const prompt3=require('prompt-sync')();
let foot=prompt3("please enter feet:");
let meters=foot/3.2808;
console.log("meters is:"+meters);