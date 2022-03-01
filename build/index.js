"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textEditor = void 0;
var add_1 = __importDefault(require("./controller/add"));
console.log((0, add_1.default)(6, 7));
// a text editor function
var textEditor = function (word) {
    var newWord = word.split(' ');
    var i = 0;
    while (i < newWord.length) {
        if (newWord[i] === 'movie') {
            newWord[i] = 'film';
        }
        i++;
    }
    return newWord.join(' ');
};
exports.textEditor = textEditor;
(0, exports.textEditor)('The movie that just came out is a phenomenal movie');
