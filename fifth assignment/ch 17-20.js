// let empty =[];

// let arr1 =[];
// arr1.push(0,1,2,3)
// let arr2= [];
// arr2.push(1,0,1,2)
// let arr3 = [];
// arr3.push(2,1,0,1)

// let num = [1];
// for(let i = 1;i <=10;i++){
//     console.log(num*i)
// }

// let num = parseInt(prompt("enter a number to show its multiplication table"));
// let len = parseInt(prompt("enter length multiplication table"));
// for(let i = 1;i<=len;i++){
//     console.log(num+" "+" x "+i+" "+" x "+num*i)
// }

// let fruits = ['apple',' banana', 'mango', 'orange','strawberry'];
// for (let i = 0 ; i<fruits.length ; i++){
//     console.log("element at index "+i+" is "+fruits[i])
// }

// Q no 6
// let count =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// console.log(count.reverse());
// for(let val of count){
//     if(val %2 === 0){
//         console.log(val);//even condition
//     }
// }
// for(let val of count){
//     if(val %2 !== 0){
//         console.log(val);//  odd condition
//     }
// }
// for(let val of count){
//     if(val %2 === 0){
//         console.log(val +"k");//even condition
//     }
// }

// Q no 7

// let A = ['cake','apple pie','cookie','chips','patties'];

// // let user = prompt("write a food you want to buy from ABC bakery");
// // for(let i = 0 ; i<A.length;i++){
// //     if(user === A[i]){
// //         console.log(A[])
// //     }
// // }
// for(let val of A){
//     console.log()
// }

// // Define the array
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user to enter the search term
// let searchTerm = prompt("Enter the item you want to search for:").toLowerCase();

// // Initialize a flag and a variable to store the index
// let found = false;
// let index = -1;

// // Iterate through the array to find the item
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchTerm) {
//         found = true;
//         index = i;
//         break; // Exit the loop as soon as the item is found
//     }
// }

// // Output the result based on the flag and index
// if (found) {
//     alert(`The item is found in the list at index ${index}.`);
// } else {
//     alert("The item is not found in the list.");
// }


// let a = [24, 53, 78, 91, 12];
// let ans = a.filter((val)=>{
//     let ans2 =Math.max(val)
//     return ans2
// })
// console.log(ans)

// var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var user = prompt("Welcome to myBakery. What do you want to order sir/ma'am?").toLowerCase();

// for (var i = 0; i < bakery.length; i++) {
//     if (user === bakery[i]) {
//         console.log(user + " is available at index " + i + " in our bakery");
//         break;
//     }
// }

// if (i === bakery.length) {
//     console.log(user + " is not available in our bakery");
// }

// question no 8 
// var num = [24, 53, 78, 91, 12];
// var max = Math.max(...num); 
// console.log("Array items: 24, 53, 78, 91, 12");
// console.log("The largest number is:" +max)

// Q no 9
// var num = [24, 53, 78, 91, 12];
// var min = Math.min(...num); 
// console.log("Array items: 24, 53, 78, 91, 12");
// console.log("The largest number is:" +min)

// Qno 10

// for(let i = 1;i<=100;i++){
//     if(i%5===0){
//         console.log(`${i} `)
//     }
// }
