function shift(word) {
    let regex = new RegExp ('[a-zA-z0-9]','g');
    function replacer(character){
        if(character == 'z'){
            return 'a';
        }
        else if (character == 'Z'){
            return 'A';
        }
        else if (character == '9'){
            return '0';
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