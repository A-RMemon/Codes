let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer =document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnO = true ;


let winpatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
        box.innerText = "O";
        turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        };
        box.disabled=true;
        checkwinner();
    })
});
const disable = ()=>{
    for(let box of boxes){
        box.disabled = true
    }
}
const enable = ()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
}
let showwinner = (winner)=>{
    msg.innerText = `congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
disable()
}
const checkwinner = ()=>{
 for(let pattern of winpatterns){
    // console.log(pattern)
    // console.log(pattern[0],pattern[1],pattern[2])
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
let pos1 = boxes[pattern[0]].innerText;
let pos2 = boxes[pattern[1]].innerText;
let pos3 = boxes[pattern[2]].innerText; 
if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1 === pos2 && pos2 === pos3){
    showwinner(pos1);
    

}
}
}           
};

let resetgame  = ()=>{
    turnO=true
    enable();
    msgcontainer.classList.add(".hide")
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)
