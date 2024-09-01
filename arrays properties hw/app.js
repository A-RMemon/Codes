// ------first example-----

let animals =["cows","goats","buffelo","chickens","fish"]
let birds = ["parrots" ,"owl" ,"green parrot"]
let fishes = ["jellyfish","octupus","shark"]
//CONCANTINATION METHOD 
 let combine = animals.concat(birds,fishes)//we also concan one or more arrays in one variable storage
// 1 combine.pop()//shark will be poped
// 2 combine.push("bluewale")//bluewale added in the end
// 3 combine.shift()//to clear the first value in array
// 4 combine.unshift("hen")//to add value in first
// 5 combine.splice(5,0,"chirya")//add value in index 5 no value will be deleted because we assigned 0 
// 6 console.log(combine.slice(2,6))

//------second Example ------

let numbers = [1,2,3,4,5]
let num2 = [6,7,8,9]
let nums = numbers.concat(num2)
nums.pop()
nums.push(10)
nums[9]=10
nums.unshift(1)
nums.shift()
nums.splice(1,2,2,3)
//console.log(nums)
//console.log(nums.slice(0,5))

//------third Example ----

let teamA = ["pakistan","india","usa","canada","japan"]
let teamB =["newzealand","Australlia","southafrica"]
//teamA.reverse()//reverse method
//teamB.sort()//sort method which set the array value in a b c d e this type
let teams = teamA.concat(teamB) 
// let teams = teamA +teamB //this is also a concantination method
teams.pop()
teams.push("srilanka")
teams.shift()
teams.unshift("pakistan")
let favteam = teams[0]
teams.splice(1,0,"uae")
//console.log(teams.slice(2))
//console.log(teams)

//------example 4 --------
let brand1 =["stylo","Gul Ahmed","Al Karam"]
let brand2 = ["indure","merito","J."] 
let brands = brand1.concat(brand2)
brands.pop()
brands.push("levi's")
brands.shift()
brands.unshift("kamaliya khadar")
brands.splice(5,2,"mini minors")
//console.log(brands)
//console.log(brands.slice(1,4))

//-------example 5 --------

let resturant1 = ["la moosh","Mirchi 360","kabab jees","desi hut"]
let resturant2 = ["kabab inn","pizza Max","KFC"]
let resturant = resturant1.concat(resturant2)
resturant.pop()
resturant.shift()
resturant.push("kabab jess fried chicken","al rahim")
resturant.unshift("point 300")
resturant[2]="brohi"
resturant.splice(4,0,"double mirchi","roof top","california pizza","pk")
console.log(resturant)
console.log(resturant.slice(2,7))
let favresturant = resturant[1]
console.log(favresturant)
