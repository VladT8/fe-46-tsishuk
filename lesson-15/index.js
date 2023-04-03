let x = 20;
let y = 58;
let z = 42;

console.log(x+ y + z);

let myAgeInYears = 28;
let myMonthInYear = 9;
const secInMin = 60;
const minInHour = 60;
const hoursInDay = 24;
const daysInMonth = 30;
const dayInYear = 365;

let myAgeInSeconds = (myAgeInYears * (secInMin * minInHour * hoursInDay * dayInYear) + myMonthInYear * (secInMin * minInHour * hoursInDay * daysInMonth));

console.log(myAgeInSeconds);

let count = 42;
let userName = '42';
console.log(String(count));
console.log(`${count}`);
console.log(+userName);
console.log(Number (userName));
console.log(parseInt (userName));

let a = 1;
let b = 2;
let c = "белых медведей";
console.log(String(a) + String(b) + ' ' + c);

let q = 'доступ';
let w = 'морпех';
let e = 'наледь';
let r = 'попрек';
let t = 'рубило';

let lengthWords = (q + w + e + r + t);
console.log(lengthWords.length);

let userLogin = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

let u = 4;
let i = 3;

i = i + u;
u = i - u;
i = i - u;
console.log(u, i)

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);