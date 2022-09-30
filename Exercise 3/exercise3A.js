let wordTwo = 'aK89'

function shift(string) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';

    let stringShifted = '';
    let regexA = /[A-Z]/;
    let regexN = /[0-9]/;
    for(let i = 0; i < string.length; i++){
        if(regexN.test(string[i])){
            if(string[i]=='9'){
                stringShifted = stringShifted + '0';
            }
            else{
                let indexNumbers = numbers.indexOf(string[i]);
                stringShifted = stringShifted + numbers[indexNumbers+1];
            }
        }
        else if (regexA.test(string[i])){
            stringLower = string[i].toLowerCase();
            stringShifted = stringShifted + shift(stringLower).toUpperCase();
        }
        else {
            if(string[i]=='z'){
                stringShifted = stringShifted + 'a';
            }
            else {
                let indexAlphabet = alphabet.indexOf(string[i]);
                stringShifted = stringShifted + alphabet[indexAlphabet+1];
            }
        }
    }
    return stringShifted
}

wordTwoShifted = shift(wordTwo);

console.log(wordTwoShifted);