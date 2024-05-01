//declearing a normal function

function greet(){  //parameter of a function pass in prentices()
    console.log('Hello everyone'); //body of a function
}

greet(); //calling a function

//Function parameters

function myname(name){
    return ('My name is ' + name)
}
let result = myname('Siam');

console.log(result);

//return values in function 

function add(a,b){
    return a + b;
}
let add_result = add(3,4);
console.log(add_result);

//function expression 

let new_function = function(firstname, lastname){
    return firstname  +' '+ lastname;

}

let check_result=new_function("Maheraj", 'Siam');
console.log(check_result);


//arrow function ES6

let arrow_function = (city,country) => {
  return {city, country}
  
}

let arrow_check = arrow_function("Sylhet", "Bangladesh");

console.log(arrow_check);

//anonymos function

let function_anonymos = function(name){
    return ( "My name is " + name);
}
let result_function = function_anonymos("Siam");
console.log(result_function);

//scope function 


function outer(){
    x=4;
    y=5
    function inner(num1,num2){
        console.log(x+y);
        return(num1+num2);
    }

    console.log(inner(5,14));
}
outer();

//function scope and closure

let funScope_closure = () => {
    var my_new=22;
    let mynew_function=(my_new_age) =>{
        return my_new;
    }
    return mynew_function
}
let invoke_fun= funScope_closure();
console.log(invoke_fun());



function newscope(){
    var xy=23;
    function innerscope(){
        console.log(xy);


    }
  return innerscope;
}
let res_fun=newscope();
res_fun();