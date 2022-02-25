// a text editor function
import addFunc from "./modules/add";

const textEditor = (word: string) => {
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

console.log(addFunc);
console.log(addFunc(6, 7));
