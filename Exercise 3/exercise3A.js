// Unicode values:
// 0 - 9 : 48 - 57
// a - z : 97 - 122
// A - Z : 65 - 90

function shift(string) {
    let stringShifted = '';
    let regexa = /[a-y]/, regexA = /[A-Y]/, regexN = /[0-8]/;

    arrayCharacters = string.split('');

    arrayCharacters.map(function(character){
        if (character.match(regexa) || character.match(regexA) || character.match(regexN)){
            stringShifted = stringShifted + String.fromCharCode(character.charCodeAt()+1);
        }
        switch(character){
            case 'z':
                stringShifted = stringShifted + String.fromCharCode('a'.charCodeAt());
                break;
            case 'Z':
                stringShifted = stringShifted + String.fromCharCode('A'.charCodeAt());
                break;
            case '9':
                stringShifted = stringShifted + String.fromCharCode('0'.charCodeAt());
                break;
        }
    })
}

let wordTwo = 'ayzK89';

shift(wordTwo);
