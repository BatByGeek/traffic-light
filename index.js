// task 1

// const numberOfOperation = prompt("Введите номер операции: 1.Сложение 2.Вычитание 3.Умножение");

// switch (numberOfOperation) {
//     case '1':
//         console.log('Сложение');
//         break;
//     case '2':
//         console.log("Вычитание");
//         break;
//     case '3':
//         console.log('Умножение');
//         break;
//     default:
//         console.log('Операция не определена');
//         break;
// }

// task 2

// const userName = prompt("Введите свое имя: ");

// if (userName === 'Админ') {
//     const password = prompt("Введите пароль: ");
//     if (password === 'admin123') {
//         console.log("Добро пожаловать Админ!");
//     } else {
//         console.log("До свидания!")
//     }
// } else if (userName === 'Пользователь') {
//     console.log('Добро пожаловать, пользователь');
// }

// task 3

// const arr = [];

// if (!arr.length) {
//     console.log('Массив arr пустой');
// } else {
//     console.log("Массив arr не пустой");
// }

// task 4

// function withoutTripple(arr) {
//     const map = new Map;
//     for (let n of arr) {
//         map.set(n, (map.get(n) || 0) + 1);
//     }
//     return [...arr].filter(n => map.get(n) < 3);
// }

// console.log(withoutTripple([1, 2, 1, 3, 1, 3, 1, 4]));

// task 5

const startBtn = document.querySelector('#startBtn');
const redCircle = document.querySelector('.red');
const yellowCircle = document.querySelector('.yellow');
const greenCircle = document.querySelector('.green')

startBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const ignitionRedCircle = () => {
        redCircle.style.backgroundColor = 'red'
        yellowCircle.style.backgroundColor = 'grey';
        greenCircle.style.backgroundColor = 'grey'
    }

    setInterval(ignitionRedCircle, 1500)

    const ingitionYellowCircle = () => {
        yellowCircle.style.backgroundColor = 'yellow';
        redCircle.style.backgroundColor = 'grey'
        greenCircle.style.backgroundColor = 'grey'
    }

    setInterval(ingitionYellowCircle, 3000)

    const ingitionGreenCircle = () => {
        greenCircle.style.backgroundColor = 'green';
        redCircle.style.backgroundColor = 'grey';
        yellowCircle.style.backgroundColor = 'grey'
    }

    setInterval(ingitionGreenCircle, 4500)
})

// task 6

// 1-Вариант (Обычная функция)

// function calcNumbers (num1, num2) {
//     if (num1 > num2) {
//         console.log(1);
//     } else if (num2 > num1) {
//         console.log(-1);
//     } else {
//         console.log(0);
//     }
// }

// calcNumbers(2, 1) // 1 число больще 2
// calcNumbers(1, 2) // 1 число меньше 2
// calcNumbers(1, 1) // числа равны

// 2 вариант (Стрелочная функция c тернарным оператором)

// const calcNumbers = (num1, num2) => num1 > num2 ? 1: num1 < num2 ? -1 : 0

// console.log(calcNumbers(2, 1)) // 1 число больше 2
// console.log(calcNumbers(1, 2)) // 1 число меньше 2
// console.log(calcNumbers(2, 2)) // числа равны