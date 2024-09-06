const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector(".result");



button.onclick = () =>{
    let word = checkEmpty(input.value);
    palindrome();
}

function checkEmpty(input) {
    if(input === ""){
        alert("Please input a value");
    }else {
        return input;
    }
}

function lowerCase(str){
    let lower = str.toLowerCase();
    return lower;
}

function reverseWord(){
    let text = replaceChar(input.value);
    let arr = text.split("");
    let reverseArr = arr.reverse("");
    let string = reverseArr.join("");
    return string;
}

function palindrome(){
    let originalWord = input.value;
    let word = replaceChar(input.value);
    let text = reverseWord();
    if(word === text){
        result.innerText = `${originalWord} is a palindrome.`
        result.style.display = "block";
    }else{
        result.innerText = `${originalWord} is not a palindrome.`;
        result.style.display = "block";
    }
    console.log(word, text);
}

function replaceChar(){
    let text = lowerCase(input.value);
    let regex = /[-()\/:_,.\s]/g;
    let newText = text.replace(regex, "");
    return newText;
}