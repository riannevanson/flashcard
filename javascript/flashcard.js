


var words = ["Boek", "Hoi", "Hoe gaat het?"];

var randomWords = words[Math.floor(Math.random() * words.length)]
console.log(randomWords);

function showRandomWord(){
    document.getElementById('randomword').innerHTML = randomWords;
}
console.log(showRandomWord())
=======
