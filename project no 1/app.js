let amountinput = document.querySelector("#amount");
let percentageinput = document.querySelector("#percentage");
let btn = document.querySelector("#btn");
let ans= document.querySelector("h2")
let calculate = ()=>{
    let amount = amountinput.value;
    let percentage = percentageinput.value ;
    let formula = amount*(1+ percentage /100);
    //Explaination of percentage formula for take percentage & then add in orignal amount for supose amount = 1000 & percentage = 25 formula amount *(1+percantage / 100);
    //1 step = (percentage / 100) is (25 / 100) = 0.25
    // 2step = ( 1 + 0.25)= 1.25 bracket was solved
    //3 step = 1000 * 1.25 = 1125 
    ans.innerText="total : "+formula.toFixed(2) ;
}
btn.addEventListener("click",calculate)
