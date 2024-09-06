let userbtn= document.querySelectorAll(".btnuser");
let resetbtn = document.querySelector(".resetbtn");
let winnerPara = document.querySelector("#winner");
let random = Math.random(Math.floor()*3);
let computer ="";
let ans = winnerPara;
let user = ()=>{
    userbtn[0].innerText="rock";
    userbtn[1].innerText="paper";
    userbtn[2].innerText="scissor";
    
}

user()

let winnerpattern = ()=>{
    if(random===0){
        computer = "rock";
        if(userbtn[0].innerText===computer.innerText){
            ans = "tie"
        }else if(userbtn[1]===computer.innerText){
            ans = "you lost"
        }else if(userbtn[2]===computer.innerText){
            ans = "you win"
        }
    } if(random===1){
        computer = "paper";
        if(userbtn[0].innerText===computer.innerText){
            ans = "you win"
        }else if(userbtn[1]===computer.innerText){
            ans = "tie"
        }else if(userbtn[2]===computer.innerText){
            ans = "you lost"
        }
    } if(random===2){
        computer = "scissor";
        if(userbtn[0].innerText===computer.innerText){
            ans = "you lost"
        }else if(userbtn[1]===computer.innerText){
            ans = "you win"
        }else if(userbtn[2]===computer.innerText){
            ans = "tie"
        }
    }
}
winnerpattern()
