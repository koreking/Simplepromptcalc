// This Calculator works as a prompt in the web browser

alert ("Hello, Welcome to my simple calculator");

const Popupmessage = prompt ("Enter the operation you want to perform (+, -, *, /, %)");

const firstNum = parseFloat (prompt ("Enter the first number:"));

const secondNum = parseFloat (prompt ("Enter the second number:"));


    if(Popupmessage == "+"){
        result = firstNum + secondNum;
    }

    else if(Popupmessage == "-"){
        result = firstNum - secondNum;
    }

    else if(Popupmessage == "*"){
        result = firstNum * secondNum;
    }


    else if(Popupmessage == "/"){
        result = firstNum / secondNum;
    }


    else if(Popupmessage == "%"){
        result = firstNum % secondNum;
    }

    prompt (result)

    alert ("Thank you for using my simple calculator");

