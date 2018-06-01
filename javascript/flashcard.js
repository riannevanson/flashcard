


var DutchWords = [{ question : "Boek", answer : "Livro"}, {question: "Hoi", answer: "Ola"}, {question : "Hoe gaat het?", answer : "Oi como esta?"}];
var indice = DutchWords.length;
var randomWords = DutchWords[Math.floor(Math.random() * indice.length)]
//console.log(DutchWords[].question);
console.log(randomWords);

function showRandomWord(){
    document.getElementById('randomword').innerHTML = randomWords;
}
console.log(showRandomWord())

//function showAnswer(){
//}
