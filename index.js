// 1
const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);
// 2
const email = 'dima.hmyanka@gmail.com';
const emailLength = email.length;
const emailSearch = email.includes('@');
console.log(emailLength + ' - довжина, ' + emailSearch + ' - чи є @');
// 3
let my = 'My ';
let string1 = 'name ';
let is = 'is ';
const myFullName = my + string1 + is + 'Viktor';
console.log(myFullName);
// 4
const userName = 'Кирило';
const payment = '100';
const full = alert(`Дякуємо, ${userName}! До сплати ${payment} гривень.`);
