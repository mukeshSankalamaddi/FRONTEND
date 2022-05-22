const display=document.getElementById("display")

function clearExp(){
    display.innerText="0"
}

function back(){
    display.innerText=display.innerText.slice(0,-1)
}

function evalExp(){
    try{
        const lastChar =display.innerText[display.innerText.length-1]
        if(isOperator(lastChar)){
            alert("Cannot evaluate an expresstion ending with an operator")
        }
        else{
            result.innerText=eval(display.innerText)
        }
    }catch(err){
        display.innerText="Error"
    }
}

function isOperator(op){
    if(op ==="*" || op ==="-" || op ==="+" || op ==="/" || op==="."){
        return true;
    }
    return false;
}
function isMulOrDiv(op){
    if(op ==="*" || op ==="/" || op===")"){
        return true;
    }
    return false;
}
function appendChar(char){
    const prevChar =display.innerText[display.innerText.length-1]
    const prePrevChar =display.innerText[display.innerText.length-2]
    if(display.innerText===""){
        if(char!="0" && !isMulOrDiv(char)){
            display.innerText=display.innerText+char
        }
    }else if(prevChar==="0" && (prePrevChar==="(" || prePrevChar=="*" || prePrevChar=="-" || prePrevChar=="+" || prePrevChar=="/" || prePrevChar==")") && char!="." && char!=")"){
        display.innerText=display.innerText.slice(0,-1) 
        display.innerText=display.innerText+char
    }else if(display.innerText=="0" && char!="."){
        display.innerText=display.innerText.slice(0,-1) 
        display.innerText=display.innerText+char
    }
    else if(char==="." && (prevChar===")" || prevChar==="(")){
        display.innerText=display.innerText
    }
    else if(prevChar===")" && !isOperator(char) && char!=")" ){
        display.innerText=display.innerText+"*"+char
    }
    else if(char==="(" && !isOperator(prevChar) && prevChar!="("){
        display.innerText=display.innerText+"*"+char
    }
    else if(char===")" && isOperator(prevChar)){
        display.innerText=display.innerText
    }
    else if(char===")" && prevChar==="("){
        if(prePrevChar==("*" ||"/")){
            display.innerText=display.innerText+"1"+char
        }
        else{
            display.innerText=display.innerText+"0"+char
        }
    }
    else{
        if(isOperator(char) && isOperator(prevChar)){
            display.innerText=display.innerText.slice(0,-1)
        }
        display.innerText=display.innerText+char
    }
}