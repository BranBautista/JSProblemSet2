let expReg1 = /.abc/;
let expReg2 = /a+b?!!1{4}/;
let expReg3 = /.{3}a\.b/;
let expReg4 = /\w/;
let expReg5 = /\s/;
let expReg6 = /\d/;
let expReg7 = /./;
let expReg8 = /[abc]/;
let expReg9 = /(abc)/;
let expReg10 = /[a-zA-z_\$\.]+[a-zA-z_\$0-9\.]*@[a-zA-z_\$\.]+[a-zA-z_\$0-9\.]*\.(com|net|org){1}/;
let expReg11 = /\([0oOn]{1}(_|\s)[0oOn]{1}\)/;

const string1 = 'we .abcde fghij .abc efge';
const string2 = 'caaaaab!!1111';
const string3 = '....a.b';
const string4 = 'Amazon'; // \w matches lower or upper letters
const string5 = 'Hello there';
const string6 = 'We are 19 guys on the trainning';
const string7 = 'Hello there again'; //Here will match the with H, the character before e
const string8 = 'We are programmers';
const string9 = 'The vocabulary starts with these three letters abc'; //And remember (match) the abc from the first string
const string10 = 'And the email of the ponent is luisito_1988@gmail.com';
const string11 = '(0_n)';

console.log(expReg1.exec(string1));
console.log(string1.match(expReg1));

console.log(expReg2.test(string2));
console.log(string2.match(expReg2));

console.log(expReg3.test(string3));
console.log(string3.match(expReg3));

console.log(expReg4.test(string4));
console.log(string4.match(expReg4));

console.log(expReg5.test(string5));
console.log(string5.match(expReg5));

console.log(expReg6.test(string6));
console.log(string6.match(expReg6));

console.log(expReg7.test(string7));
console.log(string7.match(expReg7));

console.log(expReg8.test(string8));
console.log(string8.match(expReg8));

console.log(expReg9.test(string9));
console.log(string9.match(expReg9));

console.log(expReg10.test(string10));
console.log(string10.match(expReg10));

console.log(expReg11.test(string11));
console.log(string11.match(expReg11));