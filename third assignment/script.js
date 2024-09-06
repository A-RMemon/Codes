// // let a = 5
// // let b = 3
// // let ab = a+b
// // document.write("the sum of ",a," & ",b," = ",ab)

// // let a = 5
// // let b = 3
// // let ab = a-b
// // document.write("the calculation of ",a," & ",b," = ",ab)

// // let a = 5
// // let b = 3
// // let ab = a*b
// // document.write("the calculation of ",a," & ",b," = ",ab)

// // let a = 5
// // let b = 3
// // let ab = a/b
// // document.write("the calculation of ",a," & ",b," = ",ab)


// // let a = 5
// // let b = 3
// // let ab = a%b
// // document.write("the calculation of ",a," & ",b," = ",ab)

// // let a 
// // document.write("Value after variable declaration is ",typeof a )
// // let b = 5
// // document.write("initial value",b)
// // document.write("Value after increment is ",++b)
// // let c = 7
// // let d = c+b
// // document.write("after addition value is ",d)
// // document.write("Value after decrement is ",--d)
// // let e = d%3
// // document.write("The remainder is ",e)

// // let ticket = 600
// // let cost = ticket*5
// // document.write("total cost to buy 5 tickets to a movie is ",cost," PKR ")

// // let table = 4;
// // for(let i = 1;i <= 10;i++){
// //     document.write(table +" x "+ i + " = "+ i*table ," <br> ")
// // }

// // let Celsius = 25
// // fahrenheit =(Celsius*9/5)+32;
// // console.log("25 C ="+fahrenheit+"F");

// // let fahrenheit = 70
// // celsius = (fahrenheit-32)*5/9
// // console.log(fahrenheit+" F "+" = "+celsius+"C")

// // let item1 = 650
// // let quantity1 = 3
// // let item2 = 100
// // let quantity2 = 7
// // let shipping = 100
// // console.log("total cost of shopping is "+(item1*quantity1 + item2*quantity2))

// // let totalmarks = 980;
// // let marksobtained = 804;
// // console.log("percentage "+marksobtained*100/totalmarks)

// // let dollar = 104.80
// // let Sriyal = 28
// // dollar *= 10
// // Sriyal *= 25
// // console.log("total currency in PKR ="+(dollar+Sriyal))

// // let num = 4+5*10/2
// // console.log(num)

// // let current = 2024
// // let birthyear = 2003
// // console.log(`your age = ${current-birthyear}`)

// // let radius = 20
// // let Circumference= 
// // console.log(Circumference   )

// // let snack = "lays"
// // let age =21
// // let maxAge = 49
// // let amount = 3
// // maxAge-=age
// // document.write(`<h1>you will need ${3*maxAge} ${snack} to last you until the ripe old age of 49</h1>`)

// // let a =10
// // a = ++a
// // document.write(a)

// // let a =10
// // a =++a
// // let a1 = a
// // a1 =a++
// // a1 =a++
// // document.write(a1)

// // let a =12
// // a = --a
// // document.write(a)

// // let a =12
// // let a1 =a
// // a1 = a--
// // a1= a--
// // a1= a--
// // document.write(a1)

// //let a =2;
// // document.write("a = "+a);
// //let b = 1;
// // document.write("b = "+b);
// // let result = --a - --b + ++b + b--;
// // document.write("result is = "+result)
// // let step1 = a=--a;
// // let step2 = step1 - --b; 
// // let step3 = step2 + ++b;
// // let step4 = step3 +b--;

// // let name = prompt("whats your name");
// // document.write(`welcome ${name}`.toUpperCase())

// // let num = +prompt("write a number");
// // for(let i = 1;i <=10;i++){
// //    if(num === 0){
// //     let num1 = 5;
// //     console.log(num1+" x "+i+" = "+ i*num1)
// //    }else if(num!==0){
// //     console.log(num+" x "+i+" = "+ i*num)
// //    }
// // }

// // a) Take three subject names from the user and store them in variables


// // b) Total marks for each subject is 100, store it in a variable
// // let totalMarksPerSubject = 100;

// // // c) Take obtained marks for each subject from the user and store them in variables
// // let obtainedMarks1 = prompt(`Enter the obtained marks for ${subject1}:`);
// // let obtainedMarks2 = prompt(`Enter the obtained marks for ${subject2}:`);
// // let obtainedMarks3 = prompt(`Enter the obtained marks for ${subject3}:`);

// // // Calculate the total obtained marks and total possible marks
// // let totalObtainedMarks = (obtainedMarks1 + obtainedMarks2 + obtainedMarks3);
// // let totalPossibleMarks = 3 * totalMarksPerSubject;

// // // Calculate the percentage
// // let percentage = (totalObtainedMarks / totalPossibleMarks) * 100;

// // // Show the result
// // alert(`totalObtainedmarks ${(obtainedMarks1 + obtainedMarks2 + obtainedMarks3)}/${totalPossibleMarks}`);
// // alert(`Percentage ${percentage}%`);
// // let obtainedMarks1 = prompt(`Enter the obtained marks for ${subject1}:`);

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");
// let totalsubmarks = 100;
// let obtainedMarks1 = parseInt(prompt(`Enter the obtained marks for ${subject1}:`));
// let obtainedMarks2 = parseInt(prompt(`Enter the obtained marks for ${subject2}:`));
// let obtainedMarks3 = parseInt(prompt(`Enter the obtained marks for ${subject3}:`));   
// let totalmarks =(obtainedMarks1+(obtainedMarks2+obtainedMarks3));
// let firstper = obtainedMarks1 * totalsubmarks / 100;
// let secondper = obtainedMarks2 * totalsubmarks / 100;
// let thirdper = obtainedMarks3 * totalsubmarks / 100;
// let totalresmarks = totalsubmarks*3
// let finalpercentage = (totalmarks*100)/totalresmarks ;

// // let percentage = (totalmarks / totalsubmarks) * 100;
// document.write(`first sub:${subject1}  & obtanied marks: ${obtainedMarks1} & percentage ${firstper} <br>`);
// document.write(`second sub ${subject2} & obtained marks: ${obtainedMarks2} & percentage ${secondper}<br>`);
// document.write(`third sub ${subject3} & obtained marks: ${obtainedMarks3} & percentage ${thirdper}<br>`);
// document.write(`total marks : ${totalresmarks} & obtained marks ${totalmarks} & total percentage is ${finalpercentage}`)


// // document.write(subject2)
// // document.write(subject3)
// // document.write("obtained marks1"+obtainedMarks1)
// // document.write("obtained marks2"+obtainedMarks2)
// // document.write("obtained marks3"+obtainedMarks3)
// // // document.write("total sub marks"+(obtainedMarks1+obtainedMarks2+obtainedMarks3))
// // document.write("percentage"+percentage)
