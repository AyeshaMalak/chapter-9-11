//chap 9 - 11
//Q # 1
var cityname = prompt("Enter City :");
if(cityname === "Karachi" || cityname==="karachi"  ){
    document.write("Welcome to City of Lights! <br/>")
}

//Q # 2
var gender = prompt("Enter your gender:");
if (gender === "male" || gender==="Male"){
    document.write("Good Morning Sir!<br/>");
} else {
    document.write("Good Morning Ma'am!<br/>");
}

// Q # 3
var color = prompt("Enter the colour of traffic light:");
if(color==="red" || color==="Red"){
    alert("Must Stop!");
}
if (color === "yellow" || color==="Yellow"){
    alert("Ready To Move..");
}
if(color === "green" || color==="Green"){
    alert("Move Now!");
}

//Q # 4
var currentFeul = +prompt("Enter the Current fuel of your car in liters:");
if (currentFeul < 0.25){
    alert("Please refill the fuel in your car!");
} else {
    alert("Your fuel amount is stable :)");
}

//Q # 5
var a = 4;
if (++a === 5){
    alert("Given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
    alert("Given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
    alert("Condition 1 is true");
}
if (c === 13){
    alert("Condition 2 is true");
}
if (++c < 14){
    alert("Condition 3 is true");
}
if(c === 14){
    alert("Condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The costs are equal");
}
if (true){
    alert("True");
}
if (false){
    alert("False");
}
if("car" < "cat"){
    alert("Car is smaller than cat");
}

document.write("------------------ <br/>")

// Q # 6   
var total_marks = +prompt("Enter total marks of three subjects:");
var obtained_marks = +prompt("Enter your obtained marks of three subjects:");
var percentage = (obtained_marks / total_marks) * 100;
document.write("<h1>Marks Sheet</h1><br/>" + 
               "Total marks: " + total_marks + "<br/>" +
               "Obtained marks: " + obtained_marks + "<br/>" + 
               "Percentage: " + percentage + "%<br/>");

if(percentage >= 80){
    document.write("Grade: A-One<br/>Remarks: Excellent<br/>");
} else if(percentage >= 70){
    document.write("Grade: A<br/>Remarks: Good<br/>");
} else if(percentage >= 60){
    document.write("Grade: B<br/>Remarks: You need to improve<br/>");
} else {
    document.write("Grade: Fail<br/>Remarks: Sorry!<br/>");
}
    
//Q # 7
var secNumber = 7;
var guessNumber = +prompt("Guess the secret number ranging from 1 to 10:");
if(guessNumber === secNumber){
    alert("Bingo! Correct answer");
} else if(guessNumber === secNumber + 1 || guessNumber === secNumber - 1){
    alert("Close enough to the correct answer");
} else {
    alert("Wrong!");
}

//Q # 8
var myNumber = +prompt("Enter number:");
if(myNumber % 3 === 0){
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3!");
}

//Q # 9
var newNumber = +prompt("Enter any number:");
if(newNumber % 2 === 0){
    alert(newNumber + " is an even number");
} else {
    alert(newNumber + " is an odd number");
}

//Q # 10
var temp = +prompt("Enter Temperature:");
if(temp > 40){
    alert("It is too hot outside");
} else if(temp > 30){
    alert("The weather today is normal");
} else if(temp > 20){
    alert("Today's weather is cool");
} else {
    alert("OMG! Today's weather is so cool");
}

//Q # 11
var mynumber1 = +prompt("Enter First Number:");
var mynumber2 = +prompt("Enter Second Number:");
var operators = prompt("Enter Operator e.g (+ - * / %)");
if(operators === "+"){
    alert(mynumber1 + " " + operators + " " + mynumber2 + " = " + (mynumber1 + mynumber2));
} else if(operators === "-"){
    alert(mynumber1 + " " + operators + " " + mynumber2 + " = " + (mynumber1 - mynumber2));
} else if(operators === "*"){
    alert(mynumber1 + " " + operators + " " + mynumber2 + " = " + (mynumber1 * mynumber2));
} else if(operators === "/"){
    alert(mynumber1 + " " + operators + " " + mynumber2 + " = " + (mynumber1 / mynumber2));
} else if(operators === "%"){
    alert(mynumber1 + " " + operators + " " + mynumber2 + " = " + (mynumber1 % mynumber2));
} else {
    alert("Error! Invalid Operator");
