const analyzer = {  
  getWordCount: (text) => {
    
    const wordsArray = text.split(/\s+/);
    // const wordsArray = text.split(/\s+/);
    console.log(wordsArray);
    return wordsArray.length;
  
  },

  getCharacterCount: (text) => {
    let count = 0;

    for (let char of text) {
      count++;
    }

    return count;
  },

  getCharacterCountExcludingSpaces: (text) => {
    let count = 0;

    for (let char of text) {
      if (!char.match(/\s/)) {
        // Si no es un espacio, incrementa el contador
        count++;
      }
    }

    return count;
  },

  getNumberCount: (text) => {
    // Implementa la lógica para contar números
    const numbersArray = text.match(/\d+/g);
    return numbersArray ? numbersArray.length : 0;
  },

  getNumberSum: (text) => {
    let sum = 0;

    for (let char of text) {
      if (char.match(/\d/)) {
        // Si es un número, suma al total
        sum += parseInt(char);
      }
    }

    return sum;
  },

  getAverageWordLength: (text) => {
    let totalWords = 0;
    let totalLength = 0;
    let inWord = false;

    for (let char of text) {
      if (char.match(/\s/)) {
        // Si es un espacio, indica que estamos fuera de una palabra
        inWord = false;
      } else {
        // Si no es un espacio y no estamos en una palabra, incrementa los contadores
        if (!inWord) {
          totalWords++;
          inWord = true;
        }
        totalLength++;
      }
    }

    return totalWords > 0 ? (totalLength / totalWords).toFixed(2) : 0;
  },
};

export default analyzer;
