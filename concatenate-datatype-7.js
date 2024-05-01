//Concatenate example

let str1= 'First Name';
let str2 = 'Second Name'
console.log(str1,'&', str2);
let add_two_string = (str1+" "+ str2);
console.log(add_two_string);


//ES6 backtic and function use 
let my_name='Hasan';
let age = 23;
console.log(`My name is ${my_name} and I am ${age} years old`)

//template string

let about_me = "My name is " + my_name + " and I am " + age + "years old";
console.log(about_me)
console.log(typeof(age), typeof about_me);

//type of value/data

//string
//number
//boolean
//undefined
//null
//bigInt
//Symbols

let string_example= "Alphabet";
let number_example= 22;
let undefined_example;
let null_example = null ;
let boolean_example = true ||false;

let bigInt_example= BigInt(200000000000000000000000000000000);
console.log( typeof(string_example), string_example, typeof (number_example), number_example, typeof (undefined_example), undefined_example, typeof (null_example), null_example, typeof (bigInt_example), bigInt_example, typeof(boolean_example),boolean_example);
let big_int= 12n;

console.log(typeof(big_int));

let myname;
console.log(typeof my_name);

let title = null;
console.log(typeof null, title);

console.log(typeof title);

//boolean
let num2=23;
let str='23';

console.log(num2===str);

//false value in javascript


let falsey_value= Boolean(0);
console.log(falsey_value);
let false_value = Boolean(0,"",null,undefined,false);

//data type check ==,===

let srt= '13';
let num =13;
let num3=13;

// 1st data also gives us true cause of same value, 
//13 == 13 as same shape of value, they won't check value data type (number or string) 
//(2nd condition is true beacuse of same data 13===13true)

console.log(srt==num, num3===num, srt,num); 


                                            



