const stringA1 = 'September 29, 2017';
const stringA2 = 'February 99, 0001';
const stringA3 = 'June 04, 3000';

let expRegA = /\w+\s\d{2}\,\s\d{4}/;

console.log(expRegA.test(stringA1));
console.log(expRegA.test(stringA2));
console.log(expRegA.test(stringA3));

console.log(stringA3.match(expRegA));

const stringB1 = 'A52';
const stringB2 = 'd747';
const stringB3 = '27X';
const stringB4 = 'v2';

let expRegB = /[a-zA-z]/;

console.log(expRegB.test(stringB1));
console.log(expRegB.test(stringB2));
console.log(expRegB.test(stringB3));
console.log(expRegB.test(stringB4));

console.log(stringB3.match(expRegB));

const stringC1 = 'test.java';
const stringC2 = 'program.cpp';
const stringC3 = 'newReport.txt';

let expRegC = /[a-zA-z]+.[a-zA-z]+/;

console.log(expRegC.test(stringC1));
console.log(expRegC.test(stringC2));
console.log(expRegC.test(stringC3));

console.log(stringC3.match(expRegC));

const stringD1 = 'abcba';
const stringD2 = '12321';
const stringD3 = '_1a1_';

let expRegD = /[\w]{2}\w[\w]{2}/;

console.log(expRegD.test(stringD1));
console.log(expRegD.test(stringD2));
console.log(expRegD.test(stringD3));

console.log(stringD3.match(expRegD));

const stringE1 = 'Bee';
const stringE2 = 'zapp';
const stringE3 = 'Crow';
const stringE4 = 'Eagle';
const stringE5 = 'Zorro';
const stringE6 = 'Mouse';
const stringE7 = 'Ape';
const stringE8 = 'You';

const wordsToMatch = ['Bee', 'zapp', 'Crow', 'Eagle', 'Zorro', 'mouse', 'Ape', 'You'];

function match(array){
    let arrayMatched = [];
    let expRegE = /a|A|z|Z/;
    for(let i=0; i<array.length; i++){
        if (!expRegE.test(array[i])){
            arrayMatched.push(array[i]);
        }
    }
    return arrayMatched;
}

wordsMatched = match(wordsToMatch);
console.log(wordsMatched);

const stringF = 'Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.';

function matchedTags(string){
    const expRegF = /[\w\s\?]+(?=(<\w+>[\w\s\<\-\/]+<\/\w+>))|(?<=(<\w+>[\w\s\<\-\/]+<\/\w+>))[\w\s\?]+/g;
    let arrayMatched = string.match(expRegF);
    let arrayNested = [];
    for(let i = 1; i<arrayMatched.length; i++){
        let stringNew = string.split(arrayMatched[i])[0];
        let word = stringNew.split(arrayMatched[i])[0]
        arrayNested.push(word.replace(arrayMatched[i-1],""));
        string = string.split(arrayMatched[i])[1]
    }
    return arrayNested;
}

arrayNestedTags = matchedTags(stringF);
console.log(arrayNestedTags)
