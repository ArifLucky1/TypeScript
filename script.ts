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

let kuchBhi : any;         //disable type checking.
kuchBhi = '12'
kuchBhi = 12

// when you don't specify a type, TS can't infer(conclude/guess) it from context, The compiler will typically default to any..
// Any kbhi bhi nii hona chiye hmesha type assign kriye (good practice)..

// Explicit - writing out the type :
        let FirstName : string = 'Mohd';

// Implicit - TS will guess the value type, based on assigned value. -- Having TS "Guess" the type of the value is called infer..
        let MiddleName = "Arif";


            //Unknown

let PtaNhi : unknown
PtaNhi = 12;
PtaNhi = "Arif"


            //Never             next code will not execute whenever Never Type use.
// Function me Daal sakte h Never type next function execute ni krana ho to..very Rare Use..


            // Void      Jab function me return nii dena hota h tb Void ka use krte h..

function abcd() : string {
    return "Arif"
}
abcd()

function printHello(): void {
  console.log('Hello!');
}


            //Enum              Enumeration(ek-ek krke btana) 
                            //  Enum is a special "class" that represent a group of constant(unchangeable Variable).

    enum statusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        Badrequest = 400 
    }

    console.log(statusCodes.Success);
    console.log(statusCodes.Badrequest);
    