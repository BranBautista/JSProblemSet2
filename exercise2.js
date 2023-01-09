//***** A *****/

const stringA1 = 'September 29, 2017 2';
const stringA2 = 'February 99, 0001';
const stringA3 = 'June 04, 3000';

let expRegA = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+[0-3][0-9],\s+[0-2][0-9]{3}\b/;

console.log(expRegA.test(stringA1));
console.log(expRegA.test(stringA2));
console.log(expRegA.test(stringA3));


//***** B *****/


const stringB1 = 'A52';
const stringB2 = 'd747';
const stringB3 = '27X';
const stringB4 = 'v2';

let expRegB = /\b[0-9]+[a-zA-Z]\b|\b[[a-zA-Z][0-9]+\b/;

console.log(expRegB.test(stringB1));
console.log(expRegB.test(stringB2));
console.log(expRegB.test(stringB3));
console.log(expRegB.test(stringB4));


//***** C *****/


const stringC1 = 'test.java';
const stringC2 = 'program.cpp';
const stringC3 = 'newReport.txt';

let expRegC = /^[a-zA-z]+.(java|cpp|txt)$/;

console.log(expRegC.test(stringC1));
console.log(expRegC.test(stringC2));
console.log(expRegC.test(stringC3));


//***** D *****/


const stringD1 = 'abcba';
const stringD2 = '12321';
const stringD3 = '_1a1_';

function palindrome (word){
    let regex = /(.)(?:(.)(.)\2)\1/
    let expReg = new RegExp(regex);
    return expReg
}

console.log(palindrome(stringD1).test(stringD1));
console.log(palindrome(stringD2).test(stringD2));
console.log(palindrome(stringD3).test(stringD3));


//***** E *****/


const wordsToMatch = 'Bee zapp Crow Eagle Zorro mouse Ape You';

let expRegE = /\b[b-yB-Y]+\b/g;

wordsMatchedBY = wordsToMatch.match(expRegE)

console.log(wordsMatchedBY)


//***** F *****/


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
