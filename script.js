// click counter
let btnID = "";
let screen = document.getElementsByClassName('screen')[0]
displayValue = "";
function display(){
    screen.innerText = `${displayValue}`
}

// operation functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return  num1 * num2;
}

function divide(num1, num2){
    return  num1 / num2;
}

// function to do calculations
function operate(num1, num2, operator){
    let result = 0;
    if (operator === '+'){
        result = add(num1, num2);
    }
    else if (operator === '-'){
        result = subtract(num1, num2);
    }
    else if (operator === '*'){
        result = multiply(num1, num2)
    }
    else{
        result = divide(num1, num2);
    }
    return result;
}

function validity(expression){
    let split = [];
    for (let i=0;i<expression.length;i++){
        if (((expression[i] === '+') || (expression[i] === '-') || (expression[i] === '*') || (expression[i] === '/') || (expression[i] === '.')) &&
        ((expression[i+1] === '+') || (expression[i+1] === '-') || (expression[i+1] === '*') || (expression[i+1] === '/') || (expression[i+1] === '.'))){
            split = [expression.slice(0,i), expression.slice(i+1)];
            let new_expression = split[0] + split[1];
            expression = new_expression;
        }
    }
    return expression;
}

// seperate terms in a string
function getTerms(expression){
    validity(expression);
    sequence = [];
    temp = "";
    let index = 0;
    if (expression[0]==='-'){
        temp += expression[0];
        index=1;
    }
    else if(expression[0] === '+'){
        index=1;
    }
    else if ((expression[0]) === '*' || (expression[0])==='/'){
        return "Invalid Expression";

    } 
    for (let i=index; i<expression.length; i++){

        if ((expression[i]!== '+') &&(expression[i] !== '-') && (expression[i] !== '*')&&(expression[i] !== '/')){
            temp+=expression[i];
       
        }
        else{
            sequence.push(temp);
            sequence.push(expression[i]);
            temp="";        
        }
    }
    sequence.push(temp);
    let num1 = +sequence[0];
    let calculation = 0;
    for (let i=1; i<sequence.length;i=i+2){
        let num2 = sequence[i+1];
        calculation = operate(num1, +num2, sequence[i])
        num1 = calculation;

    }
    displayValue = calculation.toString();
    return displayValue;
}

//BUTTONS
let  zero_btn = document.getElementById('zero').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
    
});


let one_btn = document.getElementById('one').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
});


let  two_btn = document.getElementById('two').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
});

let  three_btn = document.getElementById('three').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
});

let  four_btn = document.getElementById('four').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
});

let  five_btn = document.getElementById('five').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
});

let  six_btn = document.getElementById('six').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
});

let  seven_btn = document.getElementById('seven').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
});

let  eight_btn = document.getElementById('eight').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
});

let  nine_btn = document.getElementById('nine').addEventListener('click',(e)=>{
    num = Number(e.target.value);
    displayValue += num;
    display();
});

let  plus_btn = document.getElementById('plus').addEventListener('click',(e)=>{
    displayValue += "+";
    displayValue = validity(displayValue);
    display();
});

let  minus_btn = document.getElementById('minus').addEventListener('click',(e)=>{
    displayValue += "-";
    displayValue = validity(displayValue);
    display();
});

let  multiply_btn = document.getElementById('multiply').addEventListener('click',(e)=>{
    displayValue += "*";
    displayValue = validity(displayValue);
    display();
});

let  divide_btn = document.getElementById('divide').addEventListener('click',(e)=>{
    displayValue += "/";
    displayValue = validity(displayValue);
    display();
});

let  dot_btn = document.getElementById('dot').addEventListener('click',(e)=>{
    displayValue += ".";
    displayValue = validity(displayValue);
    display();
});

let clear_btn = document.getElementById('clear').addEventListener('click',(e)=>{
    displayValue = "";
    display();
});

let equals_btn = document.getElementById('equals').addEventListener('click',(e)=>{
    screen.innerText =  getTerms(displayValue);
});



// call display function
display();






