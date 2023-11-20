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
    while (userChoise != 'even' && userChoise != 'odd') {
        userChoise = prompt("Chose even or odd by typing your choise: ");
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

function isEven(num) {
    return num % 2 == 0;
}

let userChoise = getUserChoise();
let userNumber = getUserNumber();
let randomNumber = getRandomNumber(0, 6);

let sum = parseInt(userNumber) + parseInt(randomNumber);
console.log("");

let output = `
DATAS
user choise: ${userChoise}
user number: ${userNumber}
computer number: ${randomNumber}
sum: ${sum}
`;

if (isEven(sum) && userChoise == "even") {
    output += "The sum is even: U r the winner!";
} else if (!isEven(sum) && userChoise == "odd") {
    output += "The sum is odd: U r the winner!";
} else {
    output += "Nice try, for a loser...";
}

console.log(output);



