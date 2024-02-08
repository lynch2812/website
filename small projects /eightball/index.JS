// value is Username variable
const userName = "Gary";

userName ? console.log("Hello, Gary!") : console.log("Hello,");

// value is userQuestion
let userQuestion = "Will chelsea win the cup?";
console.log(`${userName} ${userQuestion}`);
//random number generator, generating a number inbetween 1 and 7 and rounding it to a full number.
let randomNumber = Math.floor(Math.random() * 7);
let eightBall ="";
// control flow
if (randomNumber === 0) {
  console.log("It is certain");
} else if (randomNumber === 1) {
  console.log("It is decidedly so");
} else if (randomNumber === 2) {
  console.log("reply hazy try again");
} else if (randomNumber === 3) {
  console.log("Cannot predict now");
} else if (randomNumber === 4) {
  console.log("Do not count on it");
} else if (randomNumber === 5) {
  console.log("My sources say no");
} else if (randomNumber === 6) {
  console.log("Outlook not so good");
} else if (randomNumber === 7) {
  console.log("Signs point to yes");
}
  console.log(randomNumber);
