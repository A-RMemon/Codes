// // let city = prompt("write city name");
// // console.log(`welcome to ${city} of lights`.toUpperCase());

// // let gender = prompt("whats your gender");
// // if(gender==="male"){
// //     console.log(`good morning sir`.toUpperCase())
// // }else if(gender==="female"){
// //     console.log(`good morning maam`.toUpperCase())
// // }else(
// //     console.log("please enter your gender")
// // )

// let signal = prompt("write traffic signal colour").toLowerCase();
// if(signal==="red"){
//     console.log("must stop");
// }else if(signal==="yellow"){
//     console.log("ready to move");
// }else if(signal==="green"){
//     console.log(`move now`)
// }

// // let fuel = prompt("write fuel capacity of your car")
// // if(fuel<= 0.25){
// //     console.log("Please refill the fuel in your car")
// // }

// // let a = 4
// // if (++a === 5) {
// //     alert("given condition for variable a is true");
// // }
// // let b = 82
// // if (b++ === 83) {
// //     alert("given condition for variable b is true");
// // }
// // let c = 12
// // if (c++ === 13) {
// //     alert("condition 1 is true");
// // }
// // if (c === 13) {
// //     alert("condition 2 is true");
// // }
// // if (++c < 14) {
// //     alert("condition 3 is true");
// // }
// // if (c === 14) {
// //     alert("condition 4 is true");
// // }
// // let materialCost = 20000;
// // let laborCost = 2000;
// // let totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost) {
// //     alert("The cost equals");
// // }
// // if (true) {
// //     alert("True");
// // }
// // if (false) {
// //     alert("False");
// // }
// // if ("car" < "cat") {
// //     alert("car is smaller than cat");
// // }

// let sub1 = prompt("write your first subject name")
// let sub2 = prompt("write your second subject name")
// let sub3 = prompt("write your third subject name")

// let obtainedMarks1 = parseInt(prompt("write obtained marks of " +sub1));
// let obtainedMarks2 = parseInt(prompt("write obtained marks of " +sub2));
// let obtainedMarks3 = parseInt(prompt("write obtained marks of " +sub3));
// let totalMarks = 100
// let totalMarksall = totalMarks*3
// let grade =""; 
// let remarks= ""
// let totalObtainedMarks = obtainedMarks1+(obtainedMarks2+obtainedMarks3);
// let percentage = (totalObtainedMarks*100)/totalMarksall;

// if(percentage<=100){
//     if(percentage>=80){
//         grade = "A-one"
//         remarks = "Excellent"
//     }else if(percentage>=70){
//         grade = "A"
//         remarks = "good"
//     }else if(percentage>=60){
//         grade = "b"
//         remarks = "you need to improve"
//     }else if(percentage<=60){
//         grade = "fail";
//         remarks = "good";
//     }
// }

// document.write(`<h1>MARK SHEET</h1>
//     total marks:${totalMarksall} 
//     marks obtained : ${totalObtainedMarks}
//     percentage : ${percentage}
//     grade : ${grade}
//     remarks : ${remarks} `);
    
// q no 7
// let user = parseInt(prompt("guess the number from 1 to 10"))
// let secret = 5
// if(user === secret){
//     alert("bingo")
// }else if(user=== secret-1||user === secret+1){
//      alert("close to correct answer")
//  }else{
//      alert("try again")
//  }

// q no 8

// let num = parseInt(prompt("write a number"));
// if(num%3 === 0){
//     alert("this num is divisible by 3")
// }else{
//     alert("this num is not divisible by 3")
// }

// q no 9 

// let num = parseInt(prompt("write a number"));
// if(num%2===0){
//     alert("this is odd number " +num)
// }else if(num%2 !== 0){
//     alert("this is odd number "+ num)
// }

// q no 10

// let temp = parseInt(prompt("write a temperature"));
// if(temp < 100){
//     if(temp>= 40){
//         alert("It is too hot outside.")
//     }else if(temp>=30){
//         alert(`The Weather today is Normal.`)
//     }else if(temp>=20){
//         alert(`Today’s Weather is cool.`)
//     }else if(temp>=10){
//         alert(`OMG! Today’s weather is so Cool.`)
//     }else{
//         alert(`try again`)
//     }
// }

// Q no 11

// let num1 = parseInt(prompt("write first number"));
// let num2 = parseInt(prompt("write second number"));
// let Calculate = prompt("write a sign that you want to use + , - , * , / , % ")

// if(Calculate== "+"){
//     alert("ans = "+ (num1+num2))
// }else if(Calculate== "-"){
//     alert("ans = "+ (num1-num2))
// }else if(Calculate== "*"){
//     alert("ans = "+ (num1*num2))
// }else if(Calculate== "/"){
//     alert("ans = "+ (num1/num2))
// }else if(Calculate== "%"){
//     alert("ans = "+ (num1%num2))
// }