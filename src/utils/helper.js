import dictionary from '../assets/data/dictionary.json';
export const returnLevelName = (level) => {
  if (parseFloat(level) < 1.5) {
    return 'easy';
  } else if (parseFloat(level) >= 1.5 && parseFloat(level) < 2) {
    return 'medium';
  } else {
    return 'hard';
  }
};

export const getWordFromDictionary = (level) => {
  const keyWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  const timerValue = keyWord.length / parseFloat(level).toFixed(2);
  return { keyWord, timerValue: timerValue < 2 ? 2.0 : timerValue.toFixed(2) };
};
