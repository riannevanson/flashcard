


var DutchWords = [{ question : "Boek", answer : "Livro"}, {question: "Hoi", answer: "Ola"}, {question : "Hoe gaat het?", answer : "Oi como esta?"}];
var indexNumber = Math.floor(Math.random() * DutchWords.length)



var randomWords = DutchWords[indexNumber].question
// var randomWords = DutchWords[Math.floor(Math.random() * DutchWords.length)].question
var randomAnswer = DutchWords[indexNumber].answer

console.log(DutchWords[0].question);
console.log(randomWords);
console.log(`this is randomanswer ${randomAnswer}`)

function showRandomWord(){
    document.getElementById('randomword').innerHTML = randomWords;
}
console.log(showRandomWord())


function submitEvent(){
  document.getElementById('randomword').removeAttribute = '';
  document.getElementById('randomword').innerHTML = randomAnswer;
  console.log(randomWords)
}
