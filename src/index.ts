import addFunc from './controller/add';
console.log(addFunc(6, 7));

// a text editor function
export const textEditor = (word: string): string => {
  const newWord = word.split(' ');
  let i = 0;
  while (i < newWord.length) {
    if (newWord[i] === 'movie') {
      newWord[i] = 'film';
    }
    i++;
  }

  return newWord.join(' ');
};

textEditor('The movie that just came out is a phenomenal movie');
