const number = document.getElementById("inputBox");
const result = document.getElementById("Result");
const CheckBtn = document.getElementById("CheckBtn");
const Reset = document.getElementById("Reset");
let randNum = Math.floor( Math.random() * 101 ) + 1;

    
CheckBtn.addEventListener('click', CheckNum);
Reset.addEventListener('click',ResetGame);


function CheckNum(){
    let value = Number(number.value);
            if(value === randNum){
               result.innerText = "You Win";
            }
            else if (value > randNum){
                result.innerText = "Too Big";
            }
            else if (value < randNum){
                result.innerText = "Too Small";
           }          
    }
  
function ResetGame(){
    result.innerText = ' ';
}

