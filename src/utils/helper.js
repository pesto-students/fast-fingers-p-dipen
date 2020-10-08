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

export const getMaxFirstIndexValue = (array) => {
  let index = -1,
    length = array.length,
    maxValue = Number.MIN_VALUE,
    maxValueFirstIndex = -1;
  while (++index < length) {
    let value = array[index];
    if (value > maxValue) {
      maxValue = value;
      maxValueFirstIndex = index;
    }
  }
  return maxValueFirstIndex;
};

export const fmtMSS = (s) => {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
};
