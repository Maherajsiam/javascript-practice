// if else

let age = 23;

if (age>18){
    console.log('age is above of 18')
    
}
else {
console.log('age is below of 18')

}

// check reminder by if else

let num = 94; //13 is even number 13/2=remain 1(1!===0 as a number data )

console.log("reminder "+ num%5);
if (num%5===0){
    console.log("even number")
}
else{
    console.log("odd number")
}

//ternary operator

let isEven= num%5===0? "is even number":"odd number";

console.log(isEven);

// nested if else condition

let Course_Name= "MARN Stack Development";
let Stuent_Name = "Hasib Sha";
let Enroll_Check = false;

if(Course_Name==="MARN Stack Development"){

    //console.log("Welcom to course")
    if(Stuent_Name==="Hasib Sha"){
        //console.log(`Hi ${Stuent_Name}, Welcome to your course study`);
        if(Enroll_Check=== true){
            console.log("Payment is confirm, Welcome to " + Course_Name)

        }
        else{
            console.log("Please Enroll to the Course")
        }

    }
    else{
        console.log("Write your name please")
    }

}
else{
    console.log('Choose a right course ')
}


// else if condition 

let num4= 12;
if(num4>12){
    console.log('Number is gather than 12')
    
}
else if(num4===12){
        console.log('Number is equalto 12')
}
else{
    console.log("Number is less than 12")
}

let greet="night"

if(greet=="morning"){
    console.log('Good morning')
}
else if(greet=="afternoon"){
console.log('Good afternoon')
}
else if(greet=="evening"){
console.log("Good evening");
}
else if(greet=="night"){
    console.log('Good night')
}
else {
console.log('Hello greetings')
}

// switch keyword use

switch(greet){
case'morning' : 
console.log('Good Morning');
break;
case "afternoon":
    console.log('Good Afternoon');
    break;
    case "evening":
        console.log('Good Evening');
    break;
    case 'night' : 
        console.log('Good Night');
    break;
    default:
        console.log('Hello Greetings')
break;
}