


var DutchWords = ["Boek", "Hoi", "Hoe gaat het?"];
var portugueseWords = ["Livro", "Ola", "Oi como esta?"];

var randomWords = DutchWords[Math.floor(Math.random() * DutchWords.length)]
console.log(randomWords);

function showRandomWord(){
    document.getElementById('randomword').innerHTML = randomWords;
}
console.log(showRandomWord())

function submitEvent(){
  document.getElementById('randomword').innerHTML = randomWords;

}
