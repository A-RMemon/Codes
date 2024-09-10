// Q no 1 
// let firstname = prompt("write first name");
// let lastname = prompt("write last name");
// let fullname = firstname+" "+lastname;
// alert(fullname);

// Q no 2
// let user = prompt("write your favourite mobile model");
// alert("my favourite phone is : "+user+" length of string : "+user.length);

// Q no 3

// let country = "pakistani";
// let ans = country.lastIndexOf("n")
// alert("index of n :"+ans);

// Qno 4

// let greet = "hello world";
// let ans= greet.lastIndexOf("l")
// alert(ans);

// Q no 5

// let country = "pakistani";
// let ans = country[3];
// alert("character at 3 index is : "+ans);

// Q no 6 
// let firstname = prompt("write first name");
// let lastname = prompt("write last name");
// let fullname = firstname.concat(lastname);
// alert(fullname);

// Qno 7
// let ans = "pakistan";
// let ans2 = ans.replace("pakistan","islamabad");
// console.log(`city ${ans} & after treplacement ${ans2}`)

// Q no 8

// let str = "Ali and Sami are best friends. They play cricket and football together.";
// let ans = str.replaceAll("and","&");
// console.log(`${str}
//      ans is 
//     ${ans}`);

// Q no 9

// let str = "472";
// let ans = parseInt(str)
// console.log(`value : ${str} & type of : ${typeof str}
// value : ${ans} & type of ${typeof ans}`);

// Q no 10

// let userinput = prompt("write any food");
// let ans = userinput.toUpperCase();
// console.log(`user input : ${userinput} & converted value :${ans}`);

// Q no 11


// let userinput = prompt("write any word");
// let user = "pakistan"
// let ans = user.charAt(0).toUpperCase()+user.slice(1);//this method is that 0 index is P than we we calling user after 1 index because 0 index is small p
// console.log(ans);

// Qno 12

// let num = 35.36;
// let ans = num.toString();
// let ans2 = ans.replace(".","")
// console.log(`number : ${num} 
// result : ${ans2}`);

// Q no 13

// ex no 1
// let user = prompt("write a user name");
// let special = "@,.!";
// let found = false
// for(let val of special){
//     if(user.includes(val)){
//         found =true
//         break        
//     }
// }
// if(found){
//     alert("invalid username please dont use special corrector @!,.");
// }else{
//     alert("Good job ")
// }

// ex no 2

// let user = prompt("write a user name");
// let special = "@,.!";
// let found = false
// for(var i =0;i<user.length;i++){
//     if(user[i]== special[i]){
//         found=true;
//         break;
//     }
// }if(found){
//     alert("please enter a valid user name");

// }else{
//     alert("wel done")
// }
// Q no 14

// let user = prompt("which food you want").toLowerCase();
// let a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let found = false
// let index = "";
// for (let i =0;i<a.length;i++){
//     if(a[i]== user){
//         found=true;
//         index=i;
//         break
//     }
// }    if(found){
//     console.log(`${user} is available in our bakery at index of ${index} `)
// }else{
//     console.log(" not available")
// };


// Q no 15


// Q no 16

// let str ="University of Karachi";
// let ans = str.split("");
// document.write(ans)

// Q no 17


// // Q no 18

// let str ="The quick brown fox jumps over the lazy dog";
// let ans = str.localeCompare("the");
// console.log(ans)

