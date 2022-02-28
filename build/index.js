"use strict";
// a text editor function
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = __importDefault(require("./controller/add"));
const textEditor = (word) => {
    const newWord = word.split(' ');
    let i = 0;
    while (i < newWord.length) {
        if (newWord[i] === 'Blossom') {
            newWord[i] = 'Bloom';
        }
        i++;
    }
    return newWord.join(' ');
};
const returnedVal = textEditor('Hello, my name is Blossom');
console.log(returnedVal);
console.log((0, add_1.default)(6, 7));
