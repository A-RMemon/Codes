// let student= []
// // empty = "abdulrehman"

// let student1 = {}

// let city =["hyderabad","karachi"]

// let num = [0,1,2,3,4,5,6]

// let simple = [true,false]

// let mix = ["hyderaabd",0,"karachi",3,4,"mirporkhas",7,true]

// let qualifications = ["SSC","<br>HSC","<br>BCS","<br>BS","<br>bCOM","<br>MS","<br>M.PHIL","<br>PHD"]
// document.write("QUALIFICATION : "+" <br> "+ qualifications )

// let student = ["jon","elia","ali"];
// let score = [320,230,480]
// let totalMarks = 500;
// document.write("<h1>score of "+ student[0] +" is "+score[0] + ". Percentage :"+ (score[0]/totalMarks)*100+"% <br>") 
// document.write("score of "+ student[1] +" is "+score[1] + ". Percentage :"+ (score[1]/totalMarks)*100+"% <br>") 
// document.write("score of "+ student[2] +" is "+score[2] + ". Percentage :"+ (score[2]/totalMarks)*100+"% </h1>") 

// let color = ["yellow","blue","green","orange"];
// let user1 = prompt("what colour you want to add in first");
// color.unshift(user1) ;
// let user2 = prompt("what colour you want to add in last");
// color.push(user2);
// color.splice(0,0,"wheat","beig");
// color.shift();
// color.pop()
// let user3 = prompt("what colour you want to add in random index")
// let user4 = parseInt(prompt("in which index you want to add colour length range 0 to 4"));
// let user5 = prompt("which colour you want to add")
// if(user4 >=0 && user4 <= 4 ){
//     color.splice(user4,0,user5)
// }else{
//     alert("please enter 0 to 4 index length")
// }
// let user6 = parseInt(prompt("in which index you want to delete colour 0 - 4"));
// let user7 = parseInt(prompt("how many colours you want to delete after index 0 - 4"));
// if(user6 >= 0 && user6 <= 4){
//     color.splice(user6,user7)
// }
// document.write(color);

//Question 10
// let score = [100,320,50,150,4];
// score.sort(function(a, b){return a-b});

//q 11
// let cities = ["hyd","khi","larkana","thatta","multan","sukhar"];
// let selectedCity = cities[0]+" "+cities[2]+" "+cities[5];
// console.log(cities);
// console.log(selectedCity);

// let arr = ["this","is","my","cat"];
// document.write("<h1>"+arr +" <br>")
// let arr1 = .toString()
// document.write(arr1)

// let arr = ["out : <br>"];
// let arr2 = ["mouse<br>","computer<br>","keyboard<br>","lcd"];
// let arr3 =[];
// for(let i = 0;i<arr.length;i++){
//     for(j = 0;j <arr2.length;j++){
//         arr3.push(arr[i]+arr2[j]);
//     }
// }
// document.write(arr3)

// let arr = ["out : <br>"];
// let arr2 = ["mouse<br>","computer<br>","keyboard<br>","lcd <br>"].reverse();
// let arr3 =[];
// for(let i = 0;i<arr.length;i++){
//     for(j = 0;j <arr2.length;j++){
//         arr3.push(arr[i]+arr2[j]);
//     }
// }
// document.write(arr3)

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = []
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }
// console.log(fullNames)

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Start writing the dropdown menu
// document.write('<label for="phoneManufacturers">Choose a phone manufacturer:</label><br>');
// document.write('<select id="phoneManufacturers" name="phoneManufacturers">');

// // Loop through the array and create an option for each manufacturer
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }

// // Close the select tag
// document.write('</select>');

// const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Create the dropdown menu
// const dropdown = document.createElement('select');
// dropdown.id = 'phoneManufacturers';
// dropdown.name = 'phoneManufacturers';

// // Create the label for the dropdown menu
// const label = document.createElement('label');
// label.textContent = 'Choose a phone manufacturer:';
// label.htmlFor = 'phoneManufacturers';

// // Loop through the array and create an option for each manufacturer
// manufacturers.forEach(manufacturer => {
//   const option = document.createElement('option');
//   option.value = manufacturer;
//   option.textContent = manufacturer;
//   dropdown.appendChild(option);
// });

// // Append the label and dropdown to the body
// document.body.appendChild(label);
// document.body.appendChild(dropdown);