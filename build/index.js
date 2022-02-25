"use strict";
// a text editor function
const textEditor = (word) => {
    let newWord = word.split(' ');
    let i = 0;
    while (i < newWord.length) {
        if (newWord[i] === 'Blossom') {
            newWord[i] = 'Bloom';
        }
        i++;
    }
    return newWord.join(' ');
};
let returnedVal = textEditor('Hello, my name is Blossom');
console.log(returnedVal);
