// const a = 12;
// Basic Types 
//   Number, String, Boolean
//   Array, Tupples
//   Any, Unknown, Never, Void
//   Enums
// let a : number;
// let str : string;
// let day : boolean;
// let variable : number;
// let arr : [];
// let tup : [number, string] = [1, 'Arif']                //Tupple
// Any
var kuchBhi; //disable type checking.
kuchBhi = '12';
kuchBhi = 12;
// when you don't specify a type, TS can't infer(conclude/guess) it from context, The compiler will typically default to any..
// Any kbhi bhi nii hona chiye hmesha type assign kriye (good practice)..
// Explicit - writing out the type :
var FirstName = 'Mohd';
// Implicit - TS will guess the value type, based on assigned value. -- Having TS "Guess" the type of the value is called infer..
var MiddleName = "Arif";
//Unknown
var PtaNhi;
PtaNhi = 12;
PtaNhi = "Arif";
//Never             next code will not execute whenever Never Type use.
// Function me Daal sakte h Never type next function execute ni krana ho to..very Rare Use..
// Void      Jab function me return nii dena hota h tb Void ka use krte h..
function abcd() {
    return "Arif";
}
abcd();
function printHello() {
    console.log('Hello!');
}
//Enum              Enumeration(ek-ek krke btana) 
//  Enum is a special "class" that represent a group of constant(unchangeable Variable).
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["NotFound"] = 404] = "NotFound";
    statusCodes[statusCodes["Success"] = 200] = "Success";
    statusCodes[statusCodes["Accepted"] = 202] = "Accepted";
    statusCodes[statusCodes["Badrequest"] = 400] = "Badrequest";
})(statusCodes || (statusCodes = {}));
console.log(statusCodes.Success);
console.log(statusCodes.Badrequest);
