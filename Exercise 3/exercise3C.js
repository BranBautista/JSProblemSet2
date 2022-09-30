let textNasa = 'Here I will count a story: in 2010, the planetary defence team at NASA had identified redivider and logged 90 per cent of the asteroids near madam Earth measuring 1km wide. These rotor objects near to the earth, or NEOs, are deified the size of mountains and include anything within 50 million kilometres civic  of Earths orbit. With an estimated 50 left to log, NASA says none of the 887 it knows about are a level significant danger to the planet. Aba reviver. Now NASA is working towards logging some of the smaller asteroids, those measuring 140 metres wide or more. Of the 25000 estimated asteroids of this radar size, so far racecar about 8000 have been logged, leaving 17000 unaccounted for. Considering that an asteroid of 19 length that exploded refer above the city of Chelyabinsk in Russia in 2013 injured 1200 people, these kayak middle-sized asteroids would be a serious danger if they enter to the orbit of the Earth.';

//I added palindromes randomly in the text, even if they don't make sense with the text.

function matchPalindrome(text){
    let textSplit = text.split(" ");
    let arrayPalindromes = [];
    for (let i = 0; i < textSplit.length; i++){
        let word, wordReversed;
        let arrayLetters, arrayLettersReversed = [];
        word = textSplit[i].replace(/[^A-Za-z]/g,''); //I want to quit other characters than letters
        if (word !== ''){ //With this statement I make sure to ignore the blank spaces that could be added to the array
            arrayLetters = word.split('');
            arrayLettersReversed = arrayLetters.reverse();
            wordReversed = arrayLettersReversed.join('');
            if(word.toLowerCase() === wordReversed.toLowerCase()){
                arrayPalindromes.push(word);
            } else {
                continue;
            }
        }
    }
    return arrayPalindromes;
}

palindromes = matchPalindrome(textNasa);

console.log(palindromes);