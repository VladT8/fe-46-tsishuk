// task 1
let pravda = 'true';
let nepravda = false;
let age = 17;
let qwer = undefined;
let nothing = null;
console.log(typeof pravda, typeof nepravda, typeof age, typeof qwer, typeof nothing)

// task 2
let height = 15;
let width = 20;

// if (width > height) {
//    console.log(width)
// } else {
//    console.log(height)
// }
console.log(width > height ? width : height);

// task 3
for (let i = 1; i <= 20; i++) {
   if (i % 3 === 0)
      console.log(i)
};

// task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = 'gogo';

if (key && documents && pen && (apple || orange)) {
   console.log(shouldGoToWork)
} else {
   console.log('not go')
}

// task 5
let userNumber = prompt ('your number?')
if (userNumber % 5 === 0 && userNumber % 3 === 0) {
   alert ('FizBuz');
} else if (userNumber % 3 === 0) {
   alert ('Buz');
} else if (userNumber % 5 === 0) {
   alert ('Fiz');
};

// task 6

let userAge = prompt ('your age?')
if (userAge > 18) {
   alert ('Попей пивка');
} else if (userAge < 16) {
   alert ('Пей колу');
} else if (userAge >= 16 && userAge <= 18) {
   alert ('Можешь выкурить сигаретку, только маме не говори');
};

// task 7

let userDirection = prompt ('напишите направление: юг, север, запад или восток')
switch (userDirection) {
   case 'юг':
      alert ('на юг пойдешь счастье найдешь');
      break;
   case 'север':
      alert ('на север пойдешь много денег найдешь');
      break;
   case 'запад':
      alert ('на запад пойдешь верного друга найдешь');
      break;
   case 'восток':
      alert ('на восток пойдешь разработчиком станешь');
      break;
   default: 
      alert ('попробуйте еще раз');
      break;
};