import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//
const textArea = document.querySelector('textarea');
console.log("Hola");
console.log(textArea);
textArea.addEventlistener('input',()=>{
    const wordCount = analyzer.getWordCount(textArea.value);
    //const result = document.querySelector('li');
    const result = document.querySelector(".count");
    result.innerHTML="Recuento de palabras:"+wordCount;
    console.log("result");

})



// document.addEventListener('DOMContentLoaded', () => {
//     const textArea = document.querySelector('textarea');
    
//     const resultList = document.querySelectorAll('.count');
  
//     function updateResults() {
//       const text = textArea.value;
//       console.log(text);
  
//       resultList[0].textContent = `Recuento de palabras: ${analyzer.getWordCount(text)}`;
//       resultList[1].textContent = `Recuento de Caracteres: ${analyzer.getCharacterCount(text)}`;
//       resultList[2].textContent = `Caracteres excluyendo espacios: ${analyzer.getCharacterCountExcludingSpaces(text)}`;
//       resultList[3].textContent = `Recuento de Numeros: ${analyzer.getNumberCount(text)}`;
//       resultList[4].textContent = `Suma total de numeros: ${analyzer.getNumberSum(text)}`;
//       resultList[5].textContent = `Longitud media de palabras: ${analyzer.getAverageWordLength(text)}`;
//     }
  
//     textArea.addEventListener('input', updateResults);
  
// });


function reset(){

   const resetbutton = document.getElementById("reset-button") 

   const texti = document.querySelector('[name="texto"]') 

   texti.value = ''
}

// const textarea=document.querySelector("textarea[name='texto']");
// textarea.addEvenListener("input",countEvent){
//     const text=textarea.value;
//     //Deberia actualizar mis contenidos 
//     const numero = analyzer.getWordCount(text);
//     text.innerHTML = "Recuento palabras: "+numero;
//     console.log();
// }
// text.addEventListener("input",countEvent);
