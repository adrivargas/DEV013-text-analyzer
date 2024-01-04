import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//y
const textArea = document.querySelector('textarea');


textArea.addEventListener('input',()=>{
    const wordCount = analyzer.getWordCount(textArea.value);
    const CharacterCount = analyzer.getCharacterCount(textArea.value);
    const characterno = analyzer.getCharacterCountExcludingSpaces(textArea.value);
    const numberCount = analyzer.getNumberCount(textArea.value);
    const numberSum = analyzer.getNumberSum(textArea.value);
    const wordlength = analyzer.getAverageWordLength(textArea.value);
    
    const wordc = document.querySelector("li[data-testid='word-count']");
    const recc = document.querySelector("li[data-testid='character-count']");
    const excl = document.querySelector("li[data-testid='character-no-spaces-count']");
    const numr = document.querySelector("li[data-testid='number-count']");
    const sum = document.querySelector("li[data-testid='number-sum']");
    const logn = document.querySelector("li[data-testid='word-length-average']");

    wordc.innerHTML = "Recuento de palabras:"+wordCount;
    recc.innerHTML = "Recuento de Caracteres: "+CharacterCount;
    excl.innerHTML = "Caracteres excluyendo espacios: "+characterno;
    numr.innerHTML = "Recuento de Numeros: "+numberCount;
    sum.innerHTML = "Suma total de numeros: "+numberSum;
    logn.innerHTML = "Longitud media de palabras: "+wordlength;
})




document.addEventListener('DOMContentLoaded',function(){
    let textA = document.querySelector('textarea[name="texto"]');
    const wordc = document.querySelector("li[data-testid='word-count']");
    const recc = document.querySelector("li[data-testid='character-count']");
    const excl = document.querySelector("li[data-testid='character-no-spaces-count']");
    const numr = document.querySelector("li[data-testid='number-count']");
    const sum = document.querySelector("li[data-testid='number-sum']");
    const logn = document.querySelector("li[data-testid='word-length-average']");
    const resetbt = document.getElementById('reset-button');

    resetbt.addEventListener('click',function(){
        textA.value='';
        wordc.innerHTML = "Recuento de palabras: 0";
        recc.innerHTML = "Recuento de Caracteres: 0";
        excl.innerHTML = "Caracteres excluyendo espacios: 0";
        numr.innerHTML = "Recuento de Numeros: 0";
        sum.innerHTML = "Suma total de numeros: 0";
        logn.innerHTML = "Longitud media de palabras: 0";
    })
})