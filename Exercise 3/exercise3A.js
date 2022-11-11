function shift(word) {
    regex = new RegExp ('\\w','g');
    function replacer(character){
        if(character == 'z'){
            return String.fromCharCode('a'.charCodeAt());
        }
        else if (character == 'Z'){
            return String.fromCharCode('A'.charCodeAt());
        }
        else if (character == '9'){
            return String.fromCharCode('0'.charCodeAt());
        }
        else {
            return String.fromCharCode(character.charCodeAt()+1)
        }
    }
    let newSring = word.replace(regex,replacer);
    return newSring
}

let wordOne = 'aBc';
let wordTwo = 'xyz';
let wordThree = 'aK89';

console.log(shift(wordOne));
console.log(shift(wordTwo));
console.log(shift(wordThree));