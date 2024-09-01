let username = prompt("write your name")
if (username) {
    console.log("Hello sir")
} else {
    console.log("hello")
}
let userquestion = prompt("please ask a question");
console.log("User Question : " + userquestion);
let itrandomnumber = Math.floor(Math.random() * 8);
let eightBall = " "

switch (itrandomnumber) {
    case 0:
        eightBall="better not tell you now";
        break;
    case 1:
        eightBall="concrete & ask again";
        break;
    case 2:
        eightBall=" reply hazy try again";
        break;
    case 3:
        eightBall="cannot predict now";
        break
    case 4:
        eightBall="my reply is no"
        break;
    case 5:
        eightBall="my sources say no";
        break;
    case 6:
        eightBall="Out look not so good"
        break;
    case 7:
        eightBall="signs point to eyes";
        break;
}
console.log(eightBall)
