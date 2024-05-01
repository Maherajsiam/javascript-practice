//string length


let str="       javascript  "
let len = str.length
console.log(len)

//string length trim method

let trimMethod= str.trim();
let check_trim = trimMethod.length;
console.log(check_trim);

//charAt method

let index_num=0;

let charAtMethod=trimMethod.charAt(2);
console.log(charAtMethod);

//uppercase

console.log(str.trim().toUpperCase());

//lowercase

console.log(str.trim().toLowerCase());


//slice method in javascript

let slice_method=str.trim().slice(0,4);
console.log(slice_method);

//character code by metho charCodeAt
let letter_string='AaBbCcDdEeFf'
let charCodeMethod= letter_string.trim().charCodeAt(0);

console.log(charCodeMethod);

// valueOf method in javascript

let value_of = new String ('man')
let value_of_num = new Number (2)
console.log(`value of string check ${value_of.valueOf()}`);
console.log(`value of number check ${value_of_num.valueOf()}`);

console.log(`value of character is ${str.trim().valueOf()}`);


// indexOf method 

let example_char = "javascript"
let index_of = example_char.indexOf('j')

console.log(index_of);
console.log(`show index of character ${example_char.indexOf('a')}`)

let string_for_index='Hello world';

let second_letter_indexcount= string_for_index.indexOf('l');
let secondindex_count=string_for_index.indexOf('l',second_letter_indexcount+2);
console.log(secondindex_count);