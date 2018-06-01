


var DutchWords = [{ question : "Boek", answer : "Livro"}, {question: "Hoi", answer: "Ola"}, {question : "Hoe gaat het?", answer : "Oi como esta?"}];

var randomWords = DutchWords[Math.floor(Math.random() * DutchWords.length)].question



console.log(DutchWords[0].question);
console.log(randomWords);

function showRandomWord(){
    document.getElementById('randomword').innerHTML = randomWords;
}
console.log(showRandomWord())


// function submitEvent(){
//   document.getElementById('randomword').innerHTML = randomWords;
// }
