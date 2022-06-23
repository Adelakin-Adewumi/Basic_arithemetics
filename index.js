let num1 = parseInt(prompt("Enter your first number :"));
let oper = prompt("Enter any of operator * + / -")
let num2 = parseInt(prompt("Enter your second number :"));


if (oper == "+") {
    alert((num1+num2));
} else if (oper == "-") {
    alert((num1-num2));
} else if (oper == "*") {
    alert((num1*num2));
} else if (oper == "/") {
    alert((num1/num2));
} else{
    alert("Invalid input")
}







