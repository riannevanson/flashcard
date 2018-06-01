


var DutchWords = [{ question : "Boek", answer : "Livro"}, {question: "Hoi", answer: "Ola"}, {question : "Hoe gaat het?", answer : "Oi como esta?"}];
var question = DutchWords[question];
var sizestring = DutchWords.length
var randomWords = DutchWords[Math.floor(Math.random() * question.length)]
console.log(randomWords);

function showRandomWord(){
    document.getElementById('randomword').innerHTML = randomWords;
}
console.log(showRandomWord())

function showAnswer(){
}
