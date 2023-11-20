/* PALINDROME */

function isPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        let reverseIndex = word.length - i - 1;
        if (word[i] != word[reverseIndex]) {
            return false;
        }
    }
    return true;
}

function removeWhiteSpaces(word) {
    return word.replace(/\s+/g, '');
}

let word = prompt("Enter a word: ");

word = removeWhiteSpaces(word)

if (isPalindrome(word)) {
    console.log("The word " + word + " IS palindrome.")
} else {
    console.log("The word " + word + " IS NOT palindrome.")
}

/* EVEN OR ODD */

function getUserChoise() {
    let userChoise = '';
    while (userChoise != '0' && userChoise != '1') {
        userChoise = prompt("Type 0 to choose EVEN or 1 to choose ODD: ");
    }
    return userChoise;
}

function getUserNumber() {
    let userNumber = 0;
    while (userNumber < 1 || userNumber > 5) {
        userNumber = prompt("Now enter a number between 1 and 5 (included): ");
    }
    return userNumber;
}

function getRandomNumber(upperLimit, lowerLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit)
}

let userChoise = getUserChoise();
let userNumber = getUserNumber();
let randomNumber = getRandomNumber(0, 6);







